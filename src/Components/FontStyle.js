import React, { Component } from "react";
import "../Styles/FontStyle.css";

class fontStyle extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      font_Style: "normal",
    };
    this.onChange = this.onChange.bind(this);
    this.fontStyleStyle = this.fontStyleStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.fontStyleStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.fontStyleStyle();
  }

  async onSelect(e) {
    await this.setState({
      font_Style: [e.target.value],
    });
    await this.fontStyleStyle();
  }

  fontStyleStyle() {
    const { font_Style } = this.state;
    let e = document.querySelector(".font");
    e.style.fontStyle = `${font_Style}`;
    console.log(font_Style);
    document.body.appendChild(e);
  }

  render() {
    const { font_Style } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">font_Style</label>
        <select value={font_Style} name="font_Style" onChange={this.onSelect}>
          <option value="italic">italic </option>
          <option value="oblique">oblique</option>
          <option value="normal">normal</option>
        </select>
        <p></p>
        <div className="font">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div> fontStyle = {font_Style} ;</div>
        <p></p>
      </div>
    );
  }
}

export default fontStyle;
