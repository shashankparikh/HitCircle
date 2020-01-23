import React, { Component } from 'react'
import { HomeConetent } from './style'
import Score from './Score/score'

class Home extends Component {
  simpleAction = event => {
    this.props.simpleAction()
  }

  render () {
    return (
      <div>
        <HomeConetent>Hit the circle</HomeConetent>
        <Score/>
      </div>
    )
  }
}

export default Home
