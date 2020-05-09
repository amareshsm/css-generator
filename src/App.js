import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route } from "react-router-dom";

class App extends Component {
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
    await this.setState({
      [e.target.name]: [e.target.value],
    });
    await this.boxStyle(
      this.state.style,
      this.state.horizontalHeight,
      this.state.verticalHeight,
      this.state.blurRadius,
      this.state.spreadRadius,
      this.state.shadowColor
    );
    await this.boxColour(this.state.boxColour);
  }

  async handleChange() {
    await this.setState({
      checked: !this.state.checked,
    });
    await this.boxStyle(
      this.state.style,
      this.state.horizontalHeight,
      this.state.verticalHeight,
      this.state.blurRadius,
      this.state.spreadRadius,
      this.state.shadowColor
    );
  }

  boxColour(bg) {
    let b = document.querySelector(".box");
    b.style.backgroundColor = bg;
  }
  boxStyle(
    style,
    horizontalHeight,
    verticalHeight,
    blurRadius,
    spreadRadius,
    clr
  ) {
    //console.log(horizontalHeight, verticalHeight, blurRadius, spreadRadius, clr, op);
    let ele = document.querySelector(".box");
    style = this.state.checked ? "inset" : "";
    //let ele=document.createElement('div')
    //ele.classList.add('box')
    ele.style.boxShadow = `${style} ${horizontalHeight}px ${verticalHeight}px ${blurRadius}px ${spreadRadius}px ${clr} `;

    //ele.style.backgroundColor = boxColour;
    console.log(
      `${style} ${horizontalHeight}px ${verticalHeight}px ${blurRadius}px ${spreadRadius}px ${clr}`
    );
    document.body.appendChild(ele);
  }

  componentDidMount() {
    this.boxStyle(
      this.state.style,
      this.state.horizontalHeight,
      this.state.verticalHeight,
      this.state.blurRadius,
      this.state.spreadRadius,
      this.state.shadowColor
    );
    this.boxColour(this.state.boxColour);
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="horizontalHeight">Horizontal Height</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={this.state.horizontalHeight}
          onChange={this.onChange}
          name="horizontalHeight"
        />
        <label>{this.state.horizontalHeight}</label>

        <label htmlFor="verticalHeight">Vertical Height</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={this.state.verticalHeight}
          onChange={this.onChange}
          name="verticalHeight"
        />

        <label htmlFor="blurRadius">Blur Radius</label>
        <input
          type="range"
          min="0"
          max="150"
          value={this.state.blurRadius}
          onChange={this.onChange}
          name="blurRadius"
        />

        <label htmlFor="spreadRadius">Spread Radius</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={this.state.spreadRadius}
          onChange={this.onChange}
          name="spreadRadius"
        />
        <p></p>
        <label htmlFor="shadowColor">shadow color</label>
        <input
          type="color"
          name="shadowColor"
          onChange={this.onChange}
          value={this.state.shadowColor}
        />
        <p></p>
        <label htmlFor="boxColour">box color</label>
        <input
          type="color"
          name="boxColour"
          onChange={this.onChange}
          value={this.state.boxColour}
        />
        <p></p>

        <input
          type="checkbox"
          name="style"
          checked={this.state.checked}
          onChange={this.handleChange}
          value={this.state.style}
        ></input>
        <label htmlFor="style">Inset</label>

        <div className="box"></div>
        <div>
          box-shadow:&nbsp;
          {this.state.checked ? "inset" : ""}
          &nbsp;
          {this.state.horizontalHeight}px {this.state.verticalHeight}px{" "}
          {this.state.blurRadius}px {this.state.spreadRadius}
          px {this.state.shadowColor}
        </div>
      </div>
    );
  }
}

export default App;
