import React, { Component } from "react";
import "../Styles/UserSelect.css";

class UserSelect extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      User_Select: "auto",
    };
    this.onChange = this.onChange.bind(this);
    this.UserSelectStyle = this.UserSelectStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.UserSelectStyle();
  }

  async onSelect(e) {
    await this.setState({
      User_Select: [e.target.value],
    });
    await this.UserSelectStyle();
  }

  UserSelectStyle() {
    let e = document.querySelector(".UserSelect");
    e.style.userSelect = `${this.state.User_Select}`;
    console.log(this.state.User_Select);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.UserSelectStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">User Select</label>&nbsp;
        <select
          value={this.state.User_Select}
          name="User_Select"
          onChange={this.onSelect}
        >
          <option value="auto">auto </option>
          <option value="none">none</option>
          <option value="text">text</option>
          <option value="all">all</option>
        </select>
        <p></p>
        <div>
          <p className="UserSelect">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl
            nunc mi ipsum faucibus. Eu sem integer vitae justo eget magna
            fermentum. Nisl rhoncus mattis rhoncus urna neque. Integer feugiat
            scelerisque varius morbi enim nunc faucibus.
          </p>
        </div>
        <div> user-select = {this.state.User_Select} ;</div>
        <div> -webkit-user-select = {this.state.User_Select} ;</div>
        <div> -moz-user-select = {this.state.User_Select} ;</div>
        <div> -ms-user-select = {this.state.User_Select} ;</div>
        <p></p>
      </div>
    );
  }
}

export default UserSelect;
