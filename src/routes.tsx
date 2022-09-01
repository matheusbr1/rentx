import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Profile } from './pages/Account/Profile';
import { CarDetail } from './pages/Cars/Detail';
import { CarsFilter } from './pages/Cars/Filter';
import { CarsList } from './pages/Cars/List';
import { Start } from './pages/Start';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Start} />
        <Route path='/cars/list' component={CarsList} />
        <Route path='/cars/filter' component={CarsFilter} />
        <Route path='/cars/detail' component={CarDetail} />
        <Route path='/account/profile' component={Profile} />
      </Switch>
    </Router>
  )
}

export { Routes }