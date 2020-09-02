import React, { Component } from "react";
import "../Styles/BackgroundRepeat.css";

class BackgroundRepeat extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      BackgroundRepeat: "repeat",
    };
    this.onChange = this.onChange.bind(this);
    this.BackgroundRepeatStyle = this.BackgroundRepeatStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.BackgroundRepeatStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.BackgroundRepeatStyle();
  }

  async onSelect(e) {
    await this.setState({
      BackgroundRepeat: [e.target.value],
    });
    await this.BackgroundRepeatStyle();
  }

  BackgroundRepeatStyle() {
    const { BackgroundRepeat } = this.state;
    let e = document.querySelector(".BackgroundRepeat");
    e.style.backgroundRepeat = `${BackgroundRepeat}`;
    console.log(BackgroundRepeat);
    document.body.appendChild(e);
  }

  render() {
    const { BackgroundRepeat } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">BackgroundRepeat</label>&nbsp;
        <select
          value={BackgroundRepeat}
          name="BackgroundRepeat"
          onChange={this.onChange}
        >
          <option value="repeat">repeat </option>
          <option value="repeat-x">repeat-x</option>
          <option value="repeat-y">repeat-y</option>
          <option value="no-repeat">no-repeat</option>
          <option value="space">space</option>
          <option value="round">round</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="top">
          <div className="BackgroundRepeat"></div>
        </div>
        <div> background-repeat = {BackgroundRepeat} ;</div>
        <p></p>
      </div>
    );
  }
}

export default BackgroundRepeat;
