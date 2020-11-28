import React, {useEffect, useState} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import './styles.scss';
import {Skeleton, Button, Progress, Descriptions, Badge, Space} from 'antd';
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
  }, []);

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

          <Descriptions title={`Анкета № ${client.id}`} bordered>
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
            <Descriptions.Item label="Прогнозы">
              <Space>
               <Progress
                 type="circle"
                 strokeColor={{
                   '20%': '#87d068',
                   '100%': '#faad14'
                 }}
                 percent={3}
               />
               <Progress
                 type="circle"
                 strokeColor={{
                   '20%': '#87d068',
                   '100%': '#faad14'
                 }}
                 percent={8}
               />
               <Progress
                 type="circle"
                 strokeColor={{
                   '20%': '#87d068',
                   '100%': '#faad14'
                 }}
                 percent={4}
               />
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </>
      }
    </div>
  );
};

export default ClientPage;
  