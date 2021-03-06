import React, { Component } from "react";
import "../Styles/TextAlign.css";

class TextAlign extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      text_Align: "center",
      text_Direction: "ltr",
    };
    this.onChange = this.onChange.bind(this);
    this.TextAlignStyle = this.TextAlignStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.TextAlignStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.TextAlignStyle();
  }

  async onSelect(e) {
    await this.setState({
      text_Align: [e.target.value],
    });
    await this.TextAlignStyle();
  }

  TextAlignStyle() {
    const { text_Direction, text_Align } = this.state;
    let e = document.querySelector(".text1");
    e.style.textAlign = `${text_Align}`;
    e.style.direction = `${text_Direction}`;
    console.log(text_Align);
    document.body.appendChild(e);
  }

  render() {
    const { text_Direction, text_Align } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">text_Align</label>&nbsp;
        <select value={text_Align} name="text_Align" onChange={this.onSelect}>
          <option value="justify">Justify</option>
          <option value="center">Center</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
        <p></p>
        <label htmlFor="value">text_Direction</label>&nbsp;
        <select
          value={text_Direction}
          name="text_Direction"
          onChange={this.onChange}
        >
          <option value="ltr">Left to Right</option>
          <option value="rtl">Right to Left</option>
        </select>
        <p></p>
        <div className="text1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div> text-align = {text_Align} ;</div>
        <div>direction = {text_Direction}; </div>
        <p></p>
      </div>
    );
  }
}

export default TextAlign;
