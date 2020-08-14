import React, { Component } from "react";
import "../Styles/BoxSizing.css";

class BoxSizing extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      box_sizing: "",
    };
    this.onChange = this.onChange.bind(this);
    this.BoxSizingStyle = this.BoxSizingStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.BoxSizingStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.BoxSizingStyle();
  }

  async onSelect(e) {
    await this.setState({
      box_sizing: [e.target.value],
    });
    await this.BoxSizingStyle();
  }

  BoxSizingStyle() {
    const { box_sizing } = this.state;
    let e = document.querySelector(".BoxSizing");
    e.style.boxSizing = `${box_sizing}`;
    console.log(box_sizing);
    document.body.appendChild(e);
  }

  render() {
    const { box_sizing } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Box Sizing</label>&nbsp;
        <select value={box_sizing} name="box_sizing" onChange={this.onSelect}>
          <option value="">None</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
          <option value="content-box">content-box</option>
          <option value="border-box">border-box</option>
        </select>
        <p></p>
        <div className="BoxSizing">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam.
          </p>
        </div>
        <div> box-sizing = {box_sizing} ;</div>
        <div> -webkit-box-sizing = {box_sizing} ;</div>
        <div> -moz-box-sizing = {box_sizing} ;</div>
        <p></p>
      </div>
    );
  }
}

export default BoxSizing;
