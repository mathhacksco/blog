/* @flow */
import React from 'react';
import first from 'lodash/first';
import classnames from 'classnames';

import InternalLink from '../base/internal-link/InternalLink';
import { formatCalendarDateWithYear } from '../../utils/DateTimeUtil';
import ColumnLayout from '../layout/column-layout/ColumnLayout';

// $FlowFixMe
import './HeroPostExcerpt.scss';

import type Post from '../../models/Post';
import type CategoryCollection from '../../models/CategoryCollection';
import type { TrackingContext } from '../../utils/GoogleAnalytics';

type Props = {
  className?: ?string,
  post: Post,
  categories: CategoryCollection,
  tracking: TrackingContext,
  colorScheme?: 'violet' | 'teal' | 'pink',
};

export default function HeroPostExcerpt({
  className,
  colorScheme,
  post,
  categories,
  tracking,
}: Props) {
  const categoryId = first(post.categories); // TODO: make sure category is not "Featured"
  const category = categories.findById(categoryId);
  const categoryName = category ? category.name : '';
  return (
    <ColumnLayout
      className={classnames(
        'hero-post-excerpt',
        colorScheme || 'pink',
        className
      )}
    >
      <p className="timestamp">
        {formatCalendarDateWithYear(post.dateGMT, true)}
      </p>
      <p className="category">{formatCategoryName(categoryName)}</p>
      <InternalLink
        path={`posts/${post.slug}`}
        className="title-link"
        category={tracking.category}
        label={`Hero link to /posts/${post.slug}`}
      >
        <p
          className="title"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </InternalLink>
      <p className="author">by Brett Berry</p>
    </ColumnLayout>
  );
}

function formatCategoryName(categoryName: string): string {
  return categoryName.toLocaleUpperCase();
}
