/* @flow */
import React from 'react';

// $FlowFixMe
import './ContentMinWidth.styles.scss';

type Props = {
  children?: ?Node | ?Node[];
};

export default function ContentMinWidth({ children }: Props) {
  return (
    <div className="content-min-width">
      {children}
    </div>
  );
}
