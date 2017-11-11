/* @flow */
import React from 'react';

// $FlowFixMe
import './ContentMaxWidth.styles.scss';

type Props = {
  children?: ?Node | ?Node[];
};

export default function ContentMaxWidth({ children }: Props) {
  return (
    <div className="content-max-width">
      {children}
    </div>
  );
}
