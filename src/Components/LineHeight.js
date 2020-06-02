import React, { Component } from "react";
import "../Styles/LineHeight.css";

class LineHeight extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      line_Height: "30",
      //value: "px",
    };
    this.onChange = this.onChange.bind(this);
    this.lineHeightStyle = this.lineHeightStyle.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: [e.target.value],
      //value: e.target.value,
    });
    await this.lineHeightStyle(this.state.line_Height);
  }

  lineHeightStyle(line_Height) {
    console.log(line_Height);
    let e = document.querySelector(".line");
    e.style.lineHeight = `${line_Height}px`;
    document.body.appendChild(e);
  }
  componentDidMount() {
    this.lineHeightStyle(this.state.line_Height);
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
        {/*<label htmlFor="value">unit</label>
        <select value={this.state.value} name="value" onChange={this.onChange}>
          <option selected value="px">
            px
          </option>
          <option value="">unitless</option>
          <option value="em">em</option>
          <option value="%">percent</option>
          <option value="normal">normal</option>
        </select>
        <p></p>*/}
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
        <div>object.style.lineHeight = {this.state.line_Height}px;</div>
        <p></p>
      </div>
    );
  }
}

export default LineHeight;
