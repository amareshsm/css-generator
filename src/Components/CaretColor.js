import React, { Component } from "react";
//import "../Styles/CaretColor.css";

class CaretColor extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Caret_colour: "#88afd7",
    };
    this.onChange = this.onChange.bind(this);
    this.CaretColorStyle = this.CaretColorStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.CaretColorStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.CaretColorStyle();
  }

  async onSelect(e) {
    await this.setState({
      CaretColor_width: [e.target.value],
    });
    await this.CaretColorStyle();
  }

  CaretColorStyle= ()=> {
    const {Caret_colour} = this.state
    
    let e = document.querySelector(".CaretColor");
    e.style.caretColor = ` ${Caret_colour}`;
    console.log(CaretColor);
    document.body.appendChild(e);
  }



  render() {
    const {Caret_colour} = this.state
    return (
      <div className="App">
        <label htmlFor="Caret_colour">CaretColor_color</label> &nbsp;
        <input
          type="color"
          name="Caret_colour"
          onChange={this.onChange}
          value={Caret_colour}
        />
        <br />
        <input type="text" className="CaretColor"></input>
        &nbsp;
        <div>
          {" "}
          caret-color = {Caret_colour} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default CaretColor;
