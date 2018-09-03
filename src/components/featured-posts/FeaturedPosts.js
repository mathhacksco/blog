/* @flow */
import React, { Fragment } from 'react';
import { Map, Slice } from 'react-iterators';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';
import FeaturedPostExcerpt from '../featured-post-excerpt/FeaturedPostExcerpt';

// $FlowFixMe
import './FeaturedPosts.scss';

import type PostCollection from '../../models/PostCollection';
import type CategoryCollection from '../../models/CategoryCollection';
import type MediaCollection from '../../models/MediaCollection';
import type { TrackingContext } from '../../utils/GoogleAnalytics';

type Props = {
  featuredPosts: PostCollection,
  categories: CategoryCollection,
  media: MediaCollection,
  tracking: TrackingContext,
};

export default function FeaturedPosts({
  featuredPosts,
  categories,
  media,
  tracking,
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
              <Fragment>{children}</Fragment>
            )}
            array={sliced}
            render={post => (
              <FeaturedPostExcerpt
                className="featured-post"
                key={post.id}
                post={post}
                categories={categories}
                media={media}
                tracking={tracking}
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
