import React, { PureComponent } from 'react';

import About from './pages/about3';
import Home from './pages/home4';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <About></About>
        <Home></Home>
      </div>
    );
  }
}

