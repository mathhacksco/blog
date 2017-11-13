/* @flow */
import React, { Element } from 'react';
import take from 'lodash/take';

type TakeProps<T> = {
  n: number;
  array: T[];
  render: T[] => ?Element<*>;
  container?: ReactClass<*>;
};

// eslint-disable-next-line object-curly-spacing
export default function Take<T>({ n, array, render, container }: TakeProps<T>) {
  const contents = render(take(array, n));
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
