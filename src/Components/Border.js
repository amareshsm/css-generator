import React, { Component } from "react";
import "../Styles/Border.css";

class Border extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Border_width: "2",
      Border_style: "solid",
      Border_colour: "#88afd7",
      Border_offset: "5",
    };
    this.onChange = this.onChange.bind(this);
    this.BorderStyle = this.BorderStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.BorderStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.BorderStyle();
  }

  async onSelect(e) {
    await this.setState({
      Border_width: [e.target.value],
    });
    await this.BorderStyle();
  }

  BorderStyle= ()=> {
    const {Border_colour,Border_style,Border_width} = this.state
    
    let e = document.querySelector(".Border");
    e.style.border = `${Border_width}px ${Border_style} ${Border_colour}`;
    console.log(Border);
    document.body.appendChild(e);
  }



  render() {
    const {Border_colour,Border_offset,Border_style,Border_width} = this.state
    return (
      <div className="App">
        <label htmlFor="value">Border_width</label>
        &nbsp;
        <input
          type="range"
          min="0"
          max="100"
          value={Border_width}
          onChange={this.onChange}
          name="Border_width"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={Border_width}
          onChange={this.onChange}
          name="Border_width"
        />
        &nbsp;
        <p></p>
        <label htmlFor="value">Border_style</label>
        <select
          value={Border_style}
          name="Border_style"
          onChange={this.onChange}
        >
          <option value="none">None</option>
          <option value="hidden">Hidden</option>
          <option value="solid">solid </option>
          <option value="dotted">dotted</option>
          <option value="dashed">dashed</option>
          <option value="ridge">ridge</option>
          <option value="inset">inset</option>
          <option value="outset">outset</option>
          <option value="double">Double</option>
          <option value="groove">Groove</option>
          <option value="outset">outset</option>
        </select>
        &nbsp;
        <p></p>
        <label htmlFor="Border_colour">Border_color</label>
        <input
          type="color"
          name="Border_colour"
          onChange={this.onChange}
          value={Border_colour}
        />
        &nbsp;
        <input
          type="text"
          value={Border_colour}
          onChange={this.onChange}
          name="Border_colour"
        />
        <br />
        <div className="Border">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
          consequat dui, et luctus quam. Aliquam magna libero, sodales non eros
          nec, vestibulum sollicitudin leo. Quisque sed erat lorem. Aliquam
          interdum ante purus, a blandit nunc placerat et. Proin tristique ante
          tincidunt lacus dictum imperdiet. Quisque libero mi, molestie
          etsuscipbhvj it eget, convallis a ipsum.
        </div>
        <div>
          {" "}
          border = {Border_width}px {Border_style}{" "}
          {Border_colour} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default Border;
