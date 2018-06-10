// @flow
import React from 'react';

// $FlowFixMe
import './PostContent.scss';

import type Post from '../../models/Post';

type Props = {
  post: Post;
};

export default function PostContent({ post }: Props) {
  return (
    <div className="post-content-container">
      <article className="post-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }}/>
    </div>
  );
}