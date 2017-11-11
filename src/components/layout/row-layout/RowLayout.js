/* @flow */
import React from 'react';

// $FlowFixMe
import './RowLayout.styles.scss';

type Props = {
  children?: ?Node | ?Node[];
};

export default function RowLayout({ children }: Props) {
  return (
    <div className="row-layout">
      {children}
    </div>
  );
}
