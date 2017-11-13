/* @flow */
import React, { Element } from 'react';
import first from 'lodash/first';

type Props<T> = {
  array: T[];
  render: T => ?Element<*>;
  container?: ReactClass<*>;
};

// eslint-disable-next-line object-curly-spacing
export default function First<T>({ array, render, container }: Props<T>) {
  const item = first(array);
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
