import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import BoxShadow from "./Components/BoxShadow";
import BorderRadius from "./Components/BorderRadius.js";
import TextShadow from "./Components/TextShadow";
import FlexBoxGenerator from "./Components/FlexBoxGenerator";
import Margin from "./Components/Margin";
import LineHeight from "./Components/LineHeight";
import FontStyle from "./Components/FontStyle";
import LetterSpacing from "./Components/LetterSpacing";
import TextTransform from "./Components/TextTransform";
import TextDecoration from "./Components/TextDecoration";
import Outline from "./Components/Outline";
import TextAlign from "./Components/TextAlign";
import ListStyle from "./Components/ListStyle";
import WritingMode from "./Components/WritingMode";
import WordWrap from "./Components/WordWrap";
import WordBreak from "./Components/WordBreak";
import TextOverflow from "./Components/TextOverflow";
import CssFloat from "./Components/CssFloat";
import Overflow from "./Components/Overflow";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";


class App extends Component {
  componentDidMount() {
// Mobile
var menulist = document.getElementById("menu-list");
var sublist = document.getElementById('sub-menu');

document.querySelector('.mobile-menu-open').addEventListener('click',openMenu);

function openMenu(){
  showAndHide(menulist);
}
document.getElementById('dropdown').onclick = function(){
  showAndHide(sublist);
}

function showAndHide(obj){
  if(window.innerWidth > 799) return;
  if(obj.classList.contains('shown')){
    obj.classList.add('hidden');
    obj.classList.remove('shown');
    return;
  }
  obj.classList.remove('hidden');
  obj.classList.add('shown');
}



//Resize the window - change desktop or mobile version
document.body.onresize = function(){
  if(window.innerWidth > 799){
    menulist.classList.remove('hidden');
    menulist.classList.remove('shown');
    sublist.classList.remove('hidden');
    sublist.classList.remove('shown');
  }
}
  }




  render() {
    return (
      <>
    
<div class="navbar-wrapper">
  <span class="mobile-menu-open" id="menu-open">
    <hr /><hr /><hr />
  </span>
  <ul class="navbar-menu-list" id="menu-list">

    <li><span>  <a href="/">Home</a></span></li>
    <li><span>CSS </span></li>
    <li id="dropdown">
      <span>DROP DOWN</span>
      <ul class="sub-menu" id="sub-menu">
        <li>sub menu 1</li>
        <li>sub menu 2</li>
        <li>sub menu 3</li>
      </ul>
    </li>
    <li><span>Contact</span></li>
  </ul>
</div>



                  <ul className="nav-dropdown">
                    <li>
                      <a href="CssFloat">CssFloat</a>
                    </li>
                    <li>
                      <a href="TextOverflow">TextOverflow</a>
                    </li>
                    <li>
                      <a href="WordWrap">WordWrap</a>
                    </li>
                    <li>
                      <a href="Overflow">Overflow</a>
                    </li>
                    <li>
                      <a href="BoxShadow">BoxShadow</a>
                    </li>
                    <li>
                      <a href="BorderRadius">BorderRadius</a>
                    </li>
                    <li>
                      <a href="TextShadow">TextShadow</a>
                    </li>
                    <li>
                      <a href="FlexBoxGenerator">FlexBoxGenerator</a>
                    </li>
                    <li>
                      <a href="Margin">Margin and Padding</a>
                    </li>
                    <li>
                      <a href="LineHeight">LineHeight</a>
                    </li>
                    <li>
                      <a href="FontStyle">FontStyle</a>
                    </li>
                    <li>
                      <a href="LetterSpacing">LetterSpacing</a>
                    </li>
                    <li>
                      <a href="TextTransform">TextTransform</a>
                    </li>
                    <li>
                      <a href="TextDecoration">TextDecoration</a>
                    </li>
                    <li>
                      <a href="TextAlign">TextAlign</a>
                    </li>
                    <li>
                      <a href="Outline">Outline</a>
                    </li>
                    <li>
                      <a href="ListStyle">ListStyle</a>
                    </li>
                    <li>
                      <a href="WritingMode">WritingMode</a>
                    </li>
                    <li>
                      <a href="WordBreak">WordBreak</a>
                    </li>
                  </ul>


        <BrowserRouter>
          <Switch>
            {/* <Route path="/" component={Home} exact />*/}
            <Route path="/BoxShadow" component={BoxShadow} />
            <Route path="/BorderRadius" component={BorderRadius} />
            <Route path="/TextShadow" component={TextShadow} />
            <Route path="/FlexBoxGenerator" component={FlexBoxGenerator} />
            <Route path="/Margin" component={Margin} />
            <Route path="/CssFloat" component={CssFloat} />
            <Route path="/LineHeight" component={LineHeight} />
            <Route path="/FontStyle" component={FontStyle} />
            <Route path="/LetterSpacing" component={LetterSpacing} />
            <Route path="/TextTransform" component={TextTransform} />
            <Route path="/TextDecoration" component={TextDecoration} />
            <Route path="/TextAlign" component={TextAlign} />
            <Route path="/Outline" component={Outline} />
            <Route path="/ListStyle" component={ListStyle} />
            <Route path="/WritingMode" component={WritingMode} />
            <Route path="/WordBreak" component={WordBreak} />
            <Route path="/TextOverflow" component={TextOverflow} />
            <Route path="/Overflow" component={Overflow} />
            <Route path="/WordWrap" component={WordWrap} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
