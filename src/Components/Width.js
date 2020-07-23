import React, { Component } from "react";
import "../Styles/Width.css";

class Width extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Width: "30",
      unit: "%",
    };
    this.onChange = this.onChange.bind(this);
    this.WidthStyle = this.WidthStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.WidthStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.WidthStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.WidthStyle();
  }

  WidthStyle() {
    const { Width, unit } = this.state;
    let e = document.querySelector(".Width");
    e.style.width = `${parseInt(Width)}${unit}`;
    console.log(Width, unit);
    document.body.appendChild(e);
  }

  render() {
    const { Width, unit } = this.state;
    return (
      <div className="App">
        <label htmlFor="Width">Width</label>
        <input
          type="range"
          min="0"
          max="200"
          step="1"
          value={Width}
          onChange={this.onChange}
          name="Width"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="200"
          step="1"
          value={Width}
          onChange={this.onChange}
          name="Width"
        />
        <br />
        <label htmlFor="value">unit</label>&nbsp;
        <select value={unit} name="unit" onChange={this.onSelect}>
          <option value="px">px </option>
          <option value="cm">cm</option>
          <option value="%">%</option>
        </select>
        <p></p>
        <div className="Width">
          Lorcm ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
          consequat dui, et luctus quam. Aliquam magna libero, sodales non eros
          nec, vestibulum sollicitudin leo. Quisque sed erat lorcm. Aliquam
          interdum ante purus, a blandit nunc placerat et. Proin tristique ante
          tincidunt lacus dictum imperdiet. Quisque libero mi, molestie et
          suscipit eget, convallis a ipsum.
        </div>
        <div>
          {" "}
          width = {Width}
          {unit} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default Width;
