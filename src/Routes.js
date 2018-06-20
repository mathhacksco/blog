/* @flow */
import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';

import Home from './components/home-page/Home';
import PostPage from './components/post-page/PostPage';
import PostsPage from './components/posts-page/PostsPage';
import TagPage from './components/tag-page/TagPage';
import AboutPage from './components/about-page/AboutPage';
import BlogPage from './components/blog-page/Blog';

import store from './redux/store';

type Props = {
  isBrowser?: boolean,
};

export default function Routes({ isBrowser }: Props) {
  const Router = isBrowser
    ? BrowserRouter
    : // eslint-disable-next-line react/display-name
      ({ children }: any) => (
        <StaticRouter context={{}}>{children}</StaticRouter>
      );
  return (
    <Provider store={store}>
      <Router>
        <Route path="/">
          <Fragment>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/blog" exact component={BlogPage} />
            <Route path="/posts" component={PostsPage} />
            <Route path="/posts/:slug" component={PostPage} />
            <Route path="/tags/:id" component={TagPage} />
          </Fragment>
        </Route>
      </Router>
    </Provider>
  );
}
