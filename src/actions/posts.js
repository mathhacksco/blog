import Promise from 'bluebird';

export function fetchPost(id) {
  return Promise.resolve(fetch(`${process.env.WORDPRESS_API_URI}/posts/${id}`))
    .then(res => res.json());
}

export function fetchPostsByTag(tag) {
  return Promise.resolve(fetch(`${process.env.WORDPRESS_API_URI}/posts?tags=${tag}`))
    .then(res => res.json());
}
