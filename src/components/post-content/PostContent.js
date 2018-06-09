// @flow
import React from 'react';
// import { Link } from 'react-router-dom';

// $FlowFixMe
import './PostContent.scss';

import type Post from '../../models/Post';

type Props = {
  post: Post;
};

export default function PostContent({ post }: Props) {
  return (
    <div className="post-content-container">
      {/* {this.renderTags()} */}
      <p className="post-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }}/>
    </div>
  );
}

// function renderTags(tags: string[]) {
//   return this.props.tags.map(tag => (
//     <Link to={`/tags/${tag.id}`}>
//       <div>{tag.name}</div>
//     </Link>
//   ));
// }