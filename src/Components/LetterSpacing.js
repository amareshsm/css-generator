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

  componentDidMount() {
    this.letterSpacingStyle();
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
    const { letter_space, unit } = this.state;
    let e = document.querySelector(".line");
    e.style.letterSpacing = `${parseInt(letter_space)}${unit}`;
    console.log(letter_space, unit);
    document.body.appendChild(e);
  }

  render() {
    const { letter_space, unit } = this.state;
    return (
      <div className="App">
        <label htmlFor="letter_space">Letter Spacing</label>
        <input
          type="range"
          min="0"
          max="250"
          step="0.1"
          value={letter_space}
          onChange={this.onChange}
          name="letter_space"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="250"
          step="0.1"
          value={letter_space}
          onChange={this.onChange}
          name="letter_space"
        />
        <br />
        <label htmlFor="value">unit</label>
        <select value={unit} name="unit" onChange={this.onSelect}>
          <option value="px">px </option>
          <option value="em">em</option>
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
          letterSpacing = {letter_space}
          {unit} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default LetterSpacing;
