import React from 'react';

import {
    addAction
} from '../store/actionCreators.js'
import { connect } from '../utils/connect.js';

function home(props){
    return (
        <div>
                <h1>home</h1>
                <h2>当前计数： {props.counter}</h2>
                <button onClick={e => props.increment(1)}>+1</button>
                <button onClick={e => props.addcrement(5)}>+5</button>
            </div>
    );
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: function (num) {
            dispatch(addAction(num))
        },
        addcrement: function (num) {
            dispatch(addAction(num))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(home);