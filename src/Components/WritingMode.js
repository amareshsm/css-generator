import React, { Component } from "react";
import "../Styles/WritingMode.css";

class WritingMode extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Writing_Mode: "horizontal-tb",
    };
    this.onChange = this.onChange.bind(this);
    this.WritingModeStyle = this.WritingModeStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.WritingModeStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.WritingModeStyle();
  }

  async onSelect(e) {
    await this.setState({
      Writing_Mode: [e.target.value],
    });
    await this.WritingModeStyle();
  }

  WritingModeStyle() {
    const { Writing_Mode } = this.state;
    let e = document.querySelector(".WritingMode");
    e.style.writingMode = `${Writing_Mode}`;
    console.log(Writing_Mode);
    document.body.appendChild(e);
  }

  render() {
    const { Writing_Mode } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Writing_Mode</label>
        <select
          value={Writing_Mode}
          name="Writing_Mode"
          onChange={this.onSelect}
        >
          <option value="horizontal-tb">horizontal-tb </option>
          <option value="vertical-rl">vertical-rl</option>
          <option value="vertical-lr">vertical-lr</option>
          <option value="initial">Initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="WritingMode">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div> writing-mode = {Writing_Mode} ;</div>
        <div> -ms-writing-mode = {Writing_Mode} ;</div>
        <div> -webkit-writing-mode = {Writing_Mode} ;</div>
        <p></p>
      </div>
    );
  }
}

export default WritingMode;
