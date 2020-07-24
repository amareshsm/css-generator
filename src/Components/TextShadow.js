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

  componentDidMount() {
    const {
      hShadow,
      vShadow,
      blurRadius,
      shadowColor,
      textColour,
    } = this.state;
    this.textStyle(hShadow, vShadow, blurRadius, shadowColor);
    this.textColour(textColour);
  }

  async onChange(e) {
    const {
      hShadow,
      vShadow,
      blurRadius,
      shadowColor,
      textColour,
    } = this.state;
    await this.setState({
      [e.target.name]: [e.target.value],
    });
    await this.textStyle(hShadow, vShadow, blurRadius, shadowColor);
    await this.textColour(textColour);
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

  render() {
    const {
      hShadow,
      vShadow,
      blurRadius,
      shadowColor,
      textColour,
    } = this.state;
    return (
      <div className="App">
        <label htmlFor="hShadow">H-Shadow</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={hShadow}
          onChange={this.onChange}
          name="hShadow"
        />
        &nbsp;
        <input
          type="number"
          min="-100"
          max="100"
          value={hShadow}
          onChange={this.onChange}
          name="hShadow"
        />
        <br />
        <label htmlFor="vShadow">V-Shadow</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={vShadow}
          onChange={this.onChange}
          name="vShadow"
        />
        &nbsp;
        <input
          type="number"
          min="-100"
          max="100"
          value={vShadow}
          onChange={this.onChange}
          name="vShadow"
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
        <label htmlFor="textColour">Text color</label>
        <input
          type="color"
          name="textColour"
          onChange={this.onChange}
          value={textColour}
        />
        &nbsp;
        <input
          type="text"
          value={textColour}
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
          {hShadow}px {vShadow}px {blurRadius}
          px {shadowColor};
        </div>
      </div>
    );
  }
}

export default TextShadow;
