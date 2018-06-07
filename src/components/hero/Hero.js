/* @flow */
import React from 'react';
import { First } from 'react-iterators';

import Navigation from '../navigation/Navigation';
import HeroPostExcerpt from '../hero-post-excerpt/HeroPostExcerpt';
import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';

// $FlowFixMe
import './Hero.scss';

import type PostCollection from '../../models/PostCollection';
import type CategoryCollection from '../../models/CategoryCollection';

type Props = {
  featuredPosts: PostCollection;
  categories: CategoryCollection;
};

export default function Hero({ featuredPosts, categories }: Props) {
  return (
    <First
      array={featuredPosts.toArray()}
      container={({ children }) => (
        <div className="homepage-hero">
          <div className="homepage-hero-background">
            <div className="top-gradient"/>
            <div className="bottom-gradient"/>
          </div>
          <HorizontallyCentered className="hero-container">
            <ContentMaxWidth>
              <Navigation/>
              {children}
            </ContentMaxWidth>
          </HorizontallyCentered>
        </div>
      )}
      render={post => (
        <HeroPostExcerpt key={post.id} id={post.id} post={post} categories={categories}/>
      )}
    />
  );
}