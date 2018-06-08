/* @flow */
import React from 'react';
import { Map, Slice } from 'react-iterators';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';
import PostExcerpt from '../post-excerpt/PostExcerpt';
import RowLayout from '../layout/row-layout/RowLayout';

// $FlowFixMe
import './LatestPosts.scss';

import type PostCollection from '../../models/PostCollection';
import type CategoryCollection from '../../models/CategoryCollection';

type Props = {
  posts: PostCollection;
  categories: CategoryCollection;
};

export default function LatestPosts({ posts, categories }: Props) {
  return (
    <HorizontallyCentered className="latest-posts-container">
      <ContentMaxWidth className="latest-posts-inner">
        <Slice
          start={0}
          end={6}
          array={posts.toArray()}
          render={sliced => (
            <Map
              container={({ children }) => <RowLayout className="latest-posts">{children}</RowLayout>}
              array={sliced}
              render={post => <PostExcerpt key={post.id} post={post} categories={categories} />}
            />
          )}
        />
      </ContentMaxWidth>
    </HorizontallyCentered>
  );
}