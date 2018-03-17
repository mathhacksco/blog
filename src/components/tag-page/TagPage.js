import React, { Component } from 'react';
// import Promise from 'bluebird';
// import { fetchTag } from '../../actions/tags';
// import { fetchPostsByTag } from '../../actions/posts';
import PostExcerpt from '../post-excerpt/PostExcerpt';
import './TagPage.styles.scss';

class TagPage extends Component {

  state = {
    tag: null,
    posts: [],
    isFetchingTag: false
  }

  componentDidMount() {
    // const id = this.props.routeParams.id;
    // this.setState({ isFetchingTag: true });
    // Promise.join(
    //   fetchTag(id),
    //   fetchPostsByTag(id)
    // )
    //   .spread((tag, posts) => {
    //     this.setState({ tag: tag, posts: posts });
    //   })
    //   .finally(() => {
    //     this.setState({ isFetchingTag: false });
    //   });
  }

  render() {
    if (this.state.isFetchingTag) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }
    if (!this.state.tag) {
      return null;
    }
    return (
        <div className="tagsPage">
          <h1>{this.state.tag.name}</h1>
          {this.state.posts.map(post => {
            return (
              <div key={post.id}>
                <PostExcerpt post={post}/>
              </div>
            );
          })}
        </div>
    );
  }
}

export default TagPage;
