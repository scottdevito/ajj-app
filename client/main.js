/**
 * Created by Scott on 11/6/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import { Welcome } from './components/welcome';
import BeltList from './components/belts/belt_list';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="beltlist" component={BeltList} />
    </Route>
  </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
});
