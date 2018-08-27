/* @flow */
import React from 'react';
import { Map, Slice } from 'react-iterators';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';
import FeaturedPostExcerpt from '../featured-post-excerpt/FeaturedPostExcerpt';
import RowLayout from '../layout/row-layout/RowLayout';

// $FlowFixMe
import './FeaturedPosts.scss';

import type PostCollection from '../../models/PostCollection';
import type CategoryCollection from '../../models/CategoryCollection';
import type MediaCollection from '../../models/MediaCollection';

type Props = {
  featuredPosts: PostCollection,
  categories: CategoryCollection,
  media: MediaCollection,
};

export default function FeaturedPosts({
  featuredPosts,
  categories,
  media,
}: Props) {
  const hasPosts = featuredPosts.length > 1;
  const containerClassNames = classnames(
    'featured-posts-container',
    !hasPosts && 'empty'
  );
  return hasPosts ? (
    <HorizontallyCentered className={containerClassNames} container="section">
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
                media={media}
              />
            )}
          />
        )}
      />
    </HorizontallyCentered>
  ) : (
    <section className={containerClassNames} />
  );
}
