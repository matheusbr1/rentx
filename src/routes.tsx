import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Profile } from './pages/Account/Profile';
import { SignIn } from './pages/Account/SignIn';
import { PasswordRecovery } from './pages/Account/PasswordRecovery';
import { CarDetail } from './pages/Cars/Detail';
import { CarsList } from './pages/Cars/List';
import { RentedCar } from './pages/Cars/Rented';
import { Start } from './pages/Start';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Start} />
        
        <Route path='/cars/list' component={CarsList} />
        {/* <Route path='/cars/filter' component={} /> */}
        <Route path='/cars/detail' component={CarDetail} />
        <Route path='/cars/rented' component={RentedCar} />
        
        <Route path='/account/profile' component={Profile} />
        <Route path='/account/signin' component={SignIn} />
        <Route path='/account/password-recovery' component={PasswordRecovery} />
      </Switch>
    </Router>
  )
}

export { Routes }