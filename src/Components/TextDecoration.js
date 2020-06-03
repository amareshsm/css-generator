import React, { Component } from "react";
import "../Styles/TextDecoration.css";

class TextDecoration extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      text_Decoration: "none",
    };
    this.onChange = this.onChange.bind(this);
    this.textDecorationStyle = this.textDecorationStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.textDecorationStyle();
  }

  async onSelect(e) {
    await this.setState({
      text_Decoration: [e.target.value],
    });
    await this.textDecorationStyle();
  }

  textDecorationStyle() {
    let e = document.querySelector(".font");
    e.style.textDecoration = `${this.state.text_Decoration}`;
    console.log(this.state.text_Decoration);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.textDecorationStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">text_Decoration</label>
        <select
          value={this.state.text_Decoration}
          name="text_Decoration"
          onChange={this.onSelect}
        >
          <option value="overline">Overline </option>
          <option value="line-through">Line-through</option>
          <option value="underline">Underline</option>
          <option value="none">None</option>
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
        <div> textDecoration = {this.state.text_Decoration} ;</div>
        <p></p>
      </div>
    );
  }
}

export default TextDecoration;
