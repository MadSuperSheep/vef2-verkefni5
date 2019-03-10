import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import Home from './routes/home/Home';
import NotFound from './routes/notFound/NotFound';

import './App.scss';

/*
todo:
- setja upp react-helmet
- setja upp react-router
- sækja routes
*/

class App extends Component {
  render() {
    return (
      <>
        <Helmet title='hallo' />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
