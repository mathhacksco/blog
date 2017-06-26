import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Home, PostPage, TagPage } from './components';
import App from './App';

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/posts/:id" component={PostPage}/>
        <Route path="/tags/:id" component={TagPage}/>
      </Route>
    </Router>
  );
}
