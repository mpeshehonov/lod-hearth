import React, {useEffect, useState} from 'react';
import './styles.scss';
import {Link, useRouteMatch} from 'react-router-dom';
import {Button, Skeleton} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {RouteParams} from '../../shared/interfaces/route';
import {Patient} from '../../shared/interfaces/patient';
import {request} from '../../shared/utils/api';

const PatientEdit = () => {
  const params = useRouteMatch<RouteParams>('/patient/:id');
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    request(`patients/${params?.params?.id}`, {
      method: 'GET'
    }).then((r) => {
      setPatient(r);
    });
  }, []);

  return (
    <div>
      {!patient && <Skeleton active />}

      {
        patient &&
        <>
          <Link to={`/patient/${patient.id}`}>
            <Button type="primary" style={{marginBottom: 16, float: 'right'}}>
              <UserOutlined />
              Посмотреть
            </Button>
          </Link>
            PatientEdit component works
        </>
      }
    </div>
  );
};

export default PatientEdit;
  