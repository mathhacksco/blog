import Promise from 'bluebird';

// @param tags: Array<number> (an array of tag ids)
export function fetchTags(tags) {
  return Promise.resolve(fetch(`http://dockerhost/wp-json/wp/v2/tags?include=${tags.join(',')}`))
    .then(res => res.json());
}
