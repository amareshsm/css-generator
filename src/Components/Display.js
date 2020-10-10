import React, { Component } from "react";
import "../Styles/Display.css";

class Display extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Display: "inline",
    };
    this.onChange = this.onChange.bind(this);
    this.DisplayStyle = this.DisplayStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.DisplayStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.DisplayStyle();
  }

  async onSelect(e) {
    await this.setState({
      Display: [e.target.value],
    });
    await this.DisplayStyle();
  }

  DisplayStyle() {
    const { Display } = this.state;
    let e = document.querySelector("#Display");
    e.style.display = `${Display}`;
    console.log(Display);
    document.body.appendChild(e);
  }

  render() {
    const { Display } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Display</label>
        <select value={Display} name="Display" onChange={this.onSelect}>
          <option value="inline">inline</option>
          <option value="none">none</option>
          <option value="block">block</option>
          <option value="inline-block">inline-block</option>
          <option value="flex">flex</option>
          <option value="grid">grid</option>
          <option value="inline-flex">inline-flex</option>
          <option value="inline-grid">inline-grid</option>
          <option value="inline-table">inline-table</option>
          <option value="list-item">list-item</option>
          <option value="run-in">run-in</option>
          <option value="table">table</option>
          <option value="table-caption">table-caption</option>
          <option value="table-column-group">table-column-group</option>
          <option value="table-header-group">table-header-group</option>
          <option value="table-footer-group">table-footer-group</option>
          <option value="table-row-group">table-row-group</option>
          <option value="table-cell">table-cell</option>
          <option value="table-column">table-column</option>
          <option value="table-row">table-row</option>
          <option value="initial">Initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div class="display-div">
          <span id="Display">consectetur adipiscing</span>
        </div>
        <div> display = {Display} ;</div>
        <p></p>
      </div>
    );
  }
}

export default Display;
