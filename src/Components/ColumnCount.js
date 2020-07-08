import React, { Component } from "react";
import "../Styles/ColumnCount.css";

class ColumnCount extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Column_Count: "1",
    };
    this.onChange = this.onChange.bind(this);
    this.ColumnCountStyle = this.ColumnCountStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.ColumnCountStyle();
  }

  async onSelect(e) {
    await this.setState({
      Column_Count: [e.target.value],
    });
    await this.ColumnCountStyle();
  }

  ColumnCountStyle() {
    let e = document.querySelector(".ColumnCount");
    e.style.columnCount = `${this.state.Column_Count}`;
    console.log(this.state.Column_Count);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.ColumnCountStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">Column_Count</label>&nbsp;
        <input
          type="range"
          min="0"
          max="10"
          step="1"
          value={this.state.Column_Count}
          onChange={this.onChange}
          name="Column_Count"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="10"
          value={this.state.Column_Count}
          onChange={this.onChange}
          name="Column_Count"
        />
        <p></p>
        <div className="ColumnCount">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
          consequat dui, et luctus quam. Aliquam magna libero, sodales non eros
          nec, vestibulum sollicitudin leo. Quisque sed erat lorem. Aliquam
          interdum ante purus, a blandit nunc placerat et. Proin tristique ante
          tincidunt lacus dictum imperdiet. Quisque libero mi, molestie et
          suscipit eget, convallis a ipsum.
        </div>
        <div> column-count= {this.state.Column_Count} ;</div>
        <div> -webkit-column-count= {this.state.Column_Count} ;</div>
        <div> -moz-column-count= {this.state.Column_Count} ;</div>
        <p></p>
      </div>
    );
  }
}

export default ColumnCount;
