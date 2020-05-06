import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route } from "react-router-dom";


class App extends Component {
   constructor(porps){
     super(porps);
     this.state={
       hh:"",
       vh:"",
       br:"",
       sr:"",
       cp:""
     }
     this.onChange=this.onChange.bind(this)
     this.boxStyle=this.boxStyle.bind(this)
   }


  onChange(e){

    this.setState({
      [e.target.name]:[e.target.value]
    })
    this.boxStyle(this.state.hh,this.state.vh,this.state.br,this.state.sr,this.state.cp);
  }


  boxStyle(hh,vh,br,sr,asdfsadfsadfsadfasd){
    console.log(hh,vh,br,sr,asdfsadfsadfsadfasd);
    let ele=document.querySelector('.box');
    //let ele=document.createElement('div')
    //ele.classList.add('box')
    ele.style.boxShadow=`${hh}px ${vh}px ${br}px ${sr}px ${asdfsadfsadfsadfasd}`;
    ele.style.backgroundColor=asdfsadfsadfsadfasd;
    console.log(`${hh}px ${vh}px ${br}px ${sr}px red`);
    document.body.appendChild(ele);
    
  }


  render(){
  return (
    <div className="App">
   
   <label htmlFor="hh">Horizontal Height</label>
  <input type="range" min="-50"  max="50" value={this.state.hh} onChange={this.onChange} name="hh" />
  <label >{this.state.hh}</label>

  
  <label htmlFor="vh">Vertical  Height</label>
  <input type="range" value={this.state.vh} onChange={this.onChange} name="vh" />

  <label htmlFor="br">Blur Radius</label>
  <input type="range" value={this.state.br} onChange={this.onChange} name="br" />
  
  <label htmlFor="sr">Spread Radius</label>
  <input type="range" value={this.state.sr}  onChange={this.onChange} name="sr" />


   <input type="color" name="cp" onChange={this.onChange} value={this.state.cp}/>
 <div className="box"></div>

    </div>
  
  
  );

}
}


export default App;
