import React, { Component } from 'react'

 class Loading extends Component {
  render() {
    return (
      <div className="preloader-wrapper big active" style={{margin:'auto',position:'absolute',left:'45%',top:'200px'}}>
      <div className="spinner-layer sspinner-green-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
    )
  }
}

export default Loading
