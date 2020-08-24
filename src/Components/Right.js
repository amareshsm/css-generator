import React, { Component } from "react";
import "../Styles/Right.css";

class Right extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Right: "50",
      unit: "%",
    };
    this.onChange = this.onChange.bind(this);
    this.RightStyle = this.RightStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.RightStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.RightStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.RightStyle();
  }

  RightStyle() {
    const { Right, unit } = this.state;
    let e = document.querySelector(".Right");
    e.style.right = `${parseInt(Right)}${unit}`;
    console.log(Right, unit);
    document.body.appendChild(e);
  }

  render() {
    const { Right, unit } = this.state;
    return (
      <div className="App">
        <label htmlFor="Right">Right</label>
        <input
          type="range"
          min="0"
          max="200"
          step="1"
          value={Right}
          onChange={this.onChange}
          name="Right"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="200"
          step="1"
          value={Right}
          onChange={this.onChange}
          name="Right"
        />
        <br />
        <label htmlFor="value">unit</label>&nbsp;
        <select value={unit} name="unit" onChange={this.onSelect}>
          <option value="%">%</option>
          <option value="px">px</option>
        </select>
        <p></p>
        <div className="Right"></div>
        <div>
          right = {Right}
          {unit} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default Right;
