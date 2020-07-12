import React, { Component } from "react";
import "../Styles/WhiteSpace.css";

class WhiteSpace extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      White_Space: "normal",
    };
    this.onChange = this.onChange.bind(this);
    this.WhiteSpaceStyle = this.WhiteSpaceStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.WhiteSpaceStyle();
  }

  async onSelect(e) {
    await this.setState({
      White_Space: [e.target.value],
    });
    await this.WhiteSpaceStyle();
  }

  WhiteSpaceStyle() {
    let e = document.querySelector(".WhiteSpace");
    e.style.whiteSpace = `${this.state.White_Space}`;
    console.log(this.state.White_Space);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.WhiteSpaceStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">White Space</label>&nbsp;
        <select
          value={this.state.White_Space}
          name="White_Space"
          onChange={this.onSelect}
        >
          <option value="normal">normal </option>
          <option value="nowrap">nowrap</option>
          <option value="pre">pre</option>
          <option value="pre-line">pre-line</option>
          <option value="pre-wrap">pre-wrap</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="WhiteSpace">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            risus ultricies tristique nulla aliquet enim. Turpis egestas
            maecenas pharetra convallis posuere morbi leo. Massa massa ultricies
            mi quis hendrerit dolor. Id faucibus nisl tincidunt eget nullam non
            nisi.
          </p>
        </div>
        <div> word-wrap = {this.state.White_Space} ;</div>
        <p></p>
      </div>
    );
  }
}

export default WhiteSpace;
