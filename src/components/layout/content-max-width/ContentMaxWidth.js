/* @flow */
import React from 'react';

// $FlowFixMe
import './ContentMaxWidth.styles.scss';

import type { Children } from '../../../types/react';

type Props = {
  children?: Children,
};

export default function ContentMaxWidth({ children }: Props) {
  return (
    <div className="content-max-width">
      {children}
    </div>
  );
}
