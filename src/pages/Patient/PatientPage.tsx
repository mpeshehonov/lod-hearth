import React, {useEffect, useState} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import './styles.scss';
import {Skeleton, Button} from 'antd';
import {request} from '../../shared/utils/api';
import {RouteParams} from '../../shared/interfaces/route';
import {Patient} from '../../shared/interfaces/patient';
import {FormOutlined} from '@ant-design/icons';

const PatientPage = () => {
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
          <Link to={`/patient/${patient.id}/edit`}>
            <Button type="primary" style={{marginBottom: 16, float: 'right'}}>
              <FormOutlined />
              Редактировать
            </Button>
          </Link>
          <h1>{patient.firstName}</h1>
          <p>{patient.id}</p>
          <p>{patient.mail}</p>
          <p>{patient.age}</p>
        </>
      }
    </div>
  );
};

export default PatientPage;
  