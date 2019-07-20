import React, { Component } from 'react'

 class Loading extends Component {
  render() {
    return (
      <div class="preloader-wrapper big active" style={{margin:'auto',position:'absolute',left:'45%',top:'200px'}}>
      <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
    )
  }
}

export default Loading
