import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {
  WriterWrapper,
  WriterList,
  WriterItem,
  
} from '../style'

class Writer extends PureComponent {
  render() { 
    
    return ( 
      <WriterWrapper>
        {
          this.props.list.map((item)=>{
            return (
              <WriterList key={item.get('id')}>
                <img src={item.get('imgUrl')} alt='' className="write-img"/>
                <WriterItem>
                  <h2>{item.get('title')}</h2>
                  <p>{item.get('desc')}</p>
                </WriterItem>
                <i className="iconfont icon-guanzhu"></i>
              </WriterList>  
              )
        })
        }  
       
      </WriterWrapper>
     );
  }
}
 
const mapStateToProps = (state) => ({
  list:state.get('home').get('writeList')
})

export default connect(mapStateToProps,null)(Writer);