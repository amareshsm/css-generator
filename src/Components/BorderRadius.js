import React, { Component } from "react";
import "../Styles/BorderRadius.css";

class BorderRadius extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      //style: "",
      topLeftRadius: "0",
      topRightRadius: "0",
      bottomLeftRadius: "0",
      bottomRightRadius: "0",
      boxColour: "#0080ff",
      border_Width: "10",
      borderStyle: "solid",
      borderColour: "#ff0000",
    };
    this.onChange = this.onChange.bind(this);
    this.borderRadiusStyle = this.borderRadiusStyle.bind(this);
    this.boxColour = this.boxColour.bind(this);
    this.borderColour = this.borderColour.bind(this);
    this.borderWidthStyle = this.borderWidthStyle.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: [e.target.value],
    });
    await this.borderWidthStyle(
      this.state.border_Width,
      this.state.borderStyle,
      this.state.borderColour
    );
    await this.borderRadiusStyle(
      //this.state.style,
      this.state.topLeftRadius,
      this.state.topRightRadius,
      this.state.bottomLeftRadius,
      this.state.bottomRightRadius
      //this.state.shadowColor
    );

    await this.boxColour(this.state.boxColour);
    await this.borderColour(this.state.borderColour);
  }

  boxColour(bg) {
    let b = document.querySelector(".box");
    b.style.backgroundColor = bg;
  }
  borderColour(border) {
    let b = document.querySelector(".box");
    b.style.borderColour = border;
  }
  borderRadiusStyle(
    //style,
    topLeftRadius,
    topRightRadius,
    bottomLeftRadius,
    bottomRightRadius
    //clr
  ) {
    //console.log(topLeftRadius, topRightRadius, bottomLeftRadius, bottomRightRadius, clr, op);
    let ele = document.querySelector(".box");
    //style = this.state.checked ? "inset" : "";
    //let ele=document.createElement('div')
    //ele.classList.add('box')
    ele.style.borderRadius = ` ${topLeftRadius}px ${topRightRadius}px ${bottomLeftRadius}px ${bottomRightRadius}px `;

    //ele.style.backgroundColor = boxColour;
    console.log(
      ` ${topLeftRadius}px ${topRightRadius}px ${bottomLeftRadius}px ${bottomRightRadius}px `
    );
    document.body.appendChild(ele);
  }
  borderWidthStyle(border_Width, borderStyle, borderColour) {
    console.log(border_Width, borderStyle, borderColour);
    let e = document.querySelector(".box");
    e.style.border = `${border_Width}px ${borderStyle} ${borderColour}`;
  }
  componentDidMount() {
    this.borderRadiusStyle(
      //this.state.style,
      this.state.topLeftRadius,
      this.state.topRightRadius,
      this.state.bottomLeftRadius,
      this.state.bottomRightRadius
      //this.state.shadowColor
    );
    this.boxColour(this.state.boxColour);
    this.borderWidthStyle(
      this.state.border_Width,
      this.state.borderStyle,
      this.state.borderColour
    );
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="topLeftRadius">Top Left Radius</label>
        <input
          type="range"
          min="0"
          max="200"
          value={this.state.topLeftRadius}
          onChange={this.onChange}
          name="topLeftRadius"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="200"
          value={this.state.topLeftRadius}
          onChange={this.onChange}
          name="topLeftRadius"
        />
        <br />
        <label htmlFor="topRightRadius">Top Right Radius</label>
        <input
          type="range"
          min="0"
          max="200"
          value={this.state.topRightRadius}
          onChange={this.onChange}
          name="topRightRadius"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="200"
          value={this.state.topRightRadius}
          onChange={this.onChange}
          name="topRightRadius"
        />
        <br />
        <label htmlFor="bottomLeftRadius">Bottom Left Radius</label>
        <input
          type="range"
          min="0"
          max="200"
          value={this.state.bottomLeftRadius}
          onChange={this.onChange}
          name="bottomLeftRadius"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="200"
          value={this.state.bottomLeftRadius}
          onChange={this.onChange}
          name="bottomLeftRadius"
        />
        <br />
        <label htmlFor="bottomRightRadius">Bottom Right Radius</label>
        <input
          type="range"
          min="0"
          max="200"
          value={this.state.bottomRightRadius}
          onChange={this.onChange}
          name="bottomRightRadius"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="200"
          value={this.state.bottomRightRadius}
          onChange={this.onChange}
          name="bottomRightRadius"
        />
        <br />
        <label htmlFor="border_Width">Border Width</label>
        <input
          type="range"
          min="0"
          max="200"
          value={this.state.border_Width}
          onChange={this.onChange}
          name="border_Width"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="200"
          value={this.state.border_Width}
          onChange={this.onChange}
          name="border_Width"
        />
        <br />
        <p></p>
        {/*<label htmlFor="shadowColor">shadow color</label>
        <input
          type="color"
          name="shadowColor"
          onChange={this.onChange}
          value={this.state.shadowColor}
        />
        <p></p>*/}
        <label htmlFor="boxColour">box color</label>
        <input
          type="color"
          name="boxColour"
          onChange={this.onChange}
          value={this.state.boxColour}
        />
        <p></p>
        <label htmlFor="borderColour">Border color</label>
        <input
          type="color"
          name="borderColour"
          onChange={this.onChange}
          value={this.state.borderColour}
        />
        <p></p>
        {/*<input
          type="checkbox"
          name="style"
          checked={this.state.checked}
          onChange={this.handleChange}
          value={this.state.style}
        ></input>
        <label htmlFor="style">Inset</label>*/}
        <div className="box"></div>
        <div>
          box-Radius:&nbsp;
          {this.state.topLeftRadius}px {this.state.topRightRadius}px{" "}
          {this.state.bottomLeftRadius}px {this.state.bottomRightRadius}
          px;
        </div>
        <div>
          -webkit-box-Radius:&nbsp;
          {this.state.topLeftRadius}px {this.state.topRightRadius}px{" "}
          {this.state.bottomLeftRadius}px {this.state.bottomRightRadius}
          px;
        </div>
        <div>
          -moz-box-Radius:&nbsp;
          {this.state.topLeftRadius}px {this.state.topRightRadius}px{" "}
          {this.state.bottomLeftRadius}px {this.state.bottomRightRadius}
          px;
        </div>
        <div>
          border:&nbsp;
          {this.state.border_Width}px {this.state.borderStyle}{" "}
          {this.state.borderColour};
        </div>
      </div>
    );
  }
}

export default BorderRadius;
