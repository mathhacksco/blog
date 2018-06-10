/* @flow */
import React, { Component } from 'react';

// import * as GoogleAnalytics from '../../utils/GoogleAnalytics';

import type { Children } from '../../types/react';

type Props = {
  children?: Children;
};

type State = {};

export default class PostsPage extends Component<Props, State> {

  props: Props;
  state: State = {};

  componentDidMount() {
    // TODO: this event is unnecessary when on PostPage
    // GoogleAnalytics.trackEvent({
    //   category: GoogleAnalytics.CategoryEnum.PostsPage,
    //   action: GoogleAnalytics.ActionEnum.PageView,
    //   label: 'Posts Page View'
    // });
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
