import React, {useEffect, useState} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import './styles.scss';
import {Skeleton, Button, Progress, Descriptions, Modal} from 'antd';
import {request} from '../../shared/utils/api';
import {RouteParams} from '../../shared/interfaces/route';
import {Client} from '../../shared/interfaces/client';
import {FormOutlined} from '@ant-design/icons';

const ClientPage = () => {
  const params = useRouteMatch<RouteParams>('/client/:id');
  const [client, setClient] = useState<Client | null>(null);

  function error(maxTrouble: number) {
    Modal.error({
      title: 'Внимание!',
      content: (
          <div>
            <p>Высокая вероятность возникновения проблемы в сердечно-сосудистой системе: <b>{maxTrouble} %</b><br/>
            Необходимо срочно обратиться к врачу!</p>
          </div>
      ),
      onOk() {},
    });
  }

  function warning(maxTrouble: number) {
    Modal.warning({
      title: 'Предупреждение',
      content: (
          <div>
            <p>Высокая вероятность возникновения проблемы в сердечно-сосудистой системе: <b>{maxTrouble} %</b><br/>
            Рекомендуем посетить врача.</p>
          </div>
      ),
      onOk() {},
    });
  }

  function info(maxTrouble: number) {
    Modal.info({
      title: 'Предупреждение',
      content: (
          <div>
            <p>Возможны боолезни сердечно-сосудистой системы: <b>{maxTrouble} %</b><br/>
            Необходимо принять профилактические меры. Рекомендуем посетить врача.</p>
          </div>
      ),
      onOk() {},
    });
  }

  useEffect(() => {
    request(`client/${params?.params?.id}`, {
      method: 'GET'
    }).then((r) => {
      setClient(r);
      const maxTrouble = Math.max(r.gipertenziya, r.onmk, r.infarkt, r.heart_failure, r.other_ill);
      if (maxTrouble >= 70) {
        error(maxTrouble);
      } else if (maxTrouble >= 50) {
        warning(maxTrouble);
      } else if (maxTrouble >= 20) {
        info(maxTrouble);
      }
    });
  }, [params?.params?.id]);

  return (
    <div>
      {!client && <Skeleton active />}

      {
        client &&
        <>
          <Link to={`/client/${client.id}/edit`}>
            <Button type="primary" style={{marginBottom: 16, float: 'right'}}>
              <FormOutlined />
              Редактировать
            </Button>
          </Link>

          <Descriptions title={`Анкета № ${client.id}`} bordered layout="vertical">
            <Descriptions.Item label="Дата рождения">
              {client.birthday}
            </Descriptions.Item>
            <Descriptions.Item label="Возраст">
              {client.age}
            </Descriptions.Item>
            <Descriptions.Item label="Профессия">
              {client.profession}
            </Descriptions.Item>
            <Descriptions.Item label="Этнос">
              {client.ethnos}
            </Descriptions.Item>
            <Descriptions.Item label="Национальность">
              {client.national}
            </Descriptions.Item>
            <Descriptions.Item label="Религия">
              {client.religion}
            </Descriptions.Item>
            <Descriptions.Item label="Пол">
              {client.sex}
            </Descriptions.Item>
            <Descriptions.Item label="Образование">
              {client.study}
            </Descriptions.Item>
            <Descriptions.Item label="Проживает">
              {client.areaType === '1' ? 'Город' : 'Село'}
            </Descriptions.Item>
            <Descriptions.Item label="Вероятность артериальной гипертензии">
               <Progress
                 type="circle"
                 strokeColor={{
                   '20%': '#87d068',
                   '100%': '#faad14'
                 }}
                 percent={client.gipertenziya}
               />
            </Descriptions.Item>
            <Descriptions.Item label="Вероятность ОНМК">
               <Progress
                 type="circle"
                 strokeColor={{
                   '20%': '#87d068',
                   '100%': '#faad14'
                 }}
                 percent={client.onmk}
               />
            </Descriptions.Item>
            <Descriptions.Item label="Вероятность cтенокардии, ИБС, инфаркта миокарда">
               <Progress
                 type="circle"
                 strokeColor={{
                   '20%': '#87d068',
                   '100%': '#faad14'
                 }}
                 percent={client.infarkt}
               />
            </Descriptions.Item>
            <Descriptions.Item label="Вероятность сердечной недостаточности">
               <Progress
                 type="circle"
                 strokeColor={{
                   '20%': '#87d068',
                   '100%': '#faad14'
                 }}
                 percent={client.heart_failure}
               />
            </Descriptions.Item>
            <Descriptions.Item label="Вероятность прочих заболеваний сердца">
               <Progress
                 type="circle"
                 strokeColor={{
                   '20%': '#87d068',
                   '100%': '#faad14'
                 }}
                 percent={client.other_ill}
               />
            </Descriptions.Item>
            <Descriptions.Item label="Персональные рекомендации">
              Текст
            </Descriptions.Item>
          </Descriptions>
        </>
      }
    </div>
  );
};

export default ClientPage;
