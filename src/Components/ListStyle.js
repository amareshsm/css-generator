import React, { Component } from "react";
import "../Styles/ListStyle.css";

class ListStyle extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      list_Style_type: "none",
      list_Style_position: "inside",
    };
    this.onChange = this.onChange.bind(this);
    this.listStyle = this.listStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.listStyle();
  }

  async onSelect(e) {
    await this.setState({
      list_Style_type: [e.target.value],
    });
    await this.listStyle();
  }

  listStyle() {
    let e = document.querySelector(".list");
    e.style.listStyle = `${this.state.list_Style_type}`;
    e.style.listStylePosition = `${this.state.list_Style_position}`;
    console.log(this.state.list_Style_type);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.listStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">list_Style_type</label>
        <select
          value={this.state.list_Style_type}
          name="list_Style_type"
          onChange={this.onSelect}
        >
          {" "}
          &nbsp;
          <option value="disc">Solid Circle </option>
          <option value="circle">Hollow Circle</option>
          <option value="square">Solid Square</option>
          <option value="decimal">Decimal</option>
          <option value="decimal-leading-zero">Decimal Leading Zero</option>
          <option value="lower-roman">Lower Roman</option>
          <option value="upper-roman">Upper Roman</option>
          <option value="lower-greek">Lower Greek</option>
          <option value="lower-latin">Lower Latin</option>
          <option value="upper-latin">Upper Latin</option>
          <option value="armenian">Armenian</option>
          <option value="georgian">Georgian</option>
          <option value="none">None</option>
          <option value="initial">Initial</option>
          <option value="inherit">Inherit</option>
        </select>
        <p></p>
        <label htmlFor="value">list_Style_position</label>
        <select
          value={this.state.list_Style_position}
          name="list_Style_position"
          onChange={this.onChange}
        >
          &nbsp;
          <option value="outside">Outside</option>
          <option value="inside">Inside</option>
          <option value="initial">Initial</option>
          <option value="inherit">Inherit</option>
        </select>
        <p></p>
        <div>
          <ul className="list">
            <li>Harry</li>
            <li>Ron</li>
            <li>Hermoine</li>
            <li>Sirius</li>
            <li>Ginny</li>
            <li>Hedwig</li>
          </ul>
        </div>
        <div> list-style-type = {this.state.list_Style_type} ;</div>
        <div> list-style-position = {this.state.list_Style_position} ;</div>
        <p></p>
      </div>
    );
  }
}

export default ListStyle;
