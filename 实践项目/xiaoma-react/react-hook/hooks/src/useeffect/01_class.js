import React, { PureComponent } from 'react';

class Counter1 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
    }
    componentDidMount() {
        document.title = this.state.count
    }
    componentDidUpdate() {
        document.title = this.state.count
    }
    render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={() => this.addClick()}>按钮</button>
      </div>
    );
  }
    addClick() {
    this.setState({
      count :  this.state.count + 1
    })
  }
}


export default Counter1;