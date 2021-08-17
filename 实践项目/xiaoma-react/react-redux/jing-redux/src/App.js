import React, { PureComponent } from 'react';

import About from './pages/about';
import Home from './pages/home';

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

