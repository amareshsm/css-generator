import React, { Component } from "react";
import "../Styles/OverflowX.css";

class OverflowX extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      OverflowX: "visible",
    };
    this.onChange = this.onChange.bind(this);
    this.OverflowXStyle = this.OverflowXStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.OverflowXStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.OverflowXStyle();
  }

  async onSelect(e) {
    await this.setState({
      OverflowX: [e.target.value],
    });
    await this.OverflowXStyle();
  }

  OverflowXStyle() {
    const { OverflowX } = this.state;
    let e = document.querySelector(".OverflowX");
    e.style.overflowX = `${OverflowX}`;
    console.log(OverflowX);
    document.body.appendChild(e);
  }

  render() {
    const { OverflowX } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">OverflowX</label>&nbsp;
        <select value={OverflowX} name="OverflowX" onChange={this.onSelect}>
          <option value="visible">visible </option>
          <option value="hidden">hidden</option>
          <option value="scroll">scroll</option>
          <option value="auto">auto</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="OverflowX">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div> overflow-x = {OverflowX} ;</div>
        <p></p>
      </div>
    );
  }
}

export default OverflowX;
