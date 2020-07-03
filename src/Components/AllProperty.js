import React, { Component } from "react";
import "../Styles/AllProperty.css";

class AllProperty extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      All_Property: "",
    };
    this.onChange = this.onChange.bind(this);
    this.AllPropertyStyle = this.AllPropertyStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.AllPropertyStyle();
  }

  async onSelect(e) {
    await this.setState({
      All_Property: [e.target.value],
    });
    await this.AllPropertyStyle();
  }

  AllPropertyStyle() {
    let e = document.querySelector(".AllProperty");
    e.style.all = `${this.state.All_Property}`;
    console.log(this.state.All_Property);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.AllPropertyStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">Word Wrap</label>&nbsp;
        <select
          value={this.state.All_Property}
          name="All_Property"
          onChange={this.onSelect}
        >
          <option value="">None</option>
          <option value="unset">unset </option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="AllProperty">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div> word-wrap = {this.state.All_Property} ;</div>
        <p></p>
      </div>
    );
  }
}

export default AllProperty;
