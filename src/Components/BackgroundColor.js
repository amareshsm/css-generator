import React, { Component } from "react";
import "../Styles/BackgroundColor.css";

class BackgroundColor extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      BackgroundColor: "#88afd7",
    };
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.BackgroundColorStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.BackgroundColorStyle();
  }

  async onSelect(e) {
    await this.setState({
      BackgroundColor_width: [e.target.value],
    });
    await this.BackgroundColorStyle();
  }

  BackgroundColorStyle=()=> {
    const { BackgroundColor } = this.state;

    let e = document.querySelector(".BackgroundColor");
    e.style.backgroundColor = `${BackgroundColor}`;
    console.log(BackgroundColor);
    document.body.appendChild(e);
  }

  render() {
    const { BackgroundColor } = this.state;
    return (
      <div className="App">
        <p></p>
        <label htmlFor="BackgroundColor">BackgroundColor</label>
        <input
          type="color"
          name="BackgroundColor"
          onChange={this.onChange}
          value={BackgroundColor}
        />
        &nbsp;
        <input
          type="text"
          value={BackgroundColor}
          onChange={this.onChange}
          name="BackgroundColor"
        />
        <br />
        <div className="BackgroundColor"></div>
        <div> BackgroundColor = {BackgroundColor} ;</div>
        <p></p>
      </div>
    );
  }
}

export default BackgroundColor;
