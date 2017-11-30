/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../redux/actionCreators/posts';
import { getPosts } from '../redux/selectors/posts';
import PostExcerpt from './post-excerpt/PostExcerpt';
import HeroPostExcerpt from './hero-post-excerpt/HeroPostExcerpt';
import ContentMaxWidth from './layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from './layout/horizontally-centered/HorizontallyCentered';
import RowLayout from './layout/row-layout/RowLayout';
import Map from './iterators/map/Map';
import Slice from './iterators/slice/Slice';
import Nth from './iterators/nth/Nth';
import First from './iterators/first/First';

// $FlowFixMe
import './Home.styles.scss';

import type State from '../models/State';
import type PostCollection from '../models/PostCollection';
import type { Dispatch } from '../types/redux';

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

type DefaultProps = {};

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
export default class Home extends Component<DefaultProps, Props, {}> {

  props: Props;
  static defaultProps: DefaultProps = {};
  state = {}

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <HorizontallyCentered>
        <ContentMaxWidth>
          <First
            array={this.props.posts.toArray()}
            render={post => (
              <HeroPostExcerpt id={post.id} post={post}/>
            )}
          />
          <Slice
            start={1}
            end={4}
            array={this.props.posts.toArray()}
            container={({ children }) => <div className="homepage-row-2">{children}</div>}
            render={sliced => (
              <Map
                container={RowLayout}
                array={sliced}
                render={post => <PostExcerpt id={post.id} post={post}/>}
              />
            )}
          />
          {/* <NewsletterSignup/> */}
          <Slice
            start={4}
            end={6}
            array={this.props.posts.toArray()}
            render={sliced => (
              <RowLayout>
                <p>
                  Some text about learning math. Talk about how the channel will help explain difficult math concepts.
                </p>
                <Map
                  container={RowLayout}
                  array={sliced}
                  render={post => <PostExcerpt id={post.id} post={post}/>}
                />
              </RowLayout>
            )}
          />
          <Slice
            start={6}
            end={8}
            array={this.props.posts.toArray()}
            render={sliced => (
              <Map
                container={RowLayout}
                array={sliced}
                render={post => <PostExcerpt id={post.id} post={post}/>}
              />
            )}
          />
          <SocialLinks/>
          <Nth
            n={8}
            array={this.props.posts.toArray()}
            render={post => (
              <HeroPostExcerpt id={post.id} post={post}/>
            )}
          />
        </ContentMaxWidth>
      </HorizontallyCentered>
    );
  }
}


function SocialLinks() {
  return (
    <RowLayout>
      <TwitterLink/>
      <InstagramLink/>
    </RowLayout>
  );
}

function TwitterLink() {
  return (
    <a href={"https://twitter.com/BrettEBerry"}>Twitter</a>
  );
}

function InstagramLink() {
  return (
    <a href={"https://www.instagram.com/bretteberry/"}>Instagram</a>
  );
}

// function NewsletterSignup() {
//   return (
//     <ColumnLayout>
//       <input/>
//       <OutlineButton/>
//     </ColumnLayout>
//   );
// }