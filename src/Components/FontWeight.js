import React, { Component } from "react";
import "../Styles/FontWeight.css";

class FontWeight extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Font_Weight: "normal",
    };
    this.onChange = this.onChange.bind(this);
    this.FontWeightStyle = this.FontWeightStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.FontWeightStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.FontWeightStyle();
  }

  async onSelect(e) {
    await this.setState({
      Font_Weight: [e.target.value],
    });
    await this.FontWeightStyle();
  }

  FontWeightStyle() {
    const { Font_Weight } = this.state;
    let e = document.querySelector(".FontWeight");
    e.style.fontWeight = `${Font_Weight}`;
    console.log(Font_Weight);
    document.body.appendChild(e);
  }

  render() {
    const { Font_Weight } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Font_Weight</label>&nbsp;
        <select value={Font_Weight} name="Font_Weight" onChange={this.onSelect}>
          <option value="normal">normal </option>
          <option value="bold">bold</option>
          <option value="bolder">bolder</option>
          <option value="lighter">lighter</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
          <option value="700">700</option>
          <option value="800">800</option>
          <option value="900">900</option>
          <option value="initial">Initial</option>
        </select>
        <p></p>
        <div className="FontWeight">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div> font-Weight = {Font_Weight} ;</div>
        <p></p>
      </div>
    );
  }
}

export default FontWeight;
