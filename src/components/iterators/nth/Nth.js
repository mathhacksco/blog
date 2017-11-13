/* @flow */
import React, { Element } from 'react';
import nth from 'lodash/nth';

type Props<T> = {
  n: number;
  array: T[];
  render: T => ?Element<*>;
  container?: ReactClass<*>;
};

// eslint-disable-next-line object-curly-spacing
export default function Nth<T>({ n, array, render, container }: Props<T>) {
  const item = nth(array, n);
  if (!item) {
    return null;
  }
  const contents = render(item);
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
