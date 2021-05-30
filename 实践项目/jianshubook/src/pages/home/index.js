import React, { PureComponent } from 'react';
import Topic from './components/Topics'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {actionCreators, constants } from './store'
import {connect} from 'react-redux';


import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
 } from './style';
import { isImmutable } from 'immutable';

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0,0);
  }
  render() { 
    return ( 
      <HomeWrapper>
        < HomeLeft>
          <img className="banner-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3567555791,3708754265&fm=26&gp=0.jpg"/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }
        
      </HomeWrapper>
     
     );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
}
const mapStateProps = (state) => ({
  showScroll:state.getIn(['home','showScroll'])
})
const mapDispatchToProps = (dispatch) => ({
  changeHomeData(){
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop > 100){
      dispatch(actionCreators.taggleTopShow(true))
    }else{
      dispatch(actionCreators.taggleTopShow(false))
    }
    
  }
})
export default connect(mapStateProps,mapDispatchToProps)(Home);




 //immutable.js数据，