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

  componentDidMount() {
    this.ColumnGapStyle();
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
    const { unit, ColumnGap } = this.state;
    let e = document.querySelector(".ColumnGap");
    e.style.columnGap = `${parseInt(ColumnGap)}${unit}`;
    console.log(ColumnGap, unit);
    document.body.appendChild(e);
  }

  render() {
    const { unit, ColumnGap } = this.state;
    return (
      <div className="App">
        <label htmlFor="ColumnGap">ColumnGap</label>
        <input
          type="range"
          min="0"
          max="500"
          step="1"
          value={ColumnGap}
          onChange={this.onChange}
          name="ColumnGap"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="500"
          step="1"
          value={ColumnGap}
          onChange={this.onChange}
          name="ColumnGap"
        />
        <br />
        <label htmlFor="value">unit</label>&nbsp;
        <select value={unit} name="unit" onChange={this.onSelect}>
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
          column-gap = {ColumnGap}
          {unit} ;<br />
          -webkit-column-gap = {ColumnGap}
          {unit} ;<br />
          -moz-column-gap = {ColumnGap}
          {unit} ;<br />
        </div>
        <p></p>
      </div>
    );
  }
}

export default ColumnGap;
