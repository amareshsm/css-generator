import React, { Component } from "react";
import "../Styles/Visibility.css";

class Visibility extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Visibility: "visible",
    };
    this.onChange = this.onChange.bind(this);
    this.VisibilityStyle = this.VisibilityStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.VisibilityStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.VisibilityStyle();
  }

  async onSelect(e) {
    await this.setState({
      Visibility: [e.target.value],
    });
    await this.VisibilityStyle();
  }

  VisibilityStyle() {
    const { Visibility } = this.state;
    let e = document.querySelector(".Visibility");
    e.style.visibility = `${Visibility}`;
    console.log(Visibility);
    document.body.appendChild(e);
  }

  render() {
    const { Visibility } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Visibility</label>&nbsp;
        <select value={Visibility} name="Visibility" onChange={this.onSelect}>
          <option value="visible">visible </option>
          <option value="hidden">hidden</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div>
          <p className="Visibility">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl
            nunc mi ipsum faucibus. Eu sem integer vitae justo eget magna
            fermentum. Nisl rhoncus mattis rhoncus urna neque. Integer feugiat
            scelerisque varius morbi enim nunc faucibus.
          </p>
        </div>
        <div> visibility = {Visibility} ;</div>
        <p></p>
      </div>
    );
  }
}

export default Visibility;
