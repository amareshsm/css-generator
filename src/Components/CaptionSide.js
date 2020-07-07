import React, { Component } from "react";
import "../Styles/CaptionSide.css";

class CaptionSide extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Caption_Side: "bottom",
    };
    this.onChange = this.onChange.bind(this);
    this.CaptionSideStyle = this.CaptionSideStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.CaptionSideStyle();
  }

  async onSelect(e) {
    await this.setState({
      Caption_Side: [e.target.value],
    });
    await this.CaptionSideStyle();
  }

  CaptionSideStyle() {
    let e = document.querySelector(".CaptionSide");
    e.style.captionSide = `${this.state.Caption_Side}`;
    console.log(this.state.Caption_Side);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.CaptionSideStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">Caption_Side</label>
        <select
          value={this.state.Caption_Side}
          name="Caption_Side"
          onChange={this.onSelect}
        >
          <option value="top">top </option>
          <option value="bottom">bottom</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <table className="CaptionSide">
          <caption>Table 1.1</caption>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Harry Potter</td>
              <td>JK Rowling</td>
            </tr>
            <tr>
              <td>Immortals of Meluha</td>
              <td>Amish Tripathi</td>
            </tr>
            <tr>
              <td>Looking for Alaska</td>
              <td>John Green</td>
            </tr>
          </tbody>
        </table>
        <div> caption-side = {this.state.Caption_Side} ;</div>
        <p></p>
      </div>
    );
  }
}

export default CaptionSide;
