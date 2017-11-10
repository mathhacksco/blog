/* @flow */
import React from 'react';

// $FlowFixMe
import './HorizontallyCentered.styles.scss';

type Props = {
  children?: ?Node;
};

export default function HorizontallyCentered({ children }: Props) {
  return (
    <div className="horizonally-centered">
      {children}
    </div>
  );
}
