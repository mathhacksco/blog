/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import first from 'lodash/first';
import classnames from 'classnames';

import ColumnLayout from '../layout/column-layout/ColumnLayout';

// $FlowFixMe
import './FeaturedPostExcerpt.scss';

import type Post from '../../models/Post';
import type CategoryCollection from '../../models/CategoryCollection';

type Props = {
  className?: ?string,
  post: Post,
  categories: CategoryCollection,
};

export default function FeaturedPostExcerpt({
  post,
  categories,
  className,
}: Props) {
  const categoryId = first(post.categories); // TODO: make sure category is not "Featured"
  const category = categories.findById(categoryId);
  const categoryName = category ? category.name : '';
  return (
    <ColumnLayout className={classnames('featured-post-excerpt', className)}>
      <div className="background" />
      <div className="content">
        <p className="category">{formatCategoryName(categoryName)}</p>
        <Link to={`posts/${post.slug}`} className="title-link">
          <h2
            className="title"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </Link>
        <p className="author">by Brett Berry</p>
      </div>
    </ColumnLayout>
  );
}

function formatCategoryName(categoryName: string): string {
  return categoryName.toLocaleUpperCase();
}
