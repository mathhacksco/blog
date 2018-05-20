/* @flow */
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './App';
import Home from './components/home-page/Home';
import PostPage from './components/post-page/PostPage';
import PostsPage from './components/posts-page/PostsPage';
import TagPage from './components/tag-page/TagPage';
import AboutPage from './components/about-page/AboutPage';
import BlogPage from './components/blog-page/Blog';

export default function Routes() {
  return (
    <Router>
      <Route path="/">
        <App>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={AboutPage}/>
          <Route path="/blog" exact component={BlogPage}/>
          <Route path="/posts" component={PostsPage}/>
          <Route path="/posts/:id" component={PostPage}/>
          <Route path="/tags/:id" component={TagPage}/>
        </App>
      </Route>
    </Router>
  );
}
