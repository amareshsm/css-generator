import React, { Component } from "react";
import "../Styles/AlignContent.css";

class AlignContent extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Align_Content: "stretch",
    };
    this.onChange = this.onChange.bind(this);
    this.AlignContentStyle = this.AlignContentStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.AlignContentStyle();
  }

  async onSelect(e) {
    await this.setState({
      Align_Content: [e.target.value],
    });
    await this.AlignContentStyle();
  }

  AlignContentStyle() {
    let e = document.querySelector(".AlignContent");
    e.style.alignContent = `${this.state.Align_Content}`;
    console.log(this.state.Align_Content);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.AlignContentStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">Align_Content</label>
        <select
          value={this.state.Align_Content}
          name="Align_Content"
          onChange={this.onSelect}
        >
          <option value="stretch">stretch </option>
          <option value="center">center</option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="initial">Initial</option>
        </select>
        <p></p>
        <div className="AlignContent">
          <div id="one"></div>
          <div id="three"></div>
        </div>
        <div> align-content = {this.state.Align_Content} ;</div>
        <div> -ms-flex-line-pack = {this.state.Align_Content} ;</div>
        <p></p>
      </div>
    );
  }
}

export default AlignContent;
