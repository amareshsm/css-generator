import React, { Component } from "react";
import "../Styles/LineHeight.css";

class LineHeight extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      line_Height: "30",
      unit: "px",
    };
    this.onChange = this.onChange.bind(this);
    this.lineHeightStyle = this.lineHeightStyle.bind(this);
    this.onSelect =this.onSelect.bind(this)
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,

    });
    await this.lineHeightStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.lineHeightStyle();
  }

  lineHeightStyle() {
    let e = document.querySelector(".line");
    e.style.lineHeight = `${parseInt(this.state.line_Height)}${this.state.unit}`;
    console.log(this.state.line_Height,this.state.unit)
    document.body.appendChild(e);
  }



  componentDidMount() {
    this.lineHeightStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="line_Height">Line Height</label>
        <input
          type="range"
          min="1"
          max="250"
          value={this.state.line_Height}
          onChange={this.onChange}
          name="line_Height"
        />
        &nbsp;
        <input
          type="number"
          min="1"
          max="250"
          value={this.state.line_Height}
          onChange={this.onChange}
          name="line_Height"
        />
        <br />
        <label htmlFor="value">unit</label>
        <select value={this.state.unit} name="unit" onChange={this.onSelect}>
          <option value="px">px </option>
          <option value=" ">unitless</option>
          <option value="em">em</option>
          <option value="%">percent</option>
          <option value="normal">normal</option>
        </select>
        <p></p>
        <div className="line">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div> lineHeight = {this.state.line_Height}{this.state.unit} ;</div>
        <p></p>
      </div>
    );
  }
}

export default LineHeight;
