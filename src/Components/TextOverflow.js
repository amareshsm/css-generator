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

  componentDidMount() {
    this.TextOverflowStyle();
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
    const { text_Overflow } = this.state;
    let e = document.querySelector(".Text_Overflow");
    e.style.textOverflow = `${text_Overflow}`;
    console.log(text_Overflow);
    document.body.appendChild(e);
  }

  render() {
    const { text_Overflow } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">text_Overflow</label>
        <select
          value={text_Overflow}
          name="text_Overflow"
          onChange={this.onChange}
        >
          <option value="clip">clip </option>
          <option value="ellipsis">ellipsis</option>
          <option value="initial">Initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="Text_Overflow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam.
        </div>
        <div> text-overflow = {text_Overflow} ;</div>
        <p></p>
      </div>
    );
  }
}

export default TextOverflow;
