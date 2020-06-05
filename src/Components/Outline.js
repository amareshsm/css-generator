import React, { Component } from "react";
import "../Styles/Outline.css";

class Outline extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Outline_width: "10",
      Outline_style: "solid",
      Outline_colour: "#c42727",
    };
    this.onChange = this.onChange.bind(this);
    this.OutlineStyle = this.OutlineStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.OutlineStyle();
  }

  async onSelect(e) {
    await this.setState({
      Outline_width: [e.target.value],
      //Outline_style: [e.target.value],
    });
    await this.OutlineStyle();
  }

  OutlineStyle() {
    let e = document.querySelector(".outline");
    e.style.outline = `${this.state.Outline_width}px ${this.state.Outline_style} ${this.state.Outline_colour}`;
    console.log(this.state.Outline);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.OutlineStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">Outline_width</label>
        {/*} <select
          value={this.state.Outline_width}
          name="Outline_width"
          onChange={this.onSelect}
        >
          <option value="medium">Medium </option>
          <option value="thin">Thin</option>
          <option value="thick">Thick</option>
          <option value="none">None</option>
    </select>*/}
        &nbsp;
        <input
          type="range"
          min="0"
          max="100"
          value={this.state.Outline_width}
          onChange={this.onChange}
          name="Outline_width"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={this.state.Outline_width}
          onChange={this.onChange}
          name="Outline_width"
        />
        &nbsp;
        <p></p>
        <label htmlFor="value">Outline_style</label>
        <select
          value={this.state.Outline_style}
          name="Outline_style"
          onChange={this.onChange}
        >
          <option value="none">None</option>
          <option value="solid">solid </option>
          <option value="dotted">dotted</option>
          <option value="dashed">dashed</option>
          <option value="ridge">ridge</option>
          <option value="inset">inset</option>
          <option value="outset">outset</option>
          <option value="double">Double</option>
          <option value="groove">Groove</option>
        </select>
        &nbsp;
        <p></p>
        <label htmlFor="Outline_colour">Outline_color</label>
        <input
          type="color"
          name="Outline_colour"
          onChange={this.onChange}
          value={this.state.Outline_colour}
        />
        &nbsp;
        <input
          type="text"
          value={this.state.Outline_colour}
          onChange={this.onChange}
          name="Outline_colour"
        />
        <br />
        <div className="outline">
          {/*<p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>*/}
        </div>
        <div>
          {" "}
          outline = {this.state.Outline_width}px {this.state.Outline_style}{" "}
          {this.state.Outline_colour} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default Outline;
