/* @flow */
import React, { Element } from 'react';

type MapProps<T> = {
  array: T[];
  render: T => ?Element<*>;
  container?: ReactClass<*>;
};

// eslint-disable-next-line object-curly-spacing
export default function Map<T>({ array, render, container }: MapProps<T>) {
  const contents = array.map(render);
  if (!container) {
    return (
      <div>
        {contents}
      </div>
    );
  }
  const Container = container;
  return (
    <Container>
      {contents}
    </Container>
  );
}
