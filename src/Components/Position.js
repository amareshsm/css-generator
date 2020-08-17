import React, { Component } from "react";
import "../Styles/Position.css";

class Position extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Position: "default",
    };
    this.onChange = this.onChange.bind(this);
    this.PositionStyle = this.PositionStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.PositionStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.PositionStyle();
  }

  async onSelect(e) {
    await this.setState({
      Position: [e.target.value],
    });
    await this.PositionStyle();
  }

  PositionStyle() {
    const { Position } = this.state;
    let e = document.querySelector(".Position");
    e.style.position = `${Position}`;
    console.log(Position);
    document.body.appendChild(e);
  }

  render() {
    const { Position } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Position</label>&nbsp;
        <select value={Position} name="Position" onChange={this.onSelect}>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
          <option value="static">static</option>
          <option value="absolute">absolute</option>
          <option value="fixed">fixed</option>
          <option value="relative">relative</option>
        </select>
        <p></p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sed
          libero enim sed faucibus. Risus in hendrerit gravida rutrum quisque.
        </p>
        <div className="Position">
          <h1>eget nunc scelerisque</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          mattis ullamcorper velit sed ullamcorper morbi tincidunt.
        </p>
        <div> Position = {Position} ;</div>
        <p></p>
      </div>
    );
  }
}

export default Position;
