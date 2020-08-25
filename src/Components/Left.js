import React, { Component } from "react";
import "../Styles/Left.css";

class Left extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Left: "50",
      unit: "%",
    };
    this.onChange = this.onChange.bind(this);
    this.LeftStyle = this.LeftStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.LeftStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.LeftStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.LeftStyle();
  }

  LeftStyle() {
    const { Left, unit } = this.state;
    let e = document.querySelector(".Left");
    e.style.left = `${parseInt(Left)}${unit}`;
    console.log(Left, unit);
    document.body.appendChild(e);
  }

  render() {
    const { Left, unit } = this.state;
    return (
      <div className="App">
        <label htmlFor="Left">Left</label>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={Left}
          onChange={this.onChange}
          name="Left"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          step="1"
          value={Left}
          onChange={this.onChange}
          name="Left"
        />
        <br />
        <label htmlFor="value">unit</label>&nbsp;
        <select value={unit} name="unit" onChange={this.onSelect}>
          <option value="%">%</option>
          <option value="px">px</option>
        </select>
        <p></p>
        <div className="Left"></div>
        <div>
          Left = {Left}
          {unit} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default Left;
