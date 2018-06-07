/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import first from 'lodash/first';

import ColumnLayout from '../layout/column-layout/ColumnLayout';

// $FlowFixMe
import './FeaturedPostExcerpt.styles.scss';

import type Post from '../../models/Post';
import type CategoryCollection from '../../models/CategoryCollection';

type Props = {
  post: Post;
  categories: CategoryCollection;
};

export default function FeaturedPostExcerpt({ post, categories }: Props) {
  const categoryId = first(post.categories); // TODO: make sure category is not "Featured"
  const category = categories.findById(categoryId);
  const categoryName = category ? category.name : '';
  return (
    <ColumnLayout className="featured-post-excerpt">
      <p className="featured">Featured Article</p>
      <p className="category">{formatCategoryName(categoryName)}</p>
      <Link to={`posts/${post.id}`} className="title-link">
        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}/>
      </Link>
      <p className="author">by Brett Berry</p>
      {/* <p className="timestamp">{moment.utc(post.dateGMT).fromNow()}</p> */}
      {/* <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}/> */}
      {/* <Link to={`posts/${post.id}`} className="more-link">
        <h5>Read the post</h5>
      </Link> */}
    </ColumnLayout>
  );
}

function formatCategoryName(categoryName: string): string {
  return categoryName.toLocaleUpperCase();
}
