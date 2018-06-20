/* @flow */
import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import Navigation from '../navigation/Navigation';
import HeroPostExcerpt from '../hero-post-excerpt/HeroPostExcerpt';
import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';
import { fetchMediaById } from '../../redux/actionCreators/media';
import { getMedia } from '../../redux/selectors/media';

// $FlowFixMe
import './Hero.scss';

import type Post from '../../models/Post';
import type CategoryCollection from '../../models/CategoryCollection';
import type MediaCollection from '../../models/MediaCollection';
import type { Id } from '../../types/general';
import type { Dispatch } from '../../types/redux';
import type State from '../../models/State';

type OwnProps = {
  className?: ?string,
  post: Post,
  categories: CategoryCollection,
  colorScheme?: 'violet' | 'teal' | 'pink',
};

type StateProps = {
  media: MediaCollection,
};

type DispatchProps = {
  fetchMediaById: (id: Id) => Promise<void>,
};

type Props = OwnProps & StateProps & DispatchProps;

function mapStateToProps(state: State): StateProps {
  return {
    media: getMedia(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    fetchMediaById: (id: Id) => dispatch(fetchMediaById(id)),
  };
}

// $FlowFixMe
@connect(mapStateToProps, mapDispatchToProps)
export default class Hero extends Component<Props, {}> {
  async componentWillMount() {
    if (this.props.post.featuredMedia) {
      await this.props.fetchMediaById(this.props.post.featuredMedia);
    }
  }

  async componentWillReceiveProps(nextProps: Props) {
    if (this.props.post.id !== nextProps.post.id) {
      if (nextProps.post.featuredMedia) {
        await this.props.fetchMediaById(nextProps.post.featuredMedia);
      }
    }
  }

  render() {
    const { className, colorScheme, post, categories, media } = this.props;
    const image = media.findById(post.featuredMedia);
    return (
      <section className={classnames('hero', colorScheme || 'pink', className)}>
        <div className="hero-background">
          <div className="top-gradient" />
          <div className="bottom-gradient" />
          {image && <div style={{ backgroundImage: `url(${image.fullSourceUrl})` }} className="hero-background-image"/>}
        </div>
        <HorizontallyCentered className="hero-container">
          <ContentMaxWidth>
            <Navigation colorScheme={colorScheme} />
            <HeroPostExcerpt
              key={post.id}
              id={post.id}
              post={post}
              categories={categories}
              colorScheme={colorScheme}
            />
          </ContentMaxWidth>
        </HorizontallyCentered>
      </section>
    );
  }
}
