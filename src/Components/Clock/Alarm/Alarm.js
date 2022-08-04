import React, { Component } from "react";
import CircularDial from "../../SharedComponents/CircularDial/CircularDial";
import "./Alarm.css";

class Alarm extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: "",
      alarmTime: "",
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
    
  }

  componentDidMount() {
    this.clock = setInterval(() => this.setCurrentTime(), 1000);
    this.interval = setInterval(() => this.checkAlarmClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
    clearInterval(this.interval);
  }

  setCurrentTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString("en-US", { hour12: false }),
    });
  }

  setAlarmTime(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ":00";
    this.setState({
      alarmTime: inputAlarmTimeModified,
    });
  }

  checkAlarmClock() {
    if (this.state.alarmTime == "undefined" || !this.state.alarmTime) {
      this.alarmMessage = "Select Alarm Time ";
    } else {
      this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
      if (this.state.currentTime === this.state.alarmTime) {
        alert("its time!");
      } else {
        console.log("not yet");
      }
    }
  }

  render() {
    return (
      <CircularDial>
        <div>
          <div className="alarmMessage">It is</div>
          <div className="currentTime">{this.state.currentTime}</div>
          <div className="alarmMessage">{this.alarmMessage}</div>
          <form >
            <input className="timeInput" type="time" onChange={this.setAlarmTime}></input>
          </form>
        </div>
      </CircularDial>
    );
  }
}

export default Alarm;
