import React, { createContext, PureComponent } from 'react';

import Counter1 from './useeffect/01_class.js'
import Counter2 from './useeffect/02_hooks.js';
import Context from './useContext/01_context.js';

export const UserContext = createContext();
export const ThemContext = createContext();

class App extends PureComponent {
  render() {
    return (
      <div>
        <Counter1></Counter1>
        <Counter2></Counter2>
        <UserContext.Provider value={{name:"why",age:12}}>
          <ThemContext.Provider value={{color: "red"}}>
          <Context ></Context>
          </ThemContext.Provider>
        </UserContext.Provider>
       
      </div>
    );
  }
  addClick() {
    this.setState({
      count :  this.state.count + 1
    })
  }
}


export default App;