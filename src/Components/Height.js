import React, { Component } from "react";
import "../Styles/Height.css";

class Height extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Height: "30",
      unit: "px",
    };
    this.onChange = this.onChange.bind(this);
    this.HeightStyle = this.HeightStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.HeightStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.HeightStyle();
  }

  HeightStyle() {
    let e = document.querySelector(".Height");
    e.style.height = `${parseInt(this.state.Height)}${this.state.unit}`;
    console.log(this.state.Height, this.state.unit);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.HeightStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="Height">Height</label>
        <input
          type="range"
          min="0"
          max="500"
          step="1"
          value={this.state.Height}
          onChange={this.onChange}
          name="Height"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="500"
          step="1"
          value={this.state.Height}
          onChange={this.onChange}
          name="Height"
        />
        <br />
        <label htmlFor="value">unit</label>&nbsp;
        <select value={this.state.unit} name="unit" onChange={this.onSelect}>
          <option value="px">px </option>
          <option value="cm">cm</option>
        </select>
        <p></p>
        <div className="Height">
          Lorcm ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
          consequat dui, et luctus quam. Aliquam magna libero, sodales non eros
          nec, vestibulum sollicitudin leo. Quisque sed erat lorcm. Aliquam
          interdum ante purus, a blandit nunc placerat et. Proin tristique ante
          tincidunt lacus dictum imperdiet. Quisque libero mi, molestie et
          suscipit eget, convallis a ipsum. Lorcm ipsum dolor sit amet,
          consectetur adipiscing elit. Nam eget consequat dui, et luctus quam.
          Aliquam magna libero, sodales non eros nec, vestibulum sollicitudin
          leo. Quisque sed erat lorcm. Aliquam interdum ante purus, a blandit
          nunc placerat et. Proin tristique ante tincidunt lacus dictum
          imperdiet. Quisque libero mi, molestie et suscipit eget, convallis a
          ipsum.
        </div>
        <div>
          {" "}
          Height = {this.state.Height}
          {this.state.unit} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default Height;
