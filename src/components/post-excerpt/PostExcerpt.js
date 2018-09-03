/* @flow */
import React from 'react';
import moment from 'moment';
import classnames from 'classnames';
import first from 'lodash/first';

import InternalLink from '../base/internal-link/InternalLink';

// $FlowFixMe
import './PostExcerpt.scss';

import type Post from '../../models/Post';
import type CategoryCollection from '../../models/CategoryCollection';
import type MediaCollection from '../../models/MediaCollection';
import type { TrackingContext } from '../../utils/GoogleAnalytics';

type Props = {
  post: Post,
  categories: CategoryCollection,
  media: MediaCollection,
  className?: ?string,
  tracking: TrackingContext,
};

// $FlowFixMe
export default function PostExcerpt({
  post,
  categories,
  className,
  media,
  tracking,
}: Props) {
  const categoryId = first(post.categories);
  const category = categories.findById(categoryId);
  const categoryName = category ? category.name : '';
  const image = media.findById(post.featuredMedia);
  return (
    <div className={classnames('post-excerpt', className)}>
      <div className="image-container">
        {image && <img src={image.fullSourceUrl} />}
      </div>
      <div className="content-container">
        <div className="content-inner">
          <div className="category-container">
            <p className="category">{formatCategoryName(categoryName)}</p>
          </div>
          <div className="title-container">
            <InternalLink
              path={`posts/${post.slug}`}
              className="title-link"
              label={`Link to /posts/${post.slug}`}
              category={tracking.category}
            >
              <h2
                className="title"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </InternalLink>
            <p className="timestamp">{moment.utc(post.dateGMT).fromNow()}</p>
          </div>
          <div className="excerpt-container">
            <div
              className="excerpt"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function formatCategoryName(categoryName: string): string {
  return categoryName.toLocaleUpperCase();
}
