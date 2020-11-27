import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Clients from './Clients';
import ClientPage from './ClientPage';
import ClientEdit from './ClientEdit';
import ClientAdd from './ClientAdd';

export default () => {
  return (
    <Switch>
      <Route path="/" component={Clients} exact />
      <Route path="/client/add" component={ClientAdd} exact />
      <Route path="/client/:id" component={ClientPage} exact />
      <Route path="/client/:id/edit" component={ClientEdit} />
    </Switch>
  );
};