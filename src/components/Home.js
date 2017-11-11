/* @flow */
import React, { Component } from 'react';

import PostExcerpt from './post-excerpt/PostExcerpt';
import ContentMaxWidth from './layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from './layout/horizontally-centered/HorizontallyCentered';
import RowLayout from './layout/row-layout/RowLayout';
import Map from './map/Map';
import Take from './take/Take';
import Slice from './slice/Slice';

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
          <Take
            n={3}
            array={this.state.posts}
            render={taken => (
              <Map
                container={RowLayout}
                array={taken}
                render={post => <PostExcerpt id={post.id} post={post}/>}
              />
            )}
          />
          <Slice
            start={3}
            array={this.state.posts}
            render={sliced => (
              <Map
                array={sliced}
                render={post => <PostExcerpt id={post.id} post={post}/>}
              />
            )}
          />
        </ContentMaxWidth>
      </HorizontallyCentered>
    );
  }
}
