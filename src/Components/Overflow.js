import React, { Component } from "react";
import "../Styles/Overflow.css";

class Overflow extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Over_flow: "visible",
    };
    this.onChange = this.onChange.bind(this);
    this.OverflowStyle = this.OverflowStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.OverflowStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.OverflowStyle();
  }

  async onSelect(e) {
    await this.setState({
      Over_flow: [e.target.value],
    });
    await this.OverflowStyle();
  }

  OverflowStyle() {
    const { Over_flow } = this.state;
    let e = document.querySelector(".Overflow");
    e.style.overflow = `${Over_flow}`;
    console.log(Over_flow);
    document.body.appendChild(e);
  }

  render() {
    const { Over_flow } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Overflow</label>
        <select value={Over_flow} name="Over_flow" onChange={this.onSelect}>
          <option value="visible">visible </option>
          <option value="hidden">hidden</option>
          <option value="scroll">scroll</option>
          <option value="auto">auto</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="Overflow">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div> overflow = {Over_flow} ;</div>
        <p></p>
      </div>
    );
  }
}

export default Overflow;
