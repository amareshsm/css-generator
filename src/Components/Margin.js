import React, { Component } from "react";
import "../Styles/Margin.css";

class Margin extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      marginTop: "5",
      marginRight: "5",
      marginBottom: "5",
      marginLeft: "5",
      paddingTop: "5",
      paddingRight: "5",
      paddingBottom: "5",
      paddingLeft: "5",
      boxColour: "#ff80c0",
    };
    this.onChange = this.onChange.bind(this);
    this.marginStyle = this.marginStyle.bind(this);
    this.paddingStyle = this.paddingStyle.bind(this);
    this.boxColour = this.boxColour.bind(this);
  }

  componentDidMount() {
    const {
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginTop,
    } = this.state;
    this.paddingStyle(paddingTop, paddingRight, paddingBottom, paddingLeft);
    this.marginStyle(marginTop, marginRight, marginBottom, marginLeft);
    this.boxColour(this.state.boxColour);
  }
  async onChange(e) {
    const {
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginTop,
    } = this.state;
    await this.setState({
      [e.target.name]: [e.target.value],
    });
    await this.marginStyle(marginTop, marginRight, marginBottom, marginLeft);
    await this.paddingStyle(
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft
    );
    await this.boxColour(this.state.boxColour);
  }

  boxColour(bg) {
    let b = document.querySelector(".box-margin");
    b.style.backgroundColor = bg;
  }
  marginStyle(marginTop, marginRight, marginBottom, marginLeft) {
    //const { marginRight, marginBottom, marginLeft, marginTop } = this.state;
    let ele = document.querySelector(".box-margin");
    ele.style.margin = `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `;
    document.body.appendChild(ele);
  }
  paddingStyle(paddingTop, paddingRight, paddingBottom, paddingLeft) {
    //const { paddingBottom, paddingLeft, paddingRight, paddingTop } = this.state;
    let ele = document.querySelector(".box-margin");
    ele.style.padding = `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `;
    document.body.appendChild(ele);
  }

  render() {
    const {
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginTop,
    } = this.state;
    return (
      <div className="App">
        <label htmlFor="marginTop">Margin Top</label>
        <input
          type="range"
          min="0"
          max="100"
          value={marginTop}
          onChange={this.onChange}
          name="marginTop"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={marginTop}
          onChange={this.onChange}
          name="marginTop"
        />
        <br />
        <label htmlFor="marginBottom">Margin Bottom</label>
        <input
          type="range"
          min="0"
          max="100"
          value={marginBottom}
          onChange={this.onChange}
          name="marginBottom"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={marginBottom}
          onChange={this.onChange}
          name="marginBottom"
        />
        <br />
        <label htmlFor="marginRight">Margin Right</label>
        <input
          type="range"
          min="0"
          max="100"
          value={marginRight}
          onChange={this.onChange}
          name="marginRight"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={marginRight}
          onChange={this.onChange}
          name="marginRight"
        />
        <br />
        <label htmlFor="marginLeft">Margin Left</label>
        <input
          type="range"
          min="0"
          max="100"
          value={marginLeft}
          onChange={this.onChange}
          name="marginLeft"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={marginLeft}
          onChange={this.onChange}
          name="marginLeft"
        />
        <br />
        <label htmlFor="paddingTop">Padding Top</label>
        <input
          type="range"
          min="0"
          max="100"
          value={paddingTop}
          onChange={this.onChange}
          name="paddingTop"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={paddingTop}
          onChange={this.onChange}
          name="paddingTop"
        />
        <br />
        <label htmlFor="paddingBottom">Padding Bottom</label>
        <input
          type="range"
          min="0"
          max="100"
          value={paddingBottom}
          onChange={this.onChange}
          name="paddingBottom"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={paddingBottom}
          onChange={this.onChange}
          name="paddingBottom"
        />
        <br />
        <label htmlFor="paddingRight">Padding Right</label>
        <input
          type="range"
          min="0"
          max="100"
          value={paddingRight}
          onChange={this.onChange}
          name="paddingRight"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={paddingRight}
          onChange={this.onChange}
          name="paddingRight"
        />
        <br />
        <label htmlFor="paddingLeft">Padding Left</label>
        <input
          type="range"
          min="0"
          max="100"
          value={paddingLeft}
          onChange={this.onChange}
          name="paddingLeft"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          value={paddingLeft}
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
        <div>
          margin: &nbsp; {marginTop}px {marginRight}px {marginBottom}px{" "}
          {marginLeft}px;
          <br></br>
          padding: &nbsp; {paddingTop}px {paddingRight}px {paddingBottom}px{" "}
          {paddingLeft}px;
        </div>
        <br></br>
        <div className="box-margin"> Hellooo </div>
      </div>
    );
  }
}

export default Margin;
