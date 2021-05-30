import React, { Component } from 'react';
import {  connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';
import  {Link} from 'react-router-dom';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style';

class Header extends Component {

 getListArea = () => {
  //  const { focused,list,page,handleMouseEnter} = this.props
   const { focused,list,page,mouseIn, totalPage,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props
   const newList = list.toJS();
   const pageList = []
   //请求axios之前没有数据时，这段代码不进行循环
  if(newList.length) {
    for(let i = (page-1) * 10;i < page * 10;i++){
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      )
     }
  }
    
   
   

    if(focused || mouseIn){
      return (
        <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        
        >
              <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage,this.spinIcon)}>
                <i ref={(icon) => {this.spinIcon = icon}} className="iconfont icon-xuanzhuan spin"></i>
                  换一换</SearchInfoSwitch>  
              </SearchInfoTitle>  
              <SearchInfoList>
                {pageList}
              </SearchInfoList>
            </SearchInfo>
      )
    }else{
      return null;
    }
  }
  
  render(){
    const {focused,handleInputFocus,handleInputBlur,list,login,logout} = this.props
    
      return (
        <HeaderWrapper>
          <Link to="/">
          <Logo />
          </Link>
           
            <Nav>
              <NavItem className="left active">首页</NavItem>
              <NavItem className="left">下载app</NavItem>
              {
                login ? <NavItem className="right" onClick={logout}>退出</NavItem>
                 : <Link to='/login'><NavItem className="right">登录</NavItem></Link>
              }
              
              <NavItem className="right"><i className="iconfont icon-yuyan"></i></NavItem>
              <SearchWrapper>
              <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide">
                <NavSearch
                 className={focused ? 'focused' : ''}
                 onFocus={() => handleInputFocus(list)}
                 onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>           
                <i className={focused ? 'focused iconfont icon-icon-search zoom': 'iconfont icon-icon-search zoom'}></i>          
              {this.getListArea()}
              </SearchWrapper>  
            </Nav>
            <Addition> 
             <Link to='/write'>
              <Button className="writting"><i className="iconfont icon-bi"></i>写文章</Button>
             </Link> 
              <Button className="reg">注册</Button>
            </Addition>
          </HeaderWrapper>
      )
      
    
  }
}






const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    mouseIn:state.getIn(['header','mouseIn']),
    totalPage:state.getIn(['header','totalPage']),
    login:state.getIn(['login','login'])
    //focused: state.getIn(['header','focused'])
  }
}
const mapDispatchToProps = (dispath) => {
  return {
    handleInputFocus(list){  
      (list.size === 0) && dispath(actionCreators.getList());
      dispath(actionCreators.searchFocus());
    },
    handleInputBlur(){
      dispath(actionCreators.searchBlur());
    },
    handleMouseEnter(){
      dispath(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
      dispath(actionCreators.mouseLeave());
    },
    handleChangePage(page,totalPage,spin){
      let orginAngle = spin.style.transform.replace(/[^0-9]/ig,'')
      if(orginAngle){
        orginAngle = parseInt(orginAngle,10)
      }else{
        orginAngle = 0;
      }
      spin.style.transform = 'rotate('+ (orginAngle + 360) + 'deg)';

      if(page < totalPage){
        dispath(actionCreators.changePage(page+1));
      }else{
        dispath(actionCreators.changePage(1));
      }
    },
    logout() {
      dispath(loginActionCreators.logout());
    }
    }
  
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);