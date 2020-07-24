import React, { Component } from "react";
import "../Styles/Top.css";

class Top extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Top: "0",
      unit: "px",
    };
    this.onChange = this.onChange.bind(this);
    this.TopStyle = this.TopStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.TopStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.TopStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.TopStyle();
  }

  TopStyle() {
    const { Top, unit } = this.state;
    let e = document.querySelector(".Top");
    e.style.top = `${parseInt(Top)}${unit}`;
    console.log(Top, unit);
    document.body.appendChild(e);
  }

  render() {
    const { Top, unit } = this.state;
    return (
      <div className="App">
        <label htmlFor="Top">Top</label>
        <input
          type="range"
          min="-20"
          max="200"
          step="1"
          value={Top}
          onChange={this.onChange}
          name="Top"
        />
        &nbsp;
        <input
          type="number"
          min="-20"
          max="200"
          step="1"
          value={Top}
          onChange={this.onChange}
          name="Top"
        />
        <br />
        <label htmlFor="value">unit</label>&nbsp;
        <select value={unit} name="unit" onChange={this.onSelect}>
          <option value="px">px </option>
          <option value="cm">cm</option>
        </select>
        <p></p>
        <div className="Top">
          Lorcm ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
          consequat dui, et luctus quam. Aliquam magna libero, sodales non eros
          nec, vestibulum sollicitudin leo. Quisque sed erat lorcm. Aliquam
          interdum ante purus, a blandit nunc placerat et. Proin tristique ante
          tincidunt lacus dictum imperdiet. Quisque libero mi, molestie et
          suscipit eget, convallis a ipsum.
        </div>
        <div>
          {" "}
          Top = {Top}
          {unit} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default Top;
