import React, { Component } from "react";
import "../Styles/BorderBottom.css";

class BorderBottom extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      BorderBottom_width: "2",
      BorderBottom_style: "solid",
      BorderBottom_colour: "#5acebc",
      BorderBottom_offset: "5",
    };
    this.onChange = this.onChange.bind(this);
    this.BorderBottomStyle = this.BorderBottomStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.BorderBottomStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.BorderBottomStyle();
  }

  async onSelect(e) {
    await this.setState({
      BorderBottom_width: [e.target.value],
    });
    await this.BorderBottomStyle();
  }

  BorderBottomStyle() {
    const { BorderBottom_colour, BorderBottom_offset, BorderBottom_style, BorderBottom_width } = this.state
    let e = document.querySelector(".BorderBottom");
    e.style.borderBottom = `${BorderBottom_width}px ${BorderBottom_style} ${BorderBottom_colour}`;
    console.log(BorderBottom);
    document.body.appendChild(e);
  }



  render() {
    const { BorderBottom_colour, BorderBottom_offset, BorderBottom_style, BorderBottom_width } = this.state
    return (
      <div className="App">
        <label htmlFor="value">BorderBottom_width</label>
        &nbsp;
        <input
          type="range"
          min="0"
          max="100"
          value={BorderBottom_width}
          onChange={this.onChange}
          name="BorderBottom_width"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={BorderBottom_width}
          onChange={this.onChange}
          name="BorderBottom_width"
        />
        &nbsp;
        <p></p>
        <label htmlFor="value">BorderBottom_style</label>
        <select
          value={BorderBottom_style}
          name="BorderBottom_style"
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
        <label htmlFor="BorderBottom_colour">BorderBottom_color</label>
        <input
          type="color"
          name="BorderBottom_colour"
          onChange={this.onChange}
          value={BorderBottom_colour}
        />
        &nbsp;
        <input
          type="text"
          value={BorderBottom_colour}
          onChange={this.onChange}
          name="BorderBottom_colour"
        />
        <br />
        <div className="BorderBottom">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div>
          {" "}
          border-bottom = {BorderBottom_width}px{" "}
          {BorderBottom_style} {BorderBottom_colour} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default BorderBottom;
