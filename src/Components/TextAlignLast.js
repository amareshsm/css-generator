import React, { Component } from "react";
import "../Styles/TextAlignLast.css";

class TextAlignLast extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Textalign_Last: "auto",
    };
    this.onChange = this.onChange.bind(this);
    this.TextAlignLastStyle = this.TextAlignLastStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.TextAlignLastStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.TextAlignLastStyle();
  }

  async onSelect(e) {
    await this.setState({
      Textalign_Last: [e.target.value],
    });
    await this.TextAlignLastStyle();
  }

  TextAlignLastStyle() {
    const { Textalign_Last } = this.state;
    let e = document.querySelector(".TextAlignLast");
    e.style.textAlignLast = `${Textalign_Last}`;
    console.log(Textalign_Last);
    document.body.appendChild(e);
  }

  render() {
    const { Textalign_Last } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Text align Last</label>&nbsp;
        <select
          value={Textalign_Last}
          name="Textalign_Last"
          onChange={this.onSelect}
        >
          <option value="auto">auto </option>
          <option value="left">left</option>
          <option value="right">right</option>
          <option value="center">center</option>
          <option value="justify">justify</option>
          <option value="start">start</option>
          <option value="end">end</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="TextAlignLast">
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
          text-align-last = {Textalign_Last} ;<br />
          -moz-text-align-last = {Textalign_Last} ;<br />
        </div>
        <p></p>
      </div>
    );
  }
}

export default TextAlignLast;
