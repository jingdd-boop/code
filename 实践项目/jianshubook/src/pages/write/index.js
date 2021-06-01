import React, { PureComponent } from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

class Write extends PureComponent {
  render() { 
    const {loginStatus} = this.props
    {
      if(loginStatus) {
        return ( 
         <div>写文章</div>
        )
      }else{
        return <Redirect to='/login'/>
      }
    }
    
  }
 
}

const mapStateProps = (state) => ({
  loginStatus:state.getIn(['login','login'])
})


export default connect(mapStateProps,null)(Write);