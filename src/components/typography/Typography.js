/* @flow */
import React from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography';

import typography from '../../utils/typography';

export default function Typography() {
  return (
    <TypographyStyle typography={typography}>
      <GoogleFont typography={typography}/>
    </TypographyStyle>
  );
}
