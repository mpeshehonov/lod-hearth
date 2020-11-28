import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Table, Row, Col, Button} from 'antd';
import './styles.scss';
import {request} from '../../shared/utils/api';
import {FormOutlined, UserOutlined, UserAddOutlined} from '@ant-design/icons';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: 'Место проживания',
      dataIndex: 'areaType',
      render: (areaType: number) => areaType === 1 ? 'Город' : 'Село'
    },
    {
      title: 'Дата рождения',
      dataIndex: 'birthday'
    },
    {
      title: 'Возраст',
      dataIndex: 'age'
    },
    {
      title: 'Действия',
      dataIndex: 'id',
      render: (id: string) => (
        <>
          <Link to={`/client/${id}`}>
            <Button type="primary">
              <UserOutlined />
              Открыть
            </Button>
          </Link>
          &nbsp;&nbsp;
          <Link to={`/client/${id}/edit`}>
            <Button type="primary">
              <FormOutlined />
              Изменить
            </Button>
          </Link>
        </>
      )
    },
  ];

  useEffect(() => {
    request('clients', {
      method: 'GET'
    }).then((r) => {
      setClients(r);
      setTableLoading(false);
    });
  }, []);

  return (
    <div>
      <Row>
        <Col span={24}>
          <Link to="/client/add">
            <Button type="primary" style={{marginBottom: 16, float: 'right'}}>
              <UserAddOutlined />
              Добавить анкету
            </Button>
          </Link>
          <Table
            rowKey="id"
            columns={columns}
            dataSource={clients}
            loading={tableLoading}
            title={() => 'Анкеты'}
            bordered
          />
        </Col>
      </Row>
    </div>
  );
};

export default Clients;
  