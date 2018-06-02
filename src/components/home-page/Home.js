/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Slice, Nth, First } from 'react-iterators';

import { fetchPosts, fetchFeaturedPosts } from '../../redux/actionCreators/posts';
import { getPosts, getFeaturedPosts } from '../../redux/selectors/posts';
import PostExcerpt from '../post-excerpt/PostExcerpt';
import HeroPostExcerpt from '../hero-post-excerpt/HeroPostExcerpt';
import RowLayout from '../layout/row-layout/RowLayout';
import * as GoogleAnalytics from '../../utils/GoogleAnalytics';

// $FlowFixMe
import './Home.styles.scss';

import type State from '../../models/State';
import type PostCollection from '../../models/PostCollection';
import type { Dispatch } from '../../types/redux';

type OwnProps = {
  children?: ?Node | ?Node[];
};

type StateProps = {
  posts: PostCollection;
  featuredPosts: PostCollection;
};

type DispatchProps = {
  fetchPosts: () => Promise<void>;
  fetchFeaturedPosts: () => Promise<void>;
};

type Props = OwnProps & StateProps & DispatchProps;

function mapStateToProps(state: State): StateProps {
  return {
    posts: getPosts(state),
    featuredPosts: getFeaturedPosts(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchFeaturedPosts: () => dispatch(fetchFeaturedPosts()),
  };
}

// $FlowFixMe
@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component<Props, {}> {

  props: Props;
  state = {}

  componentDidMount() {
    GoogleAnalytics.trackEvent({
      category: GoogleAnalytics.CategoryEnum.HomePage,
      action: GoogleAnalytics.ActionEnum.PageView,
      label: 'Home Page View'
    });
    this.props.fetchPosts();
    this.props.fetchFeaturedPosts();
  }

  render() {
    const featuredPosts = this.props.featuredPosts.toArray();
    const latestPosts = this.props.posts.exclude(this.props.featuredPosts).toArray();
    return (
      <div>
        <First
          array={featuredPosts}
          render={post => (
            <HeroPostExcerpt key={post.id} id={post.id} post={post}/>
          )}
        />
        <Slice
          start={1}
          end={4}
          array={featuredPosts}
          render={sliced => (
            <Map
              container={({ children }) => <RowLayout className="homepage-row-2">{children}</RowLayout>}
              array={sliced}
              render={post => <PostExcerpt key={post.id} id={post.id} post={post}/>}
            />
          )}
        />
        <Slice
          start={0}
          end={6}
          array={latestPosts}
          render={sliced => (
            <Map
              container={({ children }) => (
                <RowLayout className="homepage-row-2">
                  {children}
                </RowLayout>
              )}
              array={sliced}
              render={post => <PostExcerpt id={post.id} post={post}/>}
            />
          )}
        />
      </div>
    );
  }
}