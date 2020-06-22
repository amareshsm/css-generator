import React, { Component } from "react";
import "../Styles/CssFloat.css";

class CssFloat extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Css_Float: "left",
    };
    this.onChange = this.onChange.bind(this);
    this.CssFloatStyle = this.CssFloatStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.CssFloatStyle();
  }

  async onSelect(e) {
    await this.setState({
      Css_Float: [e.target.value],
    });
    await this.CssFloatStyle();
  }

  CssFloatStyle() {
    let e = document.querySelector(".CssFloat");
    e.style.cssFloat = `${this.state.Css_Float}`;
    console.log(this.state.Css_Float);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.CssFloatStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">Css_Float</label>&nbsp;
        <select
          value={this.state.Css_Float}
          name="Css_Float"
          onChange={this.onSelect}
        >
          <option value="left">left </option>
          <option value="right">right</option>
          <option value="none">none</option>
          <option value="initial">Initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div> float = {this.state.Css_Float} ;</div>
        <div className="Float">
          <p className="CssFloat" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
      </div>
    );
  }
}

export default CssFloat;
