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
import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  componentDidMount() {
    $(function () {
      // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $("nav ul li a:not(:only-child)").click(function (e) {
        $(this).siblings(".nav-dropdown").toggle();
        // Close one dropdown when selecting another
        $(".nav-dropdown").not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $("html").click(function () {
        $(".nav-dropdown").hide();
      });
      // Toggle open and close nav styles on click
      $("#nav-toggle").click(function () {
        $("nav ul").slideToggle();
      });
      // Hamburger to X toggle
      $("#nav-toggle").on("click", function () {
        this.classList.toggle("active");
      });
    }); // end DOM ready
  }
  render() {
    return (
      <>
        <section className="navigation">
          <div className="nav-container">
            <div className="brand">
              <a href="#!">Logo</a>
            </div>
            <nav>
              <div className="nav-mobile">
                <a id="nav-toggle" href="#!">
                  <span />
                </a>
              </div>
              <ul className="nav-list">
                <li>
                  <a href="#!">Home</a>
                </li>
                <li>
                  <a href="#!">About</a>
                </li>
                <li>
                  <a href="#!">CSS </a>
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
                </li>
                <li>
                  <a href="#!">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>

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
