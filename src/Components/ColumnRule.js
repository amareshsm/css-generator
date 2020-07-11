import React, { Component } from "react";
import "../Styles/ColumnRule.css";

class ColumnRule extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      ColumnRule_width: "2",
      ColumnRule_style: "solid",
      ColumnRule_colour: "#88afd7",
      ColumnRule_offset: "5",
    };
    this.onChange = this.onChange.bind(this);
    this.ColumnRuleStyle = this.ColumnRuleStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.ColumnRuleStyle();
  }

  async onSelect(e) {
    await this.setState({
      ColumnRule_width: [e.target.value],
    });
    await this.ColumnRuleStyle();
  }

  ColumnRuleStyle() {
    let e = document.querySelector(".ColumnRule");
    e.style.columnRule = `${this.state.ColumnRule_width}px ${this.state.ColumnRule_style} ${this.state.ColumnRule_colour}`;
    console.log(this.state.ColumnRule);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.ColumnRuleStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">ColumnRule_width</label>
        &nbsp;
        <input
          type="range"
          min="0"
          max="25"
          value={this.state.ColumnRule_width}
          onChange={this.onChange}
          name="ColumnRule_width"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="25"
          value={this.state.ColumnRule_width}
          onChange={this.onChange}
          name="ColumnRule_width"
        />
        &nbsp;
        <p></p>
        <label htmlFor="value">ColumnRule_style</label>
        <select
          value={this.state.ColumnRule_style}
          name="ColumnRule_style"
          onChange={this.onChange}
        >
          <option value="none">None</option>
          <option value="hidden">Hidden</option>
          <option value="solid">solid </option>
          <option value="dotted">dotted</option>
          <option value="dashed">dashed</option>
          <option value="ridge">ridge</option>
          <option value="inset">inset</option>
          <option value="outset">outset</option>
          <option value="double">Double</option>
          <option value="groove">Groove</option>
          <option value="outset">outset</option>
        </select>
        &nbsp;
        <p></p>
        <label htmlFor="ColumnRule_colour">ColumnRule_color</label>
        <input
          type="color"
          name="ColumnRule_colour"
          onChange={this.onChange}
          value={this.state.ColumnRule_colour}
        />
        &nbsp;
        <input
          type="text"
          value={this.state.ColumnRule_colour}
          onChange={this.onChange}
          name="ColumnRule_colour"
        />
        <br />
        <div className="ColumnRule">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
          consequat dui, et luctus quam. Aliquam magna libero, sodales non eros
          nec, vestibulum sollicitudin leo. Quisque sed erat lorem. Aliquam
          interdum ante purus, a blandit nunc placerat et. Proin tristique ante
          tincidunt lacus dictum imperdiet. Quisque libero mi, molestie
          etsuscipbhvj it eget, convallis a ipsum.
        </div>
        <div>
          {" "}
          column-rule = {this.state.ColumnRule_width}px{" "}
          {this.state.ColumnRule_style} {this.state.ColumnRule_colour} ;
        </div>
        <div>
          -webkit-column-rule = {this.state.ColumnRule_width}px{" "}
          {this.state.ColumnRule_style} {this.state.ColumnRule_colour} ;
        </div>
        <div>
          -moz-column-rule = {this.state.ColumnRule_width}px{" "}
          {this.state.ColumnRule_style} {this.state.ColumnRule_colour} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default ColumnRule;
