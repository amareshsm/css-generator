import React, { Component } from "react";
import "../Styles/MinWidth.css";

class MinWidth extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      MinWidth: "50",
      unit: "%",
    };
    this.onChange = this.onChange.bind(this);
    this.MinWidthStyle = this.MinWidthStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.MinWidthStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.MinWidthStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.MinWidthStyle();
  }

  MinWidthStyle() {
    const { MinWidth, unit } = this.state;
    let e = document.querySelector(".MinWidth");
    e.style.minWidth = `${parseInt(MinWidth)}${unit}`;
    console.log(MinWidth, unit);
    document.body.appendChild(e);
  }

  render() {
    const { MinWidth, unit } = this.state;
    return (
      <div className="App">
        <label htmlFor="MinWidth">MinWidth</label>
        <input
          type="range"
          min="0"
          max="300"
          step="1"
          value={MinWidth}
          onChange={this.onChange}
          name="MinWidth"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="300"
          step="1"
          value={MinWidth}
          onChange={this.onChange}
          name="MinWidth"
        />
        <br />
        <label htmlFor="value">unit</label>&nbsp;
        <select value={unit} name="unit" onChange={this.onSelect}>
          <option value="cm">cm</option>
          <option value="%">%</option>
          <option value="px">px</option>
        </select>
        <p></p>
        <div className="MinWidth">
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
          min-Width = {MinWidth}
          {unit} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default MinWidth;
