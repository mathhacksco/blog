/* @flow */
import React from 'react';

// $FlowFixMe
import './HorizontallyCentered.styles.scss';

import type { Children } from '../../../types/react';

type Props = {
  children?: Children,
};

export default function HorizontallyCentered({ children }: Props) {
  return (
    <div className="horizonally-centered">
      {children}
    </div>
  );
}
