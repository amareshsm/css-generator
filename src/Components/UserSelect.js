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

  componentDidMount() {
    this.UserSelectStyle();
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
    const { User_Select } = this.state;
    let e = document.querySelector(".UserSelect");
    e.style.userSelect = `${User_Select}`;
    console.log(User_Select);
    document.body.appendChild(e);
  }

  render() {
    const { User_Select } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">User Select</label>&nbsp;
        <select value={User_Select} name="User_Select" onChange={this.onSelect}>
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
        <div>
          {" "}
          user-select = {User_Select} ; <br />
          -webkit-user-select = {User_Select} ; <br />
          -moz-user-select = {User_Select} ; <br />
          -ms-user-select = {User_Select} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default UserSelect;
