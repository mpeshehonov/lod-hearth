import React, {useEffect, useState} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import './styles.scss';
import {Skeleton, Button, Progress, Descriptions} from 'antd';
import {request} from '../../shared/utils/api';
import {RouteParams} from '../../shared/interfaces/route';
import {Client} from '../../shared/interfaces/client';
import {FormOutlined} from '@ant-design/icons';

const ClientPage = () => {
  const params = useRouteMatch<RouteParams>('/client/:id');
  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    request(`client/${params?.params?.id}`, {
      method: 'GET'
    }).then((r) => {
      setClient(r);
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
            <Descriptions.Item label="Раса">
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
            <Descriptions.Item label="Семейное положение">
              {client.family}
            </Descriptions.Item>
            <Descriptions.Item label="Проживает">
              {client.areaType === '1' ? 'Город' : 'Село'}
            </Descriptions.Item>
            <Descriptions.Item label="Работает">
              {client.areaType === '1' ? 'Да' : 'Нет'}
            </Descriptions.Item>
            <Descriptions.Item label="На пенсии">
              {client.pension === '1' ? 'Да' : 'Нет'}
            </Descriptions.Item>
            <Descriptions.Item label="Прекращение работы по болезни">
              {client.work_end_by_ill === '1' ? 'Да' : 'Нет'}
            </Descriptions.Item>
            <Descriptions.Item label="Диабет">
              {client.diabet === '1' ? 'Да' : 'Нет'}
            </Descriptions.Item>
            <Descriptions.Item label="Длительность диабета">
              {client.diabet_long}
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
  