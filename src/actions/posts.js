import Promise from 'bluebird';

export function fetchPost(id) {
  return Promise.resolve(fetch(`http://dockerhost/wp-json/wp/v2/posts/${id}`))
    .then(res => res.json());
}
