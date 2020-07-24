import React, { Component } from "react";
import "../Styles/TextTransform.css";

class TextTransform extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      text_Transform: "lowercase",
    };
    this.onChange = this.onChange.bind(this);
    this.textTransformStyle = this.textTransformStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.textTransformStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.textTransformStyle();
  }

  async onSelect(e) {
    await this.setState({
      text_Transform: [e.target.value],
    });
    await this.textTransformStyle();
  }

  textTransformStyle() {
    const { text_Transform } = this.state;
    let e = document.querySelector(".font");
    e.style.textTransform = `${text_Transform}`;
    console.log(text_Transform);
    document.body.appendChild(e);
  }

  render() {
    const { text_Transform } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">text_Transform</label>
        <select
          value={text_Transform}
          name="text_Transform"
          onChange={this.onSelect}
        >
          <option value="uppercase">Uppercase </option>
          <option value="lowercase">Lowercase</option>
          <option value="capitalize">Capitalize</option>
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
        <div> textTransform = {text_Transform} ;</div>
        <p></p>
      </div>
    );
  }
}

export default TextTransform;
