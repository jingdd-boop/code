import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store'
import {withRouter} from 'react-router-dom'
import {
  DetailWrapper,
  Header,
  Content
} from './style'

class Detail extends Component {
  render() { 
    console.log(this.props.match.params.id);
    return ( 
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}></Content>
      </DetailWrapper>
     );
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapStateProps = (state) => ({
  title:state.getIn(['detail','title']),
  content:state.getIn(['detail','content'])
})
const mapDispatchToProps =(dispatch) =>({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }

})

export default connect(mapStateProps,mapDispatchToProps)(withRouter(Detail));