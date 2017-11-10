/* @flow */
import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

import App from './App';
import Home from './components/Home';
import PostPage from './components/post-page/PostPage';
import PostsPage from './components/posts-page/PostsPage';
import TagPage from './components/tag-page/TagPage';

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/posts" component={PostsPage}/>
        <Route path="/posts/:id" component={PostPage}/>
        <Route path="/tags/:id" component={TagPage}/>
      </Route>
    </Router>
  );
}
