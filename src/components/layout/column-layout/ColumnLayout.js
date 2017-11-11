/* @flow */
import React from 'react';

// $FlowFixMe
import './ColumnLayout.styles.scss';

type Props = {
  children?: ?Node | ?Node[];
};

export default function ColumnLayout({ children }: Props) {
  return (
    <div className="column-layout">
      {children}
    </div>
  );
}
