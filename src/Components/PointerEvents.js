import React, { Component } from "react";
import "../Styles/PointerEvents.css";

class PointerEvents extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Pointer_Event: "none",
    };
    this.onChange = this.onChange.bind(this);
    this.PointerEventStyle = this.PointerEventStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.PointerEventStyle();
  }

  async onSelect(e) {
    await this.setState({
      Pointer_Event: [e.target.value],
    });
    await this.PointerEventStyle();
  }

  PointerEventStyle() {
    const { Pointer_Event } = this.state;
    let e = document.querySelector(".PointerEvents");
    e.style.pointerEvents = `${Pointer_Event}`;
    console.log(Pointer_Event);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.PointerEventStyle();
  }

  render() {
    const { Pointer_Event } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Pointer_Event</label>
        <select
          value={Pointer_Event}
          name="Pointer_Event"
          onChange={this.onSelect}
        >
          <option value="auto">auto </option>
          <option value="none">none</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="PointerEvents">
          <p>
            Welcome to <a href="PointerEvents">Pointer Events</a>
          </p>
        </div>
        <div> PointerEvents = {Pointer_Event} ;</div>
        <p></p>
      </div>
    );
  }
}

export default PointerEvents;
