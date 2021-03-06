import React, { Component } from "react";
import "../Styles/BackgroundPosition.css";

class BackgroundPosition extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      BackgroundPosition: "left top",
    };
    this.onChange = this.onChange.bind(this);
    this.BackgroundPositionStyle = this.BackgroundPositionStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.BackgroundPositionStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.BackgroundPositionStyle();
  }

  async onSelect(e) {
    await this.setState({
      BackgroundPosition: [e.target.value],
    });
    await this.BackgroundPositionStyle();
  }

  BackgroundPositionStyle() {
    const { BackgroundPosition } = this.state;
    let e = document.querySelector(".BackgroundPosition");
    e.style.backgroundPosition = `${BackgroundPosition}`;
    console.log(BackgroundPosition);
    document.body.appendChild(e);
  }

  render() {
    const { BackgroundPosition } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Background Position</label>&nbsp;
        <select
          value={BackgroundPosition}
          name="BackgroundPosition"
          onChange={this.onSelect}
        >
          <option value="left top">left top</option>
          <option value="left center">left center </option>
          <option value="left bottom">left bottom</option>
          <option value="right top">right top</option>
          <option value="right center">right center</option>
          <option value="right bottom">right bottom</option>
          <option value="center top">center top</option>
          <option value="center center">Center center</option>
          <option value="center bottom">center bottom</option>
          <option value="initial">initial</option>
        </select>
        <p></p>
        <pre>
          <div className="BackgroundPosition">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </pre>
        <div> background-position = {BackgroundPosition} ;</div>
        <p></p>
      </div>
    );
  }
}

export default BackgroundPosition;
