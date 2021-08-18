import React, {PureComponent} from 'react';

import {
    addAction,
    changeBanner,
    changeRecommend
} from '../store/actionCreators.js'

// import { connect } from '../utils/connect.js';
import { connect } from 'react-redux';

import axios from 'axios'

class home extends PureComponent {
    componentDidMount() {
        axios({
            url: 'http://123.207.32.32:8000/home/multidata'
        }).then(res => {
            const data = res.data.data
            this.props.changeBanners(data.banner.list);
            this.props.changeRemmends(data.recommend.list)
        })
    }
    render() {
        return (
            <div>
                    <h1>home</h1>
                    <h2>当前计数： {this.props.counter}</h2>
                    <button onClick={e => this.props.increment(1)}>+1</button>
                <button onClick={e => this.props.addcrement(5)}>+5</button>
                <h1>banners</h1>
                <h1>
                    {
                        this.props.banners.map((item, index) => {
                            return <li key={ item.acm }>{ item.title }</li>
                        })
                    }
                </h1>
                <h1>recommends</h1>
                <h1>
                    {
                        this.props.recommend.map((item, index) => {
                            return <li key={ item.acm }>{ item.title }</li>
                        })
                    }
                </h1>
                </div>
        );
    }
    
}

const mapStateToProps = state => {
    console.log(state)
    return {
        counter: state.counter,
        banners: state.banners,
        recommend: state.recommend
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: function (num) {
            dispatch(addAction(num))
        },
        addcrement: function (num) {
            dispatch(addAction(num))
        },
        changeBanners(banners) {
            dispatch(changeBanner(banners))
        },
        changeRemmends(recommend) {
            dispatch(changeRecommend(recommend))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(home);