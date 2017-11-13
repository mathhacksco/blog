/* @flow */
import React, { Element } from 'react';
import slice from 'lodash/slice';

type Props<T> = {
  start: number;
  end?: number;
  array: T[];
  render: T[] => ?Element<*>;
  container?: ReactClass<*>;
};

// eslint-disable-next-line object-curly-spacing
export default function Slice<T>({ start, end, array, render, container }: Props<T>) {
  const contents = render(slice(array, start, end));
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
