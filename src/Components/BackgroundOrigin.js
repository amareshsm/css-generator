import React, { Component } from "react";
import "../Styles/BackgroundOrigin.css";

class BackgroundOrigin extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      BackgroundOrigin: "padding-box",
    };
    this.onChange = this.onChange.bind(this);
    this.BackgroundOriginStyle = this.BackgroundOriginStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.BackgroundOriginStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.BackgroundOriginStyle();
  }

  async onSelect(e) {
    await this.setState({
      BackgroundOrigin: [e.target.value],
    });
    await this.BackgroundOriginStyle();
  }

  BackgroundOriginStyle() {
    const { BackgroundOrigin } = this.state;
    let e = document.querySelector(".BackgroundOrigin");
    e.style.backgroundOrigin = `${BackgroundOrigin}`;
    console.log(BackgroundOrigin);
    document.body.appendChild(e);
  }

  render() {
    const { BackgroundOrigin } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Background Origin</label>&nbsp;
        <select
          value={BackgroundOrigin}
          name="BackgroundOrigin"
          onChange={this.onSelect}
        >
          <option value="border-box">border-box</option>
          <option value="padding-box">padding-box </option>
          <option value="content-box">content-box</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <pre>
          <div className="BackgroundOrigin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </pre>
        <div> background-Origin = {BackgroundOrigin} ;</div>
        <p></p>
      </div>
    );
  }
}

export default BackgroundOrigin;
