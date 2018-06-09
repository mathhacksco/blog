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

type Props = {
  post: Post;
  categories: CategoryCollection;
  className?: ?string;
};

export default function PostExcerpt({ post, categories, className }: Props) {
  const categoryId = first(post.categories);
  const category = categories.findById(categoryId);
  const categoryName = category ? category.name : '';
  return (
    <div className={classnames('post-excerpt', className)}>
      <div className="image-container"/>
      <div className="content-container">
        <p className="category">{formatCategoryName(categoryName)}</p>
        <Link to={`posts/${post.id}`} className="title-link">
          <h2 className="title" dangerouslySetInnerHTML={{ __html: post.title.rendered }}/>
        </Link>
        <p className="timestamp">{moment.utc(post.dateGMT).fromNow()}</p>
        <div className="excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}/>
      </div>
    </div>
  );
}


function formatCategoryName(categoryName: string): string {
  return categoryName.toLocaleUpperCase();
}