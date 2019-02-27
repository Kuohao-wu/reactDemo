import React, { Component } from 'react'
import './App.css'
import ControlButtons from './components/ControlButtons'
import MajorClock from './components/MajorClock'
import SplitTimes from './components/SplitTimes'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStart: false,
      milliseconds: 0,
      intervalId: null,
      timeList: []
    }
  }
  watchReset = () => {
    this.setState({
      milliseconds: 0,
      timeList: []
    })
  }
  watchPause = () => {
    clearInterval(this.state.intervalId)
    this.setState({
      isStart: false
    })
  }
  watchSplit = () => {
    this.setState({
      timeList: [...this.state.timeList, this.state.milliseconds]
    })
  }
  watchStart = () => {
    const currentTime = +new Date()
    const intervalId = setInterval(() => {
      this.setState({
        milliseconds: +new Date() - currentTime
      })
    }, 1000 / 60)
    this.setState({
      isStart: true,
      intervalId
    })
  }
  render () {
    return (
      <div className="App">
        <MajorClock milliseconds={this.state.milliseconds}></MajorClock>
        <ControlButtons
          activated={this.state.isStart}
          onReset={this.watchReset}
          onPause={this.watchPause}
          onSplit={this.watchSplit}
          onStart={this.watchStart}>
        </ControlButtons>
        <SplitTimes timeList={this.state.timeList}></SplitTimes>
      </div>
    )
  }
}

export default App;
