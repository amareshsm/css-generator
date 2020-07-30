import React, { Component } from "react";
import "../Styles/FontSize.css";

class FontSize extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Font_Size: "xx-small",
    };
    this.onChange = this.onChange.bind(this);
    this.FontSizeStyle = this.FontSizeStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.FontSizeStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.FontSizeStyle();
  }

  async onSelect(e) {
    await this.setState({
      Font_Size: [e.target.value],
    });
    await this.FontSizeStyle();
  }

  FontSizeStyle() {
    const { Font_Size } = this.state;
    let e = document.querySelector(".FontSize");
    e.style.fontSize = `${Font_Size}`;
    console.log(Font_Size);
    document.body.appendChild(e);
  }

  render() {
    const { Font_Size } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Font_Size</label>
        <select value={Font_Size} name="Font_Size" onChange={this.onSelect}>
          <option value="xx-small">xx-small </option>
          <option value="x-small">x-small</option>
          <option value="small">small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="x-large">x-large</option>
          <option value="xx-large">xx-large</option>
          <option value="initial">Initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="FontSize">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div> font-size = {Font_Size} ;</div>
        <p></p>
      </div>
    );
  }
}

export default FontSize;
