/* @flow */
import { MEDIUM_PUBLICATION_NAME } from '../../constants';
import { getRequest } from '../../utils/requests';

const MEDIUM_PUBLICATION_URI: string = `https://medium.com/${MEDIUM_PUBLICATION_NAME}`;

export const fetchMediumPosts = async (): any => {
  const res = await getRequest({ url: MEDIUM_PUBLICATION_URI });
  const json = await res.json();
  // $FlowFixMe
  return json;
};
