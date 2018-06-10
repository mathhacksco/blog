// @flow
import React from 'react';
import * as DateTimeUtil from '../../utils/DateTimeUtil';

// $FlowFixMe
import './PostContent.scss';

import type Post from '../../models/Post';

type Props = {
  post: Post,
};

export default function PostContent({ post }: Props) {
  return (
    <div className="post-content-container">
      <div className="post-info">
        <div className="post-author">Brett Berry</div>
        <div className="post-date">
          {DateTimeUtil.formatCalendarDate(post.dateGMT, true)}
        </div>
      </div>
      <article
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
}
