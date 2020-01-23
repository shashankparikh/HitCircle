import React, { Component } from 'react'
import { CircularComponent, Container,ButtonContainer,MainContainer } from './style'
import { Input, Button, Modal } from 'antd'
import { dummyArray } from './config'

export default class score extends Component {
  state = {
    dataArray: [],
    randomColor: 'red',
    numberGenerated: 0,
    scoreCount: 0,
    visible: false
  }

  componentDidMount () {
      this.getData();
   
  }

  getData =()=>{
      const data = dummyArray.slice(0)
    this.setState({ dataArray: data })
  }

  changeColor = () => {
    const randomNumber = Math.floor(Math.random() * 23) + 1
    this.setState({ numberGenerated: randomNumber })

    let NewdataArray = JSON.parse(JSON.stringify(dummyArray))

    NewdataArray.forEach(function (item, index, theArray) {
      if (item.key == randomNumber) {
        theArray[index].class = 'red'
      }
    })
    this.setState({ dataArray: NewdataArray })
  }

  selectedDisc = (e, item) => {
    e.preventDefault()
    if (this.state.numberGenerated == item.key) {
      this.setState({ scoreCount: this.state.scoreCount + 1 })
    } else {
      this.setState({ scoreCount: this.state.scoreCount - 1 })
    }
  }

  handleOk = () => {
    this.setState({
      visible: false
    })
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }
  handleCancel = e => {
    this.setState({
      visible: false
    })
  }
  render () {
    const { scoreCount } = this.state

    return (
      <MainContainer>
        <Input
          placeholder='Score'
          value={scoreCount}
          style={{ width: '20%' }}
        />
        <Container>
          {this.state.dataArray.map(item => {
            return (
              <CircularComponent
                color={item.class}
                id={item.key}
                key={item.key}
                className={item.class}
                onClick={e => this.selectedDisc(e, item)}
              />
            )
          })}
        </Container>
        <ButtonContainer>
        <Button onClick={this.changeColor}>Play</Button>
        <Button onClick={this.showModal}>Stop</Button>
        </ButtonContainer>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Your Final score is {scoreCount}. </p>
        </Modal>
      </MainContainer>
    )
  }
}
