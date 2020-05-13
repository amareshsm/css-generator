import React, { Component } from "react";
import "../Styles/Margin.css";

class Margin extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      marginTop: "",
      marginRight: "",
      marginBottom: "",
      marginLeft: "",
      paddingTop: "",
      paddingRight: "",
      paddingBottom: "",
      paddingLeft: "",
    };
    this.onChange = this.onChange.bind(this);
    this.marginStyle = this.marginStyle.bind(this);
    this.paddingStyle = this.paddingStyle.bind(this);
    this.boxColour = this.boxColour.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: [e.target.value],
    });
    await this.marginStyle(
      this.state.marginTop,
      this.state.marginRight,
      this.state.marginBottom,
      this.state.marginLeft
    );
    await this.paddingStyle(
      this.state.paddingTop,
      this.state.paddingRight,
      this.state.paddingBottom,
      this.state.paddingLeft
    );
    await this.boxColour(this.state.boxColour);
  }

  boxColour(bg) {
    let b = document.querySelector(".box");
    b.style.backgroundColor = bg;
  }
  marginStyle(marginTop, marginRight, marginBottom, marginLeft) {
    let ele = document.querySelector(".box");
    ele.style.margin = `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `;
    document.body.appendChild(ele);
  }
  paddingStyle(paddingTop, paddingRight, paddingBottom, paddingLeft) {
    let ele = document.querySelector(".box");
    ele.style.padding = `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `;
    document.body.appendChild(ele);
  }

  componentDidMount() {
    this.paddingStyle(
      this.state.paddingTop,
      this.state.paddingRight,
      this.state.paddingBottom,
      this.state.paddingLeft
    );
    this.marginStyle(
      this.state.marginTop,
      this.state.marginRight,
      this.state.marginBottom,
      this.state.marginLeft
    );
    this.boxColour(this.state.boxColour);
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="marginTop">Margin Top</label>
        <input
          type="range"
          min="0"
          max="100"
          value={this.state.marginTop}
          onChange={this.onChange}
          name="marginTop"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={this.state.marginTop}
          onChange={this.onChange}
          name="marginTop"
        />
        <br />
        <label htmlFor="marginBottom">Margin Bottom</label>
        <input
          type="range"
          min="0"
          max="100"
          value={this.state.marginBottom}
          onChange={this.onChange}
          name="marginBottom"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={this.state.marginBottom}
          onChange={this.onChange}
          name="marginBottom"
        />
        <br />
        <label htmlFor="marginRight">Margin Right</label>
        <input
          type="range"
          min="0"
          max="100"
          value={this.state.marginRight}
          onChange={this.onChange}
          name="marginRight"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={this.state.marginRight}
          onChange={this.onChange}
          name="marginRight"
        />
        <br />
        <label htmlFor="marginLeft">Margin Left</label>
        <input
          type="range"
          min="0"
          max="100"
          value={this.state.marginLeft}
          onChange={this.onChange}
          name="marginLeft"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={this.state.marginLeft}
          onChange={this.onChange}
          name="marginLeft"
        />
        <br />
        <label htmlFor="paddingTop">Padding Top</label>
        <input
          type="range"
          min="0"
          max="100"
          value={this.state.paddingTop}
          onChange={this.onChange}
          name="paddingTop"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={this.state.paddingTop}
          onChange={this.onChange}
          name="paddingTop"
        />
        <br />
        <label htmlFor="paddingBottom">Padding Bottom</label>
        <input
          type="range"
          min="0"
          max="100"
          value={this.state.paddingBottom}
          onChange={this.onChange}
          name="paddingBottom"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={this.state.paddingBottom}
          onChange={this.onChange}
          name="paddingBottom"
        />
        <br />
        <label htmlFor="paddingRight">Padding Right</label>
        <input
          type="range"
          min="0"
          max="100"
          value={this.state.paddingRight}
          onChange={this.onChange}
          name="paddingRight"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={this.state.paddingRight}
          onChange={this.onChange}
          name="paddingRight"
        />
        <br />
        <label htmlFor="paddingLeft">Padding Left</label>
        <input
          type="range"
          min="0"
          max="100"
          value={this.state.paddingLeft}
          onChange={this.onChange}
          name="paddingLeft"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={this.state.paddingLeft}
          onChange={this.onChange}
          name="paddingLeft"
        />
        <br />
        <br />
        <label htmlFor="boxColour">box color</label>
        <input
          type="color"
          name="boxColour"
          onChange={this.onChange}
          value={this.state.boxColour}
        />
        &nbsp;
        <input
          type="text"
          value={this.state.boxColour}
          onChange={this.onChange}
          name="boxColor"
        />
        <br />
        {/*<div>
          padding : &nbsp; {paddingTop}px {paddingRight}px {paddingBottom}px{" "}
          {paddingLeft}px
        </div>
        <br></br>
        <div>
          margin : &nbsp; {marginTop}px {marginRight}px {marginBottom}px{" "}
          {marginLeft}px
        </div>*/}
        <br></br>
        <div className="box"> Hellooo </div>
      </div>
    );
  }
}

export default Margin;
