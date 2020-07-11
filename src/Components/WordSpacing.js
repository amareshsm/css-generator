import React, { Component } from "react";
import "../Styles/WordSpacing.css";

class WordSpacing extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Word_space: "0",
      unit: "px",
    };
    this.onChange = this.onChange.bind(this);
    this.WordSpacingStyle = this.WordSpacingStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.WordSpacingStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.WordSpacingStyle();
  }

  WordSpacingStyle() {
    let e = document.querySelector(".Word");
    e.style.wordSpacing = `${parseInt(this.state.Word_space)}${
      this.state.unit
    }`;
    console.log(this.state.Word_space, this.state.unit);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.WordSpacingStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="Word_space">Word Spacing</label>
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={this.state.Word_space}
          onChange={this.onChange}
          name="Word_space"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="100"
          step="0.1"
          value={this.state.Word_space}
          onChange={this.onChange}
          name="Word_space"
        />
        <br />
        <label htmlFor="value">unit</label>&nbsp;
        <select value={this.state.unit} name="unit" onChange={this.onSelect}>
          <option value="px">px </option>
          <option value="cm">cm</option>
          <option value="pt">pt</option>
          <option value="em">em</option>
        </select>
        <p></p>
        <div className="Word">
          <p>
            Lorcm ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorcm.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div>
          {" "}
          word-spacing = {this.state.Word_space}
          {this.state.unit} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default WordSpacing;
