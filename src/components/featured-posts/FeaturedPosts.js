/* @flow */
import React from 'react';
import { Map, Slice } from 'react-iterators';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';
import FeaturedPostExcerpt from '../featured-post-excerpt/FeaturedPostExcerpt';
import RowLayout from '../layout/row-layout/RowLayout';

// $FlowFixMe
import './FeaturedPosts.scss';

import type PostCollection from '../../models/PostCollection';
import type CategoryCollection from '../../models/CategoryCollection';

type Props = {
  featuredPosts: PostCollection;
  categories: CategoryCollection;
};

export default function FeaturedPosts({ featuredPosts, categories }: Props) {
  return (
    <HorizontallyCentered className="featured-posts-container">
      <ContentMaxWidth className="featured-posts-inner">
        <Slice
          start={1}
          end={4}
          array={featuredPosts.toArray()}
          render={sliced => (
            <Map
              container={({ children }) => <RowLayout className="homepage-row-2">{children}</RowLayout>}
              array={sliced}
              render={post => <FeaturedPostExcerpt key={post.id} post={post} categories={categories} />}
            />
          )}
        />
      </ContentMaxWidth>
    </HorizontallyCentered>
  );
}