import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CarsList } from './pages/Cars/List';
import { Start } from './pages/Start';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Start} />
        <Route path='/cars/list' component={CarsList} />
      </Switch>
    </Router>
  )
}

export { Routes }