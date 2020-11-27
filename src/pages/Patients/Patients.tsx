import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Table, Row, Col, Button} from 'antd';
import './styles.scss';
import {request} from '../../shared/utils/api';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);

  const columns = [
    {
      title: 'Имя',
      dataIndex: 'firstName'
    },
    {
      title: 'Email',
      dataIndex: 'mail'
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
          <Link to={`/patient/${id}`}>
            <Button type="primary">Перейти</Button>
          </Link>
          &nbsp;&nbsp;
          <Link to={`/patient/${id}/edit`}>
            <Button type="primary">Изменить</Button>
          </Link>
        </>
      )
    },
  ];

  useEffect(() => {
    request('patients', {
      method: 'GET'
    }).then((r) => {
      setPatients(r)
      setTableLoading(false);
    });
  }, []);

  return (
    <div>
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={patients}
            loading={tableLoading}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Patients;
  