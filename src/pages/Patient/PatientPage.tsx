
import React, {useEffect, useState} from 'react';
import { useRouteMatch } from 'react-router-dom';
import './styles.scss';
import {request} from '../../shared/utils/api';
import {RouteParams} from '../../shared/interfaces/route';
import {Patient} from '../../shared/interfaces/patient';

const PatientPage = () => {
  const params = useRouteMatch<RouteParams>('/patient/:id');
  const [patient, setPatient] = useState<Patient|null>(null);

  useEffect(() => {
    request(`patients/${params?.params?.id}`, {
      method: 'GET'
    }).then((r) => {
      setPatient(r)
    });
  }, []);

  return (
    <div>
      { patient &&
        <>
          <h1>{patient.firstName}</h1>
          <p>{patient.id}</p>
          <p>{patient.mail}</p>
          <p>{patient.age}</p>
        </>
      }
    </div>
  )
}

export default PatientPage
  