import React, { Component } from "react";
import "../Styles/WordBreak.css";

class WordBreak extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Word_Break: "normal",
    };
    this.onChange = this.onChange.bind(this);
    this.WordBreakStyle = this.WordBreakStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.WordBreakStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.WordBreakStyle();
  }

  async onSelect(e) {
    await this.setState({
      Word_Break: [e.target.value],
    });
    await this.WordBreakStyle();
  }

  WordBreakStyle() {
    const { Word_Break } = this.state;
    let e = document.querySelector(".WordBreak");
    e.style.wordBreak = `${Word_Break}`;
    console.log(Word_Break);
    document.body.appendChild(e);
  }

  render() {
    const { Word_Break } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Word_Break</label> &nbsp;
        <select value={Word_Break} name="Word_Break" onChange={this.onSelect}>
          <option value="normal">Normal</option>
          <option value="keep-all">keep-all </option>
          <option value="break-word">break-word</option>
          <option value="break-all">break-all</option>
          <option value="initial">Initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="WordBreak">
          <p>
            Loremipsumdolorsitamet,consecteturadipiscingelit.Namegetconsequatdui,etluctusquam.Aliquammagnalibero,sodalesnonerosnec,vestibulumsollicitudinleo.Quisquesederatlorem.
          </p>
        </div>
        <div> writing-mode = {Word_Break} ;</div>
        <p></p>
      </div>
    );
  }
}

export default WordBreak;
