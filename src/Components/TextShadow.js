import React, { Component } from "react";

class TextShadow extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      hShadow: "5",
      vShadow: "2",
      blurRadius: "3",
      shadowColor: "#0000ff",
      textColour: "#9dff9d",
    };
    this.onChange = this.onChange.bind(this);
    this.textColour = this.textColour.bind(this);
    this.textStyle = this.textStyle.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: [e.target.value],
    });
    await this.textStyle(
      this.state.hShadow,
      this.state.vShadow,
      this.state.blurRadius,
      this.state.shadowColor
    );
    await this.textColour(this.state.textColour);
  }

  textColour(bg) {
    let b = document.querySelector(".text");
    b.style.color = bg;
  }
  textStyle(hShadow, vShadow, blurRadius, clr) {
    let ele = document.querySelector(".text");
    ele.style.textShadow = `${hShadow}px ${vShadow}px ${blurRadius}px ${clr} `;
    console.log(` ${hShadow}px ${vShadow}px ${blurRadius}px ${clr}`);
    document.body.appendChild(ele);
  }

  componentDidMount() {
    this.textStyle(
      this.state.hShadow,
      this.state.vShadow,
      this.state.blurRadius,
      this.state.shadowColor
    );
    this.textColour(this.state.textColour);
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="hShadow">H-Shadow</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={this.state.hShadow}
          onChange={this.onChange}
          name="hShadow"
        />
        &nbsp;
        <input
          type="number"
          min="-100"
          max="100"
          value={this.state.hShadow}
          onChange={this.onChange}
          name="hShadow"
        />
        <br />
        <label htmlFor="vShadow">V-Shadow</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={this.state.vShadow}
          onChange={this.onChange}
          name="vShadow"
        />
        &nbsp;
        <input
          type="number"
          min="-100"
          max="100"
          value={this.state.vShadow}
          onChange={this.onChange}
          name="vShadow"
        />
        <br />
        <label htmlFor="blurRadius">Blur Radius</label>
        <input
          type="range"
          min="0"
          max="150"
          value={this.state.blurRadius}
          onChange={this.onChange}
          name="blurRadius"
        />
        &nbsp;
        <input
          type="number"
          min="-100"
          max="100"
          value={this.state.blurRadius}
          onChange={this.onChange}
          name="blurRadius"
        />
        <br />
        <label htmlFor="shadowColor">shadow color</label>
        <input
          type="color"
          name="shadowColor"
          onChange={this.onChange}
          value={this.state.shadowColor}
        />
        &nbsp;
        <input
          type="text"
          value={this.state.shadowColor}
          onChange={this.onChange}
          name="shadowColor"
        />
        <br />
        <label htmlFor="textColour">Text color</label>
        <input
          type="color"
          name="textColour"
          onChange={this.onChange}
          value={this.state.textColour}
        />
        &nbsp;
        <input
          type="text"
          value={this.state.textColour}
          onChange={this.onChange}
          name="textColour"
        />
        <br></br>
        <div className="text">
          <br></br>
          <br></br>
          <h1>&nbsp;&nbsp;Text Shadow</h1>
        </div>
        <div>
          text-shadow:&nbsp;
          {this.state.hShadow}px {this.state.vShadow}px {this.state.blurRadius}
          px {this.state.shadowColor};
        </div>
      </div>
    );
  }
}

export default TextShadow;
