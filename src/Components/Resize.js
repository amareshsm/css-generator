import React, { Component } from "react";
import "../Styles/Resize.css";

class Resize extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Resize: "both",
    };
    this.onChange = this.onChange.bind(this);
    this.ResizeStyle = this.ResizeStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.ResizeStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.ResizeStyle();
  }

  async onSelect(e) {
    await this.setState({
      Resize: [e.target.value],
    });
    await this.ResizeStyle();
  }

  ResizeStyle() {
    const { Resize } = this.state;
    let e = document.querySelector(".Resize");
    e.style.resize = `${Resize}`;
    console.log(Resize);
    document.body.appendChild(e);
  }

  render() {
    const { Resize } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Resize</label>&nbsp;
        <select value={Resize} name="Resize" onChange={this.onSelect}>
          <option value="both">both </option>
          <option value="horizontal">horizontal</option>
          <option value="vertical">vertical</option>
          <option value="none">none</option>
          <option value="initial">initial</option>
        </select>
        <p></p>
        <div className="Resize">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div>
          {" "}
          resize = {Resize} ;<br />
        </div>
        <p></p>
      </div>
    );
  }
}

export default Resize;
