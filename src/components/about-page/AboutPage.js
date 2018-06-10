/* @flow */
import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { fetchPages } from '../../redux/actionCreators/pages';
import { getPages } from '../../redux/selectors/pages';

import type { Dispatch } from '../../types/redux';
import type { Id } from '../../types/general';
import type PageCollection from '../../models/PostCollection';
import type AppState from '../../models/State';

// $FlowFixMe
import './AboutPage.styles.scss';

type OwnProps = {
};

type StateProps = {
  pages: PageCollection,
};

type DispatchProps = {
  fetchPages: () => Promise<void>;
};

type Props = OwnProps & StateProps & DispatchProps;

function mapStateToProps(state: AppState): StateProps {
  return {
    pages: getPages(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    fetchPages: () => dispatch(fetchPages())
  };
}

// $FlowFixMe
@connect(mapStateToProps, mapDispatchToProps)
@autobind
export default class AboutPage extends Component<Props, {}> {

  props: Props;

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
        <p className="postContent" dangerouslySetInnerHTML={{ __html: page.content.rendered }}/>
      </div>
    );
  }
}
