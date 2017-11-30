/* @flow */
import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Typography from './components/typography/Typography';

// $FlowFixMe
import './app.styles.scss';

type Props = {
  children?: ?Node;
};

type State = {};

type DefaultProps = {};

export default class App extends Component<DefaultProps, Props, State> {

  props: Props;
  static defaultProps: DefaultProps = {};
  state: State = {};

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no" />
          <link rel="stylesheet" href="animate.min.css"/>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
          <link rel="canonical" href="http://mysite.com/example" />
          <title>Mathhacks</title>
          <style>{`
              html, body, main {
                  margin: 0;
                  width: 100%;
              }
      
              * {
                  box-sizing: border-box;
              }
            `}
          </style>
        </Helmet>
        {/* TODO render Typography on the server and combine with Sass files */}
        <Typography/>
        {this.props.children}
      </div>
    );
  }
}
