/* @flow */
export type Action<T> = {
  type: string;
  payload?: T;
};

export type Dispatch = (any) => any;

export type State = {
  // TODO
};

export type GetState = () => State;