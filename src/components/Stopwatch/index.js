// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
  }

  time = () => {
    const {minutes, seconds} = this.state
    const totalMinutes = Math.floor(seconds / 60)
    const totalSeconds = Math.floor(seconds % 60)
    const stringMinutes = totalMinutes > 9 ? totalMinutes : `0${totalMinutes}`
    const stringSeconds = totalSeconds > 9 ? totalSeconds : `0${totalSeconds}`
    return `${stringMinutes}:${stringSeconds}`
  }

  startStopWatch = () => {
    const {minutes, seconds} = this.state
    this.timerId = setInterval(() => {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    }, 1000)
  }

  stopStopWatch = () => {
    clearInterval(this.timerId)
  }

  resetStopWatch = () => {
    clearInterval(this.timerId)
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    const {minutes, seconds} = this.state
    return (
      <div className="bg-con">
        <div className="card">
          <h1 className="head">Stopwatch</h1>
          <div className="stopwatch-con">
            <div className="stopWatch">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <p className="para">Timer</p>
            </div>
            <h1 className="time">{this.time()}</h1>
            <div className="button-con">
              <button
                className="button"
                type="button"
                onClick={this.startStopWatch}
              >
                Start
              </button>
              <button
                className="button1"
                type="button"
                onClick={this.stopStopWatch}
              >
                Stop
              </button>
              <button
                className="button2"
                type="button"
                onClick={this.resetStopWatch}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
