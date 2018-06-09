/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './HorizontallyCentered.styles.scss';

import type { Children } from '../../../types/react';

type Props = {
  className?: ?string,
  children?: Children,
};

export default function HorizontallyCentered({ children, className }: Props) {
  return (
    <div className={classnames('horizonally-centered', className)}>
      {children}
    </div>
  );
}
