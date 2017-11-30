/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../redux/actionCreators/posts';
import { getPosts } from '../redux/selectors/posts';
import PostExcerpt from './post-excerpt/PostExcerpt';
import HeroPostExcerpt from './hero-post-excerpt/HeroPostExcerpt';
import Paragraph from './paragraph/Paragraph';
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
            render={sliced => (
              <Map
                container={({ children }) => <RowLayout className="homepage-row-2">{children}</RowLayout>}
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
              <Map
                container={({ children }) => (
                  <RowLayout className="homepage-row-2">
                    <Paragraph text={'Some text about learning math. Talk about how the channel will help explain difficult math concepts.'}/>
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
            array={this.props.posts.toArray()}
            render={sliced => (
              <Map
                container={({ children }) => <RowLayout className="homepage-row-2">{children}</RowLayout>}
                array={sliced}
                render={post => <PostExcerpt id={post.id} post={post}/>}
              />
            )}
          />
          <SocialLinks/>
          <RowLayout className="homepage-row-2">
            <Nth
              n={8}
              array={this.props.posts.toArray()}
              render={post => (
                <HeroPostExcerpt id={post.id} post={post}/>
              )}
            />
          </RowLayout>
        </ContentMaxWidth>
      </HorizontallyCentered>
    );
  }
}


function SocialLinks() {
  return (
    <RowLayout className="social-links">
      <div className="half">
        <TwitterLink/>
      </div>
      <div className="half">
        <InstagramLink/>
      </div>
    </RowLayout>
  );
}

function TwitterLink() {
  return (
    <a className="social-link" href={"https://twitter.com/BrettEBerry"}>
      <h1>Twitter</h1>
    </a>
  );
}

function InstagramLink() {
  return (
    <a className="social-link" href={"https://www.instagram.com/bretteberry/"}>
      <h1>Instagram</h1>
    </a>
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