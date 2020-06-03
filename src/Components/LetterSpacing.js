import React, { Component } from "react";
import "../Styles/LetterSpacing.css";

class LetterSpacing extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      letter_space: "5",
      unit: "px",
    };
    this.onChange = this.onChange.bind(this);
    this.letterSpacingStyle = this.letterSpacingStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.letterSpacingStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.letterSpacingStyle();
  }

  letterSpacingStyle() {
    let e = document.querySelector(".line");
    e.style.letterSpacing = `${parseInt(this.state.letter_space)}${
      this.state.unit
    }`;
    console.log(this.state.letter_space, this.state.unit);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.letterSpacingStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="letter_space">Letter Spacing</label>
        <input
          type="range"
          min="0"
          max="250"
          step="0.1"
          value={this.state.letter_space}
          onChange={this.onChange}
          name="letter_space"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="250"
          step="0.1"
          value={this.state.letter_space}
          onChange={this.onChange}
          name="letter_space"
        />
        <br />
        <label htmlFor="value">unit</label>
        <select value={this.state.unit} name="unit" onChange={this.onSelect}>
          <option value="px">px </option>
          <option value="em">em</option>
          <option value="%">percent</option>
          <option value="normal">normal</option>
        </select>
        <p></p>
        <div className="line">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div>
          {" "}
          letterSpacing = {this.state.letter_space}
          {this.state.unit} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default LetterSpacing;
