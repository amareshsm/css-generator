import React, { Component } from "react";
import "../Styles/TextDecoration.css";

class TextDecoration extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      text_Decoration_line: "none",
      text_Decoration_style: "solid",
      text_Decoration_colour: "#7275c0",
    };
    this.onChange = this.onChange.bind(this);
    this.textDecorationStyle = this.textDecorationStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.textDecorationStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.textDecorationStyle();
  }

  async onSelect(e) {
    await this.setState({
      text_Decoration_line: [e.target.value],
      //text_Decoration_style: [e.target.value],
    });
    await this.textDecorationStyle();
  }

  textDecorationStyle() {
    const {
      text_Decoration_colour,
      text_Decoration_line,
      text_Decoration_style,
    } = this.state;
    let e = document.querySelector(".font-decor");
    e.style.textDecoration = `${text_Decoration_line} ${text_Decoration_style} ${text_Decoration_colour}`;
    console.log(this.state.text_Decoration);
    document.body.appendChild(e);
  }

  render() {
    const {
      text_Decoration_colour,
      text_Decoration_line,
      text_Decoration_style,
    } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">text_Decoration_line</label>
        <select
          value={text_Decoration_line}
          name="text_Decoration_line"
          onChange={this.onSelect}
        >
          <option value="overline">Overline </option>
          <option value="line-through">Line-through</option>
          <option value="underline">Underline</option>
          <option value="none">None</option>
        </select>
        &nbsp;
        <p></p>
        <label htmlFor="value">text_Decoration_style</label>
        <select
          value={text_Decoration_style}
          name="text_Decoration_style"
          onChange={this.onChange}
        >
          <option value="solid">solid </option>
          <option value="double">double</option>
          <option value="dotted">dotted</option>
          <option value="dashed">dashed</option>
          <option value="wavy">wavy</option>
        </select>
        &nbsp;
        <p></p>
        <label htmlFor="text_Decoration_colour">text_Decoration_color</label>
        <input
          type="color"
          name="text_Decoration_colour"
          onChange={this.onChange}
          value={text_Decoration_colour}
        />
        &nbsp;
        <input
          type="text"
          value={text_Decoration_colour}
          onChange={this.onChange}
          name="text_Decoration_colour"
        />
        <br />
        <div className="font-decor">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div>
          {" "}
          text-decoration = {text_Decoration_line} {text_Decoration_style}{" "}
          {text_Decoration_colour} ;
        </div>
        <div>
          -webkit-text-decoration = {text_Decoration_line}{" "}
          {text_Decoration_style} {text_Decoration_colour} ;{" "}
        </div>
        <p></p>
      </div>
    );
  }
}

export default TextDecoration;
