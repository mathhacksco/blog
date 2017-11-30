/* @flow */
import React from 'react';

// $FlowFixMe
import './Paragraph.styles.scss';

type Props = {
  text?: string;
};

export default function Paragraph({ text }: Props) {
  return (
    <div className="paragraph">
      <h4>{text}</h4>
    </div>
  );
}
