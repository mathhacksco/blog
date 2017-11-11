/* @flow */
import React, { Component } from 'react';

import PostExcerpt from './post-excerpt/PostExcerpt';
import ContentMinWidth from './layout/content-min-width/ContentMinWidth';
import HorizontallyCentered from './layout/horizontally-centered/HorizontallyCentered';
import Map from './map/Map';

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
        <ContentMinWidth>
          <Map
            array={this.state.posts}
            map={post => <PostExcerpt id={post.id} post={post}/>}
          />
        </ContentMinWidth>
      </HorizontallyCentered>
    );
  }
}
