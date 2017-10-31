// @flow weak

import React            from 'react';
import {
  Route,
  Switch
 }                      from 'react-router';
import Home             from '../views/home';
import Voucher          from '../views/voucher';
import RegisterPatient  from '../views/register_patient';
import RegisterPos      from '../views/register_pos';
import PrivateRoute     from '../components/privateRoute/PrivateRoute';
import Protected        from '../views/protected';

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/voucher" component={Voucher} />
      <Route path="/register_patient" component={RegisterPatient} />
      <Route path="/register_pos" component={RegisterPos} />
      {/* private views: need user to be authenticated */}
      <PrivateRoute path="/protected" component={Protected} />
    </Switch>
  );
};

export default MainRoutes;
