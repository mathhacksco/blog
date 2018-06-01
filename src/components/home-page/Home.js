/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Slice, Nth, First } from 'react-iterators';

import { fetchPosts } from '../../redux/actionCreators/posts';
import { getPosts } from '../../redux/selectors/posts';
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
};

type DispatchProps = {
  fetchPosts: () => Promise<void>;
};

type Props = OwnProps & StateProps & DispatchProps;

function mapStateToProps(state: State): StateProps {
  return {
    posts: getPosts(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    fetchPosts: () => dispatch(fetchPosts())
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
  }

  render() {
    const posts = this.props.posts.toArray();
    return (
      <div>
        <First
          array={posts}
          render={post => (
            <HeroPostExcerpt key={post.id} id={post.id} post={post}/>
          )}
        />
        <Slice
          start={1}
          end={4}
          array={posts}
          render={sliced => (
            <Map
              container={({ children }) => <RowLayout className="homepage-row-2">{children}</RowLayout>}
              array={sliced}
              render={post => <PostExcerpt key={post.id} id={post.id} post={post}/>}
            />
          )}
        />
        <Slice
          start={4}
          end={6}
          array={posts}
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
        <Slice
          start={6}
          end={8}
          array={posts}
          render={sliced => (
            <Map
              container={({ children }) => <RowLayout className="homepage-row-2">{children}</RowLayout>}
              array={sliced}
              render={post => <PostExcerpt id={post.id} post={post}/>}
            />
          )}
        />
        <RowLayout className="homepage-row-2">
          <Nth
            n={8}
            array={posts}
            render={post => (
              <HeroPostExcerpt id={post.id} post={post}/>
            )}
          />
        </RowLayout>
      </div>
    );
  }
}