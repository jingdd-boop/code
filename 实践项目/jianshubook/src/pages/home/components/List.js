import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {actionCreators } from '../store'
import { Link } from 'react-router-dom'
import {
  ListItem,
  ListInfo,
  ListIcon,
  LoadMore
} from '../style'

class List extends PureComponent {
  
  render() { 
    const {list,getMoreList,page} = this.props
    return ( 
      <div>
         {
        list.map((item,index)=>{
          return (
            //实现动态路由
            <Link key={index} to={'/detail/' + item.get('id')}>
            <ListItem>
            <img className="pic" src={item.get('imgUrl')} alt=''/>
            <ListInfo>
              <h3 className="title">{item.get('title')}</h3>
              <p className="desc">{item.get('desc')}</p>
            </ListInfo>
            <ListIcon>
              <span>风中的糯米</span>
              <i className="iconfont icon-weibiaoti- love"></i>
              <i className="iconfont icon-pinglun pinglun" ></i>
              <i className="iconfont icon-zanshangjin zan"></i>
            </ListIcon>
          </ListItem>
          </Link>
          )
        })
      }
      <LoadMore onClick={() => getMoreList(page)}>阅读更多内容</LoadMore>
      </div>  
     );
  }
}
const mapStateToProps = (state) => ({
  list:state.get('home').get('articleList'),
  page:state.get('home').get('articlePage')
})
const mapDispatchProps = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})
export default connect(mapStateToProps,mapDispatchProps)(List);