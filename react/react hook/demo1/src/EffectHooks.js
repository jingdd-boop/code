import React, { Component } from 'react';

class EffectHooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0 
         }
    }
    componentDidMount() {
        console.log('componentDidMount',this.state.count)
    }
    componentDidUpdate() {
        console.log('componentDidUpdate',this.state.count)
    }
    render() { 
        return (
            <div>
                <p>click {this.state.count} time</p>
                <button onClick={this.addCount.bind(this)}>click</button>
            </div>
         );
    }
    addCount() {
        this.setState({
            count: this.state.count + 1
        })
    }
}
 
export default EffectHooks;




// useEffect 副作用 在特定的时机使用