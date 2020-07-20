import React, { Component } from "react";
import "../Styles/BoxShadow.css";

class boxShadow extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      style: "",
      horizontalHeight: "0",
      verticalHeight: "0",
      blurRadius: "15",
      spreadRadius: "5",
      shadowColor: "#80bfff",
      boxColour: "#0080ff",
      checked: false,
    };
    this.onChange = this.onChange.bind(this);
    this.boxStyle = this.boxStyle.bind(this);
    this.boxColour = this.boxColour.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async onChange(e) {
    const { style, horizontalHeight, verticalHeight, blurRadius, spreadRadius,
      shadowColor, boxColour } = this.state

    await this.setState({
      [e.target.name]: [e.target.value],
    });
    await this.boxStyle(
      style,
      horizontalHeight,
      verticalHeight,
      blurRadius,
      spreadRadius,
      shadowColor
    );
    await this.boxColour(boxColour);
  }

  async handleChange() {
    const { checked, style, horizontalHeight, verticalHeight, blurRadius, spreadRadius, shadowColor } = this.state
    await this.setState({
      checked: !checked,
    });
    await this.boxStyle(
      style,
      horizontalHeight,
      verticalHeight,
      blurRadius,
      spreadRadius,
      shadowColor
    );
  }

  boxColour(bg) {
    const { backgroundColor } = this.state
    let b = document.querySelector(".box");
    backgroundColor = bg;
  }
  boxStyle(
    style,
    horizontalHeight,
    verticalHeight,
    blurRadius,
    spreadRadius,
    clr
  ) {
    const { checked } = this.state
    //console.log(horizontalHeight, verticalHeight, blurRadius, spreadRadius, clr, op);
    let ele = document.querySelector(".box");
    style = checked ? "inset" : "";
    //let ele=document.createElement('div')
    //ele.classList.add('box')
    ele.style.boxShadow = `${style} ${horizontalHeight}px ${verticalHeight}px ${blurRadius}px ${spreadRadius}px ${clr} `;
    // ele.setAttribute('style', `box-shadow: ${style} ${horizontalHeight}px ${verticalHeight}px ${blurRadius}px ${spreadRadius}px ${clr} `);
    //ele.style.backgroundColor = boxColour;
    console.log(
      `${style} ${horizontalHeight}px ${verticalHeight}px ${blurRadius}px ${spreadRadius}px ${clr}`
    );
    document.body.appendChild(ele);
  }

  componentDidMount() {
    const { style, horizontalHeight, verticalHeight, blurRadius, spreadRadius, shadowColor, boxColour } = this.state
    this.boxStyle(
      style,
      horizontalHeight,
      verticalHeight,
      blurRadius,
      spreadRadius,
      shadowColor
    );
    this.boxColour(boxColour);
  }

  render() {
    const { horizontalHeight, blurRadius, boxColour, verticalHeight, spreadRadius, shadowColor,
      checked, style } = this.state

    return (
      <div className="App">
        <label htmlFor="horizontalHeight">Horizontal Height</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={horizontalHeight}
          onChange={this.onChange}
          name="horizontalHeight"
        />
        &nbsp;
        <input
          type="number"
          min="-100"
          max="100"
          value={horizontalHeight}
          onChange={this.onChange}
          name="horizontalHeight"
        />
        <br />
        <label htmlFor="verticalHeight">Vertical Height</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={verticalHeight}
          onChange={this.onChange}
          name="verticalHeight"
        />
        &nbsp;
        <input
          type="number"
          min="-100"
          max="100"
          value={verticalHeight}
          onChange={this.onChange}
          name="verticalHeight"
        />
        <br />
        <label htmlFor="blurRadius">Blur Radius</label>
        <input
          type="range"
          min="0"
          max="150"
          value={blurRadius}
          onChange={this.onChange}
          name="blurRadius"
        />
        &nbsp;
        <input
          type="number"
          min="-100"
          max="100"
          value={blurRadius}
          onChange={this.onChange}
          name="blurRadius"
        />
        <br />
        <label htmlFor="spreadRadius">Spread Radius</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={spreadRadius}
          onChange={this.onChange}
          name="spreadRadius"
        />
        &nbsp;
        <input
          type="number"
          min="-100"
          max="100"
          value={spreadRadius}
          onChange={this.onChange}
          name="spreadRadius"
        />
        <br />
        <label htmlFor="shadowColor">shadow color</label>
        <input
          type="color"
          name="shadowColor"
          onChange={this.onChange}
          value={shadowColor}
        />
        &nbsp;
        <input
          type="text"
          value={shadowColor}
          onChange={this.onChange}
          name="shadowColor"
        />
        <br />
        <label htmlFor="boxColour">box color</label>
        <input
          type="color"
          name="boxColour"
          onChange={this.onChange}
          value={boxColour}
        />
        &nbsp;
        <input
          type="text"
          value={boxColour}
          onChange={this.onChange}
          name="boxColor"
        />
        <br />
        <input
          type="checkbox"
          name="style"
          checked={checked}
          onChange={this.handleChange}
          value={style}
        ></input>
        <label htmlFor="style">Inset</label>
        <div className="box"></div>
        <div>
          -webkit-box-shadow:&nbsp;
          {checked ? "inset" : ""}
          &nbsp;
          {horizontalHeight}px {verticalHeight}px{" "}
          {blurRadius}px {spreadRadius}
          px {shadowColor};
        </div>
        <div>
          -moz-box-shadow:&nbsp;
          {checked ? "inset" : ""}
          &nbsp;
          {horizontalHeight}px {verticalHeight}px{" "}
          {blurRadius}px {spreadRadius}
          px {shadowColor};
        </div>
        <div>
          box-shadow:&nbsp;
          {checked ? "inset" : ""}
          &nbsp;
          {horizontalHeight}px {verticalHeight}px{" "}
          {blurRadius}px {spreadRadius}
          px {shadowColor};
        </div>
      </div>
    );
  }
}

export default boxShadow;
