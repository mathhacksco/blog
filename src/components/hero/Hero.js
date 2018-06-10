/* @flow */
import React from 'react';
import classnames from 'classnames';

import Navigation from '../navigation/Navigation';
import HeroPostExcerpt from '../hero-post-excerpt/HeroPostExcerpt';
import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';

// $FlowFixMe
import './Hero.scss';

import type Post from '../../models/Post';
import type CategoryCollection from '../../models/CategoryCollection';

type Props = {
  className?: ?string;
  post: Post;
  categories: CategoryCollection;
  colorScheme?: 'violet' | 'teal' | 'pink';
};

export default function Hero({ className, colorScheme, post, categories }: Props) {
  return (
    <section className={classnames('hero', colorScheme || 'pink', className)}>
      <div className="hero-background">
        <div className="top-gradient"/>
        <div className="bottom-gradient"/>
      </div>
      <HorizontallyCentered className="hero-container">
        <ContentMaxWidth>
          <Navigation colorScheme={colorScheme}/>
          <HeroPostExcerpt key={post.id} id={post.id} post={post} categories={categories} colorScheme={colorScheme}/>
        </ContentMaxWidth>
      </HorizontallyCentered>
    </section>
  );
}