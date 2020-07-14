import React, { Component } from "react";
import "../Styles/TextIndent.css";

class TextIndent extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Text_Indent: "0",
      unit: "px",
    };
    this.onChange = this.onChange.bind(this);
    this.Text_IndentStyle = this.Text_IndentStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.Text_IndentStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.Text_IndentStyle();
  }

  Text_IndentStyle() {
    let e = document.querySelector(".TextIndent");
    e.style.textIndent = `${parseInt(this.state.Text_Indent)}${
      this.state.unit
    }`;
    console.log(this.state.Text_Indent, this.state.unit);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.Text_IndentStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="Text_Indent">TextIndent</label>
        <input
          type="range"
          min="0"
          max="200"
          step="1"
          value={this.state.Text_Indent}
          onChange={this.onChange}
          name="Text_Indent"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="200"
          step="1"
          value={this.state.Text_Indent}
          onChange={this.onChange}
          name="Text_Indent"
        />
        <br />
        <label htmlFor="value">unit</label>&nbsp;
        <select value={this.state.unit} name="unit" onChange={this.onSelect}>
          <option value="px">px </option>
          <option value="cm">cm</option>
          <option value="%">%</option>
          <option value="em">em</option>
        </select>
        <p></p>
        <div className="TextIndent">
          Lorcm ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
          consequat dui, et luctus quam. Aliquam magna libero, sodales non eros
          nec, vestibulum sollicitudin leo. Quisque sed erat lorcm. Aliquam
          interdum ante purus, a blandit nunc placerat et. Proin tristique ante
          tincidunt lacus dictum imperdiet. Quisque libero mi, molestie et
          suscipit eget, convallis a ipsum.
        </div>
        <div>
          {" "}
          text-indent = {this.state.Text_Indent}
          {this.state.unit} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default TextIndent;
