import React, { Component } from "react";
import "../Styles/BackfaceVisibility.css";

class BackfaceVisibility extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Backface_Visibility: "visible",
    };
    this.onChange = this.onChange.bind(this);
    this.BackfaceVisibilityStyle = this.BackfaceVisibilityStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.BackfaceVisibilityStyle();
  }

  async onSelect(e) {
    await this.setState({
      Backface_Visibility: [e.target.value],
    });
    await this.BackfaceVisibilityStyle();
  }

  BackfaceVisibilityStyle() {
    let e = document.querySelector(".BackfaceVisibility");
    e.style.backfaceVisibility = `${this.state.Backface_Visibility}`;
    console.log(this.state.Backface_Visibility);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.BackfaceVisibilityStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">Backface Visibility</label>&nbsp;
        <select
          value={this.state.Backface_Visibility}
          name="Backface_Visibility"
          onChange={this.onSelect}
        >
          <option value="visible">visible</option>
          <option value="hidden">hidden</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="BackfaceVisibility">Welcome</div>
        <div>
          <p>backface-visibility = {this.state.Backface_Visibility} ;</p>
          <p>
            -webkit-backface-visibility = {this.state.Backface_Visibility} ;
          </p>
          <p>-moz-backface-visibility = {this.state.Backface_Visibility} ;</p>
        </div>
        <p></p>
      </div>
    );
  }
}

export default BackfaceVisibility;
