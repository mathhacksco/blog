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
  featuredPosts: PostCollection,
  categories: CategoryCollection,
};

export default function FeaturedPosts({ featuredPosts, categories }: Props) {
  return (
    <HorizontallyCentered
      className="featured-posts-container"
      container="section"
    >
      <Slice
        container={({ children }) => (
          <ContentMaxWidth className="featured-posts-inner">
            {children}
          </ContentMaxWidth>
        )}
        start={1}
        end={4}
        array={featuredPosts.toArray()}
        render={sliced => (
          <Map
            container={({ children }) => (
              <RowLayout className="flex-1">{children}</RowLayout>
            )}
            array={sliced}
            render={post => (
              <FeaturedPostExcerpt
                className="featured-post"
                key={post.id}
                post={post}
                categories={categories}
              />
            )}
          />
        )}
      />
    </HorizontallyCentered>
  );
}
