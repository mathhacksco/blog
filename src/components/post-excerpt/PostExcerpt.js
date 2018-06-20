/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import classnames from 'classnames';
import first from 'lodash/first';

// $FlowFixMe
import './PostExcerpt.scss';

import type Post from '../../models/Post';
import type CategoryCollection from '../../models/CategoryCollection';
import type MediaCollection from '../../models/MediaCollection';

type Props = {
  post: Post,
  categories: CategoryCollection,
  media: MediaCollection,
  className?: ?string,
};

// $FlowFixMe
export default function PostExcerpt({ post, categories, className, media }: Props) {
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
        <p className="category">{formatCategoryName(categoryName)}</p>
        <Link to={`posts/${post.slug}`} className="title-link">
          <h2
            className="title"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </Link>
        <p className="timestamp">{moment.utc(post.dateGMT).fromNow()}</p>
        <div
          className="excerpt"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
      </div>
    </div>
  );
}

function formatCategoryName(categoryName: string): string {
  return categoryName.toLocaleUpperCase();
}
