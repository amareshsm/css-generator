import React, { Component } from "react";
import "../Styles/MinHeight.css";

class MinHeight extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      MinHeight: "200",
      unit: "px",
    };
    this.onChange = this.onChange.bind(this);
    this.MinHeightStyle = this.MinHeightStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.MinHeightStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.MinHeightStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.MinHeightStyle();
  }

  MinHeightStyle() {
    const { MinHeight, unit } = this.state;
    let e = document.querySelector(".MinHeight");
    e.style.minHeight = `${parseInt(MinHeight)}${unit}`;
    console.log(MinHeight, unit);
    document.body.appendChild(e);
  }

  render() {
    const { MinHeight, unit } = this.state;
    return (
      <div className="App">
        <label htmlFor="MinHeight">MinHeight</label>
        <input
          type="range"
          min="0"
          max="500"
          step="1"
          value={MinHeight}
          onChange={this.onChange}
          name="MinHeight"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="500"
          step="1"
          value={MinHeight}
          onChange={this.onChange}
          name="MinHeight"
        />
        <br />
        <label htmlFor="value">unit</label>&nbsp;
        <select value={unit} name="unit" onChange={this.onSelect}>
          <option value="px">px </option>
          <option value="cm">cm</option>
        </select>
        <p></p>
        <div className="MinHeight">
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
          min-height = {MinHeight}
          {unit} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default MinHeight;
