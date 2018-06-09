/* @flow */
import React from 'react';

import Navigation from '../navigation/Navigation';
import HeroPostExcerpt from '../hero-post-excerpt/HeroPostExcerpt';
import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';

// $FlowFixMe
import './Hero.scss';

import type Post from '../../models/Post';
import type CategoryCollection from '../../models/CategoryCollection';

type Props = {
  post: Post;
  categories: CategoryCollection;
};

export default function Hero({ post, categories }: Props) {
  return (
    <div className="hero">
      <div className="hero-background">
        <div className="top-gradient"/>
        <div className="bottom-gradient"/>
      </div>
      <HorizontallyCentered className="hero-container">
        <ContentMaxWidth>
          <Navigation/>
          <HeroPostExcerpt key={post.id} id={post.id} post={post} categories={categories}/>
        </ContentMaxWidth>
      </HorizontallyCentered>
    </div>
  );
}