import React, { Component } from "react";
import "../Styles/Outline.css";

class Outline extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Outline_width: "10",
      Outline_style: "solid",
      Outline_colour: "#c42727",
      outline_offset: "5",
    };
    this.onChange = this.onChange.bind(this);
    this.OutlineStyle = this.OutlineStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.OutlineStyle();
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
    });
    await this.OutlineStyle();
  }

  OutlineStyle() {
    const {
      outline_offset,
      Outline_colour,
      Outline_style,
      Outline_width,
    } = this.state;
    let e = document.querySelector(".outline");
    e.style.outline = `${Outline_width}px ${Outline_style} ${Outline_colour}`;
    e.style.outlineOffset = `${parseInt(outline_offset)}px`;
    console.log(this.state.Outline);
    document.body.appendChild(e);
  }

  render() {
    const {
      outline_offset,
      Outline_colour,
      Outline_style,
      Outline_width,
    } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Outline_width</label>
        &nbsp;
        <input
          type="range"
          min="0"
          max="100"
          value={Outline_width}
          onChange={this.onChange}
          name="Outline_width"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={Outline_width}
          onChange={this.onChange}
          name="Outline_width"
        />
        &nbsp;
        <p></p>
        <label htmlFor="value">Outline_style</label>
        <select
          value={Outline_style}
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
          value={Outline_colour}
        />
        &nbsp;
        <input
          type="text"
          value={Outline_colour}
          onChange={this.onChange}
          name="Outline_colour"
        />
        <br />
        <label htmlFor="outline_offset">Outline Offset</label>
        <input
          type="range"
          min="1"
          max="250"
          value={outline_offset}
          onChange={this.onChange}
          name="outline_offset"
        />
        &nbsp;
        <input
          type="number"
          min="1"
          max="250"
          value={outline_offset}
          onChange={this.onChange}
          name="outline_offset"
        />
        <br />
        <div className="outline"></div>
        <div>
          {" "}
          outline = {Outline_width}px {Outline_style} {Outline_colour} ;
        </div>
        <div> outlineOffset= {outline_offset}px;</div>
        <p></p>
      </div>
    );
  }
}

export default Outline;
