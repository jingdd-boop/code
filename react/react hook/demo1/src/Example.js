import React, { Component } from 'react';
import ExampleHook from './ExampleHook'
import Example2 from './Example2';
import EffectHooks from './EffectHooks';
import ContextHooks from './useContextHooks';
import UseReducer from './useRducerHooks';
import UseRedux from './example3/UseRedux';
import UseMemoHooks from './useMemoHooks'
import UseRefHooks from './useRefHooks';
import Examplejing from './diyHooks';


class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
         }
    }
    render() { 
        return (
            <div>
                <p>click {this.state.count} time</p>
                <button onClick={this.addCount.bind(this)}>click</button>
                <ExampleHook></ExampleHook>
                <Example2></Example2>
                <EffectHooks></EffectHooks>
                <ContextHooks></ContextHooks>
                <UseReducer></UseReducer>
                <UseRedux></UseRedux>
                <UseMemoHooks></UseMemoHooks>
                <UseRefHooks></UseRefHooks>
                <Examplejing></Examplejing>
            </div>
         );
    }
    addCount() {
        this.setState({
            count: this.state.count + 1
        })
    }
}
 
export default Example;