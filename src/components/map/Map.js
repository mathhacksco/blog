/* @flow */
import React, { Component, Element } from 'react';

type MapProps<T> = {
  array: T[];
  map: T => ?Element<*>;
  container?: Class<Component<*, *, *>>;
};

// eslint-disable-next-line object-curly-spacing
export default function Map<T>({ array, map, container }: MapProps<T>) {
  if (!container) {
    return (
      <div>
        {array.map(map)}
      </div>
    );
  }
  const Container = container;
  return (
    <Container>
      {array.map(map)}
    </Container>
  );
}
