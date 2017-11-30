/* @flow */
import React, { Component } from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography';

import typography from '../../utils/typography';


export default class Typography extends Component {
  render() {
    return (
      <div>
        <GoogleFont typography={typography}/>
        <TypographyStyle typography={typography}/>
      </div>
    );
  }
}
