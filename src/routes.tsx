import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Profile } from './pages/Account/Profile';
import { SignIn } from './pages/Account/SignIn';

import { ForgotPassword } from './pages/Account/Password/ForgotPassword';
import { ResetPassword } from './pages/Account/Password/ResetPassword';

import { CarDetail } from './pages/Cars/Detail';
import { CarsList } from './pages/Cars/List';
import { RentedCar } from './pages/Cars/Rented';
import { Start } from './pages/Start';
import { SignUp } from './pages/Account/SignUp';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Start} />
        
        <Route path='/cars/list' component={CarsList} />
        <Route path='/cars/detail/:id' component={CarDetail} />
        <Route path='/cars/rented' component={RentedCar} />
        
        <Route path='/account/profile' component={Profile} />
        <Route path='/account/signin' component={SignIn} />
        <Route path='/account/signup' component={SignUp} />

        <Route path='/account/password/forgot' component={ForgotPassword} />
        <Route path='/account/password/reset' component={ResetPassword} />
      </Switch>
    </Router>
  )
}

export { Routes }