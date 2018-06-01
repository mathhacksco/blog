/* @flow */
export type Id = string | number;

export type RouteParams = {
  id: Id;
};

export type RouteMatch = {
  params: RouteParams,
};