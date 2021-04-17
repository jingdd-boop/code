import React, { Component } from 'react';
import './Star.css';

class Star extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nums:this.props.name/2,
      arr:[1,2,3,4,5]
     }
  }
  render() { 
    return ( 
      <span>
        {
          this.state.arr.map((ele,index) => {
            return (
              <span key={index}>
                {
                ele>=this.state.num
                ? <span style={{color:"#FFAC2D",fontSize:"20px"}}>.</span>
                : <span style={{color:"#FFAC2D",fontSize:"20px"}}>*</span>
                }
              </span>
            )
          })
        }
      </span>
     );
  }
}
 
export default Star;