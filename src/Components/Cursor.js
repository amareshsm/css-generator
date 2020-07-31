import React, { Component } from "react";
import "../Styles/Cursor.css";

class Cursor extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Cursor: "default",
    };
    this.onChange = this.onChange.bind(this);
    this.CursorStyle = this.CursorStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.CursorStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.CursorStyle();
  }

  async onSelect(e) {
    await this.setState({
      Cursor: [e.target.value],
    });
    await this.CursorStyle();
  }

  CursorStyle() {
    const { Cursor } = this.state;
    let e = document.querySelector(".Cursor");
    e.style.cursor = `${Cursor}`;
    console.log(Cursor);
    document.body.appendChild(e);
  }

  render() {
    const { Cursor } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Cursor</label>&nbsp;
        <select value={Cursor} name="Cursor" onChange={this.onSelect}>
          <option value="default">default</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
          <option value="alias">alias</option>
          <option value="all-scroll">all-scroll</option>
          <option value="auto">auto</option>
          <option value="cell">cell</option>
          <option value="context-menu">context-menu</option>
          <option value="col-resize">col-resize</option>
          <option value="copy">copy</option>
          <option value="crosshair">crosshair</option>
          <option value="e-resize">e-resize</option>
          <option value="ew-resize">ew-resize</option>
          <option value="grab">grab</option>
          <option value="grabbing">grabbing</option>
          <option value="help">help</option>
          <option value="move">move</option>
          <option value="n-resize">n-resize</option>
          <option value="ne-resize">ne-resize</option>
          <option value="nesw-resize">nesw-resize</option>
          <option value="ns-resize">ns-resize</option>
          <option value="no-drop">no-drop</option>
          <option value="none">none</option>
          <option value="not-allowed">not-allowed</option>
          <option value="pointer">pointer</option>
          <option value="progress">progress</option>
          <option value="row-resize">row-resize</option>
          <option value="s-resize">s-resize</option>
          <option value="se-resize">se-resize</option>
          <option value="sw-resize">sw-resize</option>
          <option value="text">text</option>
          <option value="URL">URL</option>
          <option value="vertical-text">vertical-text</option>
          <option value="w-resize">w-resize</option>
          <option value="wait">wait</option>
          <option value="zoom-in">zoom-in</option>
          <option value="zoom-out">zoom-out</option>
        </select>
        <p></p>
        <div className="Cursor"></div>
        <div> cursor = {Cursor} ;</div>
        <p></p>
      </div>
    );
  }
}

export default Cursor;
