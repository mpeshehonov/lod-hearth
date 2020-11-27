import React, {useEffect, useState} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import './styles.scss';
import {Skeleton, Button} from 'antd';
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
          <h1>Анкета №{client.id}</h1>
          <p>Дата рождения: {client.birthday}, возраст{client.age}</p>
        </>
      }
    </div>
  );
};

export default ClientPage;
  