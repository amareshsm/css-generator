import React, { Component } from "react";
import "../Styles/OverflowY.css";

class OverflowY extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      OverflowY: "visible",
    };
    this.onChange = this.onChange.bind(this);
    this.OverflowYStyle = this.OverflowYStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.OverflowYStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.OverflowYStyle();
  }

  async onSelect(e) {
    await this.setState({
      OverflowY: [e.target.value],
    });
    await this.OverflowYStyle();
  }

  OverflowYStyle() {
    const { OverflowY } = this.state;
    let e = document.querySelector(".OverflowY");
    e.style.overflowY = `${OverflowY}`;
    console.log(OverflowY);
    document.body.appendChild(e);
  }

  render() {
    const { OverflowY } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">OverflowY</label>&nbsp;
        <select value={OverflowY} name="OverflowY" onChange={this.onSelect}>
          <option value="visible">visible </option>
          <option value="hidden">hidden</option>
          <option value="scroll">scroll</option>
          <option value="auto">auto</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="OverflowY">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            egetconsequat dui, et luctus quam. Aliquam magna libero, sodales
            noneros nec, vestibulum sollicitudin leo. Quisque sed erat
            lorem.Aliquam interdum ante purus, a blandit nunc placerat et.
            Prointristique ante tincidunt lacus dictum imperdiet. Quisque libero
            mi, molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div> overflow-y = {OverflowY} ;</div>
        <p></p>
      </div>
    );
  }
}

export default OverflowY;
