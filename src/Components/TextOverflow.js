import React, { Component } from "react";
import "../Styles/TextOverflow.css";

class TextOverflow extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      text_Overflow: "clip",
    };
    this.onChange = this.onChange.bind(this);
    this.TextOverflowStyle = this.TextOverflowStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.TextOverflowStyle();
  }

  async onSelect(e) {
    await this.setState({
      text_Overflow: [e.target.value],
    });
    await this.TextOverflowStyle();
  }

  TextOverflowStyle() {
    let e = document.querySelector(".Text_Overflow");
    e.style.textOverflow = `${this.state.text_Overflow}`;
    console.log(this.state.text_Overflow);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.TextOverflowStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">text_Overflow</label>
        <select
          value={this.state.text_Overflow}
          name="text_Overflow"
          onChange={this.onSelect}
        >
          <option value="clip">clip </option>
          <option value="ellipsis">ellipsis</option>
          <option value="---">---</option>
          <option value="">None</option>
        </select>
        <p></p>
        <div className="Text_Overflow">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam.
          </p>
        </div>
        <div> text-overflow = {this.state.text_Overflow} ;</div>
        <p></p>
      </div>
    );
  }
}

export default TextOverflow;
