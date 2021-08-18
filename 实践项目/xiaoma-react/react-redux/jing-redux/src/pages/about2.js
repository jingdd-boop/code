import React from 'react';
import { connect } from '../utils/connect.js';

import {
    subAction
} from '../store/actionCreators.js'

function about(props) {
        return (
            <div>
                <h1>about</h1>
                <h2>当前计数： {props.counter}</h2>
                <button onClick={e => props.decrement(1)}>-1</button>
                <button onClick={e => props.cutcrement(5)}>-5</button>
            </div>
        );
}
const mapStateToProps = state => {
    return {
        counter: state.counter
    }
};
const mapDispatchToProps = dispatch => {
    return {
        decrement: function (num) {
            dispatch(subAction(num))
        },
        cutcrement: function (num) {
            dispatch(subAction(num))
        }
    }
};


export default connect( mapStateToProps, mapDispatchToProps)(about)
