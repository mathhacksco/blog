import Promise from 'bluebird';

// @param tags: Array<number> (an array of tag ids)
export function fetchTags(tags) {
  if (!tags || !tags.length) {
    return [];
  }
  return Promise.resolve(fetch(`${process.env.WORDPRESS_API_URI}/tags?include=${tags.join(',')}`))
    .then(res => res.json());
}

export function fetchTag(id) {
  return Promise.resolve(fetch(`${process.env.WORDPRESS_API_URI}/tags/${id}`))
    .then(res => res.json());
}
