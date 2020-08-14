import React, { Component } from "react";
import "../Styles/Direction.css";

class Direction extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Direction: "rtl",
    };
    this.onChange = this.onChange.bind(this);
    this.DirectionStyle = this.DirectionStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.DirectionStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.DirectionStyle();
  }

  async onSelect(e) {
    await this.setState({
      Direction: [e.target.value],
    });
    await this.DirectionStyle();
  }

  DirectionStyle() {
    const { Direction } = this.state;
    let e = document.querySelector(".Direction");
    e.style.direction = `${Direction}`;
    console.log(Direction);
    document.body.appendChild(e);
  }

  render() {
    const { Direction } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Direction</label>&nbsp;
        <select value={Direction} name="Direction" onChange={this.onChange}>
          <option value="rtl">rtl </option>
          <option value="ltr">ltr</option>
        </select>
        <p></p>
        <div className="Direction">
          Lorltr ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
          consequat dui, et luctus quam.
        </div>
        <div> Direction = {Direction} ;</div>
        <p></p>
      </div>
    );
  }
}

export default Direction;
