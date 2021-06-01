import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {
  TopicWrapper,
  TopicItem

} from '../style'

class Topics extends PureComponent {
  render() { 
    const {list} = this.props
    return ( 
      <TopicWrapper>
        {
        list.map((item) => {
          return (
            <TopicItem key={item.get('id')}>
             <img className="item-img" src={item.get('imgUrl')} alt=''/>
            {item.get('title')}
          </TopicItem>
          )
        })
        }       
      </TopicWrapper>
     );
  }
}
const mapStateToProps = (state) => ({
  list:state.get('home').get('topicList')
})

export default connect(mapStateToProps,null)(Topics);