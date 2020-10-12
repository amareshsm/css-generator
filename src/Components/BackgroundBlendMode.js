import React, { Component } from "react";
import "../Styles/BackgroundBlendMode.css";

class BackgroundBlendMode extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      BackgroundBlendMode: "normal",
    };
    this.onChange = this.onChange.bind(this);
    this.BackgroundBlendModeStyle = this.BackgroundBlendModeStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.BackgroundBlendModeStyle();
  }

   onChange = async(e) => {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.BackgroundBlendModeStyle();
  }

   onSelect = async (e) =>{
    await this.setState({
      BackgroundBlendMode: [e.target.value],
    });
    await this.BackgroundBlendModeStyle();
  }

  BackgroundBlendModeStyle() {
    const { BackgroundBlendMode } = this.state;
    let e = document.querySelector(".BackgroundBlendMode");
    e.style.backgroundBlendMode = `${BackgroundBlendMode}`;
    console.log(BackgroundBlendMode);
    document.body.appendChild(e);
  }

  render() {
    const { BackgroundBlendMode } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">BackgroundBlendMode</label>&nbsp;
        <select
          value={BackgroundBlendMode}
          name="BackgroundBlendMode"
          onChange={this.onChange}
        >
          <option value="normal">normal </option>
          <option value="multiply">multiply</option>
          <option value="screen">screen</option>
          <option value="overlay">overlay</option>
          <option value="darken">darken</option>
          <option value="lighten">lighten</option>
          <option value="color-dodge">color-dodge</option>
          <option value="saturation">saturation</option>
          <option value="color">Color</option>
          <option value="luminosity">luminosity</option>
        </select>
        <p></p>
        <div className="top">
          <div className="BackgroundBlendMode"></div>
        </div>
        <div> background-blend-mode = {BackgroundBlendMode} ;</div>
        <p></p>
      </div>
    );
  }
}

export default BackgroundBlendMode;
