/* @flow */
import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { fetchPages } from '../../redux/actionCreators/pages';
import { getPages } from '../../redux/selectors/pages';

import type { State as AppState, Dispatch } from '../../types/redux';
import type { Id } from '../../types/general';
import type PageCollection from '../../models/PostCollection';

// $FlowFixMe
import './AboutPage.styles.scss';

type OwnProps = {
};

type StateProps = {
  pages: PageCollection,
};

type DispatchProps = {
  fetchPages: Id => Promise<void>;
};

type Props = OwnProps & StateProps & DispatchProps;

type DefaultProps = {

};

type State = {

};

function mapStateToProps(state: AppState): StateProps {
  return {
    pages: getPages(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    fetchPages: (id: Id) => dispatch(fetchPages(id))
  };
}

// $FlowFixMe
@connect(mapStateToProps, mapDispatchToProps)
@autobind
export default class AboutPage extends Component<DefaultProps, Props, State> {

  props: Props;
  state = {};
  static defaultProps: DefaultProps = {};

  componentDidMount() {
    this.props.fetchPages();
  }

  render() {
    const page = this.props.pages.findBySlug('about');
    if (!page) {
      return null;
    }
    return (
      <div className="aboutPage">
        {/* <h1 className="postTitle" dangerouslySetInnerHTML={{ __html: this.props.post.title.rendered }}/>
        {this.renderTags()} */}
        <p className="postContent" dangerouslySetInnerHTML={{ __html: page.content.rendered }}/>
      </div>
    );
  }
}
