/* @flow */
import React from 'react';
import { Map, Slice } from 'react-iterators';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';
import PostExcerpt from '../post-excerpt/PostExcerpt';

// $FlowFixMe
import './LatestPosts.scss';

import type PostCollection from '../../models/PostCollection';
import type CategoryCollection from '../../models/CategoryCollection';
import type MediaCollection from '../../models/MediaCollection';
import type { TrackingContext } from '../../utils/GoogleAnalytics';

type Props = {
  className?: ?string,
  posts: PostCollection,
  categories: CategoryCollection,
  media: MediaCollection,
  tracking: TrackingContext,
};

export default function LatestPosts({
  className,
  posts,
  categories,
  media,
  tracking,
}: Props) {
  return (
    <HorizontallyCentered
      className={classnames('latest-posts-container', className)}
      container="section"
    >
      <ContentMaxWidth className="latest-posts-inner">
        <h2 className="section-header">Latest Posts</h2>
        <Slice
          start={0}
          end={6}
          array={posts.toArray()}
          render={sliced => (
            <Map
              container={({ children }) => (
                <div className="latest-posts">{children}</div>
              )}
              array={sliced}
              render={post => (
                <PostExcerpt
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
      </ContentMaxWidth>
    </HorizontallyCentered>
  );
}
