import React, { Component } from 'react';
import { Link } from 'react-router';
import './app.styles.scss';

class App extends Component {

  render() {
    return (
      <div>
        <Link to="/">
          <div>wordpress test</div>
        </Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;
