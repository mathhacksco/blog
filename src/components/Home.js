/* @flow */
import React, { Component } from 'react';

import PostExcerpt from './post-excerpt/PostExcerpt';
import HeroPostExcerpt from './hero-post-excerpt/HeroPostExcerpt';
import ContentMaxWidth from './layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from './layout/horizontally-centered/HorizontallyCentered';
import RowLayout from './layout/row-layout/RowLayout';
import Map from './iterators/map/Map';
import Slice from './iterators/slice/Slice';
import Nth from './iterators/nth/Nth';
import First from './iterators/first/First';

type Props = {
  children?: ?Node | ?Node[];
};

type State = {
  posts: any[];
};

type DefaultProps = {};

export default class Home extends Component<DefaultProps, Props, State> {

  props: Props;
  static defaultProps: DefaultProps = {};
  state: State = {
    posts: []
  }

  componentDidMount() {
    // TODO
    // $FlowFixMe
    fetch(`${process.env.WORDPRESS_API_URI}/posts`)
      .then(res => res.json())
      .then(posts => {
        this.setState({ posts: posts });
      });
  }

  render() {
    return (
      <HorizontallyCentered>
        <ContentMaxWidth>
          <First
            array={this.state.posts}
            render={post => (
              <HeroPostExcerpt id={post.id} post={post}/>
            )}
          />
          <Slice
            start={1}
            end={4}
            array={this.state.posts}
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
            array={this.state.posts}
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
            array={this.state.posts}
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
            array={this.state.posts}
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