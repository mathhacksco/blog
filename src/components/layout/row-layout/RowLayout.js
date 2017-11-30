/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './RowLayout.styles.scss';

type Props = {
  children?: ?Node | ?Node[];
  className?: ?string;
};

export default function RowLayout({ children, className }: Props) {
  return (
    <div className={classnames('row-layout', className)}>
      {children}
    </div>
  );
}
