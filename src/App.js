import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route } from "react-router-dom";

class App extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      style: "",
      hh: "0",
      vh: "0",
      br: "15",
      sr: "5",
      cp: "#80bfff",
      bc: "#0080ff",
      checked: false,
    };
    this.onChange = this.onChange.bind(this);
    this.boxStyle = this.boxStyle.bind(this);
    this.bc = this.bc.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: [e.target.value],
    });
   await  this.boxStyle(
       this.state.style,
        this.state.hh,
       this.state.vh,
       this.state.br,
       this.state.sr,
       this.state.cp
    );
  await this.bc(this.state.bc);
  }

  async handleChange() {
    await this.setState({
      checked: !this.state.checked,
    });    
    await  this.boxStyle(
      this.state.style,
       this.state.hh,
      this.state.vh,
      this.state.br,
      this.state.sr,
      this.state.cp
   );

  }

  bc(bg) {
    let b = document.querySelector(".box");
    b.style.backgroundColor = bg;
  }
   boxStyle(style, hh, vh, br, sr, clr) {
    //console.log(hh, vh, br, sr, clr, op);
    let ele =  document.querySelector(".box");
    style = this.state.checked ? "inset" : "";
    //let ele=document.createElement('div')
    //ele.classList.add('box')
    ele.style.boxShadow =  `${style} ${hh}px ${vh}px ${br}px ${sr}px ${clr} `;
    
    //ele.style.backgroundColor = bc;
    console.log(`${style} ${hh}px ${vh}px ${br}px ${sr}px ${clr}`);
   document.body.appendChild(ele);
  }


   componentDidMount(){
   this.boxStyle(
      this.state.style,
       this.state.hh,
      this.state.vh,
      this.state.br,
      this.state.sr,
      this.state.cp
   );
   this.bc(this.state.bc);
   }




  render() {
    return (
      <div className="App">
        <label htmlFor="hh">Horizontal Height</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={this.state.hh}
          onChange={this.onChange}
          name="hh"
        />
        <label>{this.state.hh}</label>

        <label htmlFor="vh">Vertical Height</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={this.state.vh}
          onChange={this.onChange}
          name="vh"
        />

        <label htmlFor="br">Blur Radius</label>
        <input
          type="range"
          min="0"
          max="150"
          value={this.state.br}
          onChange={this.onChange}
          name="br"
        />

        <label htmlFor="sr">Spread Radius</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={this.state.sr}
          onChange={this.onChange}
          name="sr"
        />
        <p></p>
        <label htmlFor="cp">shadow color</label>
        <input
          type="color"
          name="cp"
          onChange={this.onChange}
          value={this.state.cp}
        />
        <p></p>
        <label htmlFor="bc">box color</label>
        <input
          type="color"
          name="bc"
          onChange={this.onChange}
          value={this.state.bc}
        />
        <p></p>

        <input
          type="checkbox"
          name="style"
          checked={this.state.checked}
          onChange={this.handleChange}
          value={this.state.style}
        
        ></input>
        <label  htmlFor="style">Inset</label>




        <div className="box"></div>
        <div>
          box-shadow:&nbsp;
          {this.state.checked ? "inset" : ""}
          &nbsp;
          {this.state.hh}px {this.state.vh}px {this.state.br}px {this.state.sr}
          px {this.state.cp}
        </div>
      </div>
    );
  }
}

export default App;
