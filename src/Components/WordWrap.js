import React, { Component } from "react";
import "../Styles/WordWrap.css";

class WordWrap extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Word_Wrap: "normal",
    };
    this.onChange = this.onChange.bind(this);
    this.WordWrapStyle = this.WordWrapStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.WordWrapStyle();
  }

  async onSelect(e) {
    await this.setState({
      Word_Wrap: [e.target.value],
    });
    await this.WordWrapStyle();
  }

  WordWrapStyle() {
    let e = document.querySelector(".WordWrap");
    e.style.wordWrap = `${this.state.Word_Wrap}`;
    console.log(this.state.Word_Wrap);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.WordWrapStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">Word Wrap</label>&nbsp;
        <select
          value={this.state.Word_Wrap}
          name="Word_Wrap"
          onChange={this.onSelect}
        >
          <option value="normal">normal </option>
          <option value="break-word">break-word</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="WordWrap">
          <p>
            Lorem ipsum dolor sit
            amet,consecteturadipiscingelit.Namegetconsequadui,etluctusquam.Aliquammagnalibero,sodalesnon
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div> word-wrap = {this.state.Word_Wrap} ;</div>
        <p></p>
      </div>
    );
  }
}

export default WordWrap;
