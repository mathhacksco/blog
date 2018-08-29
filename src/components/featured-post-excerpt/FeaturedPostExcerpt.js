/* @flow */
import React from 'react';
import first from 'lodash/first';
import classnames from 'classnames';

import InternalLink from '../base/internal-link/InternalLink';
import ColumnLayout from '../layout/column-layout/ColumnLayout';

// $FlowFixMe
import './FeaturedPostExcerpt.scss';

import type Post from '../../models/Post';
import type CategoryCollection from '../../models/CategoryCollection';
import type MediaCollection from '../../models/MediaCollection';
import type { TrackingContext } from '../../utils/GoogleAnalytics';

type Props = {
  className?: ?string,
  post: Post,
  categories: CategoryCollection,
  media: MediaCollection,
  tracking: TrackingContext,
};

export default function FeaturedPostExcerpt({
  post,
  categories,
  className,
  media,
  tracking,
}: Props) {
  const categoryId = first(post.categories); // TODO: make sure category is not "Featured"
  const category = categories.findById(categoryId);
  const categoryName = category ? category.name : '';
  const image = media.findById(post.featuredMedia);
  return (
    <ColumnLayout className={classnames('featured-post-excerpt', className)}>
      <div className="image-container background">
        {image && <img src={image.fullSourceUrl} />}
      </div>
      <div className="content">
        <p className="category">{formatCategoryName(categoryName)}</p>
        <InternalLink
          path={`posts/${post.slug}`}
          className="title-link"
          category={tracking.category}
          label={`Link to /posts/${post.slug}`}
        >
          <h2
            className="title"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </InternalLink>
        <p className="author">by Brett Berry</p>
      </div>
    </ColumnLayout>
  );
}

function formatCategoryName(categoryName: string): string {
  return categoryName.toLocaleUpperCase();
}
