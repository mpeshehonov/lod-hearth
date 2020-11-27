import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Patients from './Patients';
import PatientPage from './Patient';
import PatientEdit from './PatientEdit';
import PatientAdd from './PatientAdd';

export default () => {
  return (
    <Switch>
      <Route path="/" component={Patients} exact />
      <Route path="/patient/add" component={PatientAdd} exact />
      <Route path="/patient/:id" component={PatientPage} exact />
      <Route path="/patient/:id/edit" component={PatientEdit} />
    </Switch>
  );
};