/* @flow */
import React, { Element } from 'react';
import times from 'lodash/times';

type Props<T> = {
  n: number;
  render: T => ?Element<*>;
  container?: ReactClass<*>;
};

// eslint-disable-next-line object-curly-spacing
export default function Times<T>({ n, render, container }: Props<T>) {
  const contents = times(n).map(render);
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
