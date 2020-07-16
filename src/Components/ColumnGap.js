import React, { Component } from "react";
import "../Styles/ColumnGap.css";

class ColumnGap extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      ColumnGap: "0",
      unit: "px",
    };
    this.onChange = this.onChange.bind(this);
    this.ColumnGapStyle = this.ColumnGapStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.ColumnGapStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.ColumnGapStyle();
  }

  ColumnGapStyle() {
    let e = document.querySelector(".ColumnGap");
    e.style.columnGap = `${parseInt(this.state.ColumnGap)}${this.state.unit}`;
    console.log(this.state.ColumnGap, this.state.unit);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.ColumnGapStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="ColumnGap">ColumnGap</label>
        <input
          type="range"
          min="0"
          max="500"
          step="1"
          value={this.state.ColumnGap}
          onChange={this.onChange}
          name="ColumnGap"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="500"
          step="1"
          value={this.state.ColumnGap}
          onChange={this.onChange}
          name="ColumnGap"
        />
        <br />
        <label htmlFor="value">unit</label>&nbsp;
        <select value={this.state.unit} name="unit" onChange={this.onSelect}>
          <option value="px">px </option>
        </select>
        <p></p>
        <div className="ColumnGap">
          Lorcm ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
          consequat dui, et luctus quam. Aliquam magna libero, sodales non eros
          nec, vestibulum sollicitudin leo. Quisque sed erat lorcm. Aliquam
          interdum ante purus, a blandit nunc placerat et. Proin tristique ante
          tincidunt lacus dictum imperdiet. Quisque libero mi, molestie et
          suscipit eget, convallis a ipsum. Lorcm ipsum dolor sit amet,
          consectetur adipiscing elit. Nam eget consequat dui, et luctus quam.
          Aliquam magna libero, sodales non eros nec, vestibulum sollicitudin
          leo. Quisque sed erat lorcm. Aliquam interdum ante purus, a blandit
          nunc placerat et. Proin tristique ante tincidunt lacus dictum
          imperdiet. Quisque libero mi, molestie et suscipit eget, convallis a
          ipsum.
        </div>
        <div>
          {" "}
          column-gap = {this.state.ColumnGap}
          {this.state.unit} ;<br />
          -webkit-column-gap = {this.state.ColumnGap}
          {this.state.unit} ;<br />
          -moz-column-gap = {this.state.ColumnGap}
          {this.state.unit} ;<br />
        </div>
        <p></p>
      </div>
    );
  }
}

export default ColumnGap;
