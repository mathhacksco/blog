import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Home, PostPage } from './components';
import App from './App';

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/posts/:id" component={PostPage}/>
      </Route>
    </Router>
  );
}
