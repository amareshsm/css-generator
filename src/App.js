import React, { Component } from "react";
import "./App.css";
import Home from "./Pages/Home"
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
import Cursor from "./Components/Cursor";
import Outline from "./Components/Outline";
import TextAlign from "./Components/TextAlign";
import ListStyle from "./Components/ListStyle";
import WritingMode from "./Components/WritingMode";
import WordWrap from "./Components/WordWrap";
import WordBreak from "./Components/WordBreak";
import TextOverflow from "./Components/TextOverflow";
import CssFloat from "./Components/CssFloat";
import Overflow from "./Components/Overflow";
import BorderCollapse from "./Components/BorderCollapse";
import FontSize from "./Components/FontSize";
import AlignContent from "./Components/AlignContent";
import AllProperty from "./Components/AllProperty";
import BoxSizing from "./Components/BoxSizing";
import PointerEvents from "./Components/PointerEvents";
import CaptionSide from "./Components/CaptionSide";
import ColumnCount from "./Components/ColumnCount";
import Border from "./Components/Border";
import BorderBottom from "./Components/BorderBottom";
import BackgroundClip from "./Components/BackgroundClip";
import ColumnRule from "./Components/ColumnRule";
import WordSpacing from "./Components/WordSpacing";
import WhiteSpace from "./Components/WhiteSpace";
import Width from "./Components/Width";
import Visibility from "./Components/Visibility";
import UserSelect from "./Components/UserSelect";
import Top from "./Components/Top";
import TextIndent from "./Components/TextIndent";
import BackfaceVisibility from "./Components/BackfaceVisibility";
import Height from "./Components/Height";
import ColumnGap from "./Components/ColumnGap";
import EmptyCells from "./Components/EmptyCells";
import FontVariant from "./Components/FontVariant";
import FlexboxPlayground from "./Components/FlexboxPlayground";
import MaxHeight from "./Components/MaxHeight";
import MaxWidth from "./Components/MaxWidth";
import MinHeight from "./Components/MinHeight";
import TableLayout from "./Components/TableLayout";
import BorderSpacing from "./Components/BorderSpacing";
import FontWeight from "./Components/FontWeight";
import MinWidth from "./Components/MinWidth";
import TextAlignLast from "./Components/TextAlignLast";
import TabSize from "./Components/TabSize";
import Resize from "./Components/Resize";
import OverflowX from "./Components/OverflowX";
import Opacity from "./Components/Opacity";
import Direction from "./Components/Direction";
import Position from "./Components/Position";
import Right from "./Components/Right";
import Left from "./Components/Left";
import BackgroundRepeat from "./Components/BackgroundRepeat";
import BackgroundBlendMode from "./Components/BackgroundBlendMode";
import BackgroundColor from "./Components/BackgroundColor";
import BackgroundPosition from "./Components/BackgroundPosition";
import BackgroundOrigin from "./Components/BackgroundOrigin";
import OverflowY from "./Components/OverflowY";
import Display from './Components/Display';
import CaretColor from './Components/CaretColor';
import { Switch, BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    // Mobile
    var menulist = document.getElementById("menu-list");
    var sublist = document.getElementById("sub-menu");
    document
      .querySelector(".mobile-menu-open")
      .addEventListener("click", openMenu);
    function openMenu() {
      showAndHide(menulist);
    }
    document.getElementById("dropdown").onclick = function () {
      showAndHide(sublist);
    };
    function showAndHide(obj) {
      if (window.innerWidth > 799) return;
      if (obj.classList.contains("shown")) {
        obj.classList.add("hidden");
        obj.classList.remove("shown");
        return;
      }
      obj.classList.remove("hidden");
      obj.classList.add("shown");
    }
    //Resize the window - change desktop or mobile version
    document.body.onresize = function () {
      if (window.innerWidth > 799) {
        menulist.classList.remove("hidden");
        menulist.classList.remove("shown");
        sublist.classList.remove("hidden");
        sublist.classList.remove("shown");
      }
    };
  }

  render() {
    return (
      <>
        <div className="navbar-wrapper">
          <span className="mobile-menu-open" id="menu-open">
            <hr />
            <hr />
            <hr />
          </span>
          <ul className="navbar-menu-list" id="menu-list">
            <li>
              <span>
                <a href="/">Home</a>
              </span>
            </li>
            <li>
              <span>CSS Properties </span>
            </li>
            <li id="dropdown">
              <span>Drop Down</span>
              <ul className="sub-menu" id="sub-menu">
                <li>sub menu 1</li>
                <li>sub menu 2</li>
                <li>sub menu 3</li>
              </ul>
            </li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
        </div>
        <ul className="nav-dropdown" style={{ marginTop: "70px" }}>
          <li>
            <a href="AlignContent">AlignContent</a>
          </li>
          <li>
            <a href="AllProperty">AllProperty</a>
          </li>
          <li>
            <a href="BackfaceVisibility">BackfaceVisibility</a>
          </li>
          <li>
            <a href="BackgroundBlendMode">BackgroundBlendMode</a>
          </li>
          <li>
            <a href="BackgroundClip">BackgroundClip</a>
          </li>
          <li>
            <a href="BackgroundColor">BackgroundColor</a>
          </li>
          <li>
            <a href="BackgroundOrigin">BackgroundOrigin</a>
          </li>
          <li>
            <a href="BackgroundPosition">BackgroundPosition</a>
          </li>
          <li>
            <a href="BackgroundRepeat">BackgroundRepeat</a>
          </li>
          <li>
            <a href="Border">Border</a>
          </li>
          <li>
            <a href="BorderBottom">Border Bottom</a>
          </li>
          <li>
            <a href="BorderCollapse">Border Collapse</a>
          </li>
          <li>
            <a href="BorderRadius">BorderRadius</a>
          </li>
          <li>
            <a href="BorderSpacing">Border Spacing</a>
          </li>
          <li>
            <a href="BoxSizing">Box Sizing</a>
          </li>
          <li>
            <a href="BoxShadow">BoxShadow</a>
          </li>
          <li>
            <a href="CaptionSide">CaptionSide</a>
          </li>
          <li>
            <a href="CaretColor">CaretColor</a>
          </li>
          <li>
            <a href="ColumnCount">Column Count</a>
          </li>
          <li>
            <a href="ColumnGap">Column Gap</a>
          </li>
          <li>
            <a href="ColumnRule">Column Rule</a>
          </li>
          <li>
            <a href="CssFloat">CssFloat</a>
          </li>
          <li>
            <a href="Cursor">Cursor</a>
          </li>
          <li>
            <a href="Direction">Direction</a>
          </li>
          <li>
            <a href="Display">Display</a>
          </li>
          <li>
            <a href="EmptyCells">Empty Cells</a>
          </li>
          <li>
            <a href="FlexBoxGenerator">FlexBoxGenerator</a>
          </li>
          <li>
            <a href="/flexboxplayground">Flexbox Playground </a>
          </li>
          <li>
            <a href="FontSize">FontSize</a>
          </li>
          <li>
            <a href="FontStyle">FontStyle</a>
          </li>
          <li>
            <a href="FontVariant">Font Variant</a>
          </li>
          <li>
            <a href="FontWeight">FontWeight</a>
          </li>
          <li>
            <a href="Height">Height</a>
          </li>
          <li>
            <a href="Left">Left</a>
          </li>
          <li>
            <a href="LetterSpacing">LetterSpacing</a>
          </li>
          <li>
            <a href="LineHeight">LineHeight</a>
          </li>
          <li>
            <a href="ListStyle">ListStyle</a>
          </li>
          <li>
            <a href="Margin">Margin and Padding</a>
          </li>
          <li>
            <a href="MaxHeight">Max Height</a>
          </li>
          <li>
            <a href="MaxWidth">Max Width</a>
          </li>
          <li>
            <a href="MinHeight">Min Height</a>
          </li>
          <li>
            <a href="MinWidth">Min Width</a>
          </li>
          <li>
            <a href="Opacity">Opacity</a>
          </li>
          <li>
            <a href="Outline">Outline</a>
          </li>
          <li>
            <a href="Overflow">Overflow</a>
          </li>
          <li>
            <a href="OverflowX">OverflowX</a>
          </li>
          <li>
            <a href="OverflowY">OverflowY</a>
          </li>
          <li>
            <a href="PointerEvents">PointerEvents</a>
          </li>
          <li>
            <a href="Position">Position</a>
          </li>
          <li>
            <a href="Resize">Resize</a>
          </li>
          <li>
            <a href="Right">Right</a>
          </li>
          <li>
            <a href="TableLayout">Table Layout</a>
          </li>
          <li>
            <a href="TabSize">Tab Size</a>
          </li>
          <li>
            <a href="TextAlign">TextAlign</a>
          </li>
          <li>
            <a href="TextAlignLast">Textalign Last</a>
          </li>
          <li>
            <a href="TextDecoration">TextDecoration</a>
          </li>
          <li>
            <a href="TextIndent">Text Indent</a>
          </li>
          <li>
            <a href="TextOverflow">TextOverflow</a>
          </li>
          <li>
            <a href="TextShadow">TextShadow</a>
          </li>
          <li>
            <a href="TextTransform">TextTransform</a>
          </li>
          <li>
            <a href="Top">Top Property</a>
          </li>
          <li>
            <a href="UserSelect">UserSelect</a>
          </li>
          <li>
            <a href="Visibility">Visibility</a>
          </li>
          <li>
            <a href="WhiteSpace">WhiteSpace</a>
          </li>
          <li>
            <a href="Width">Width</a>
          </li>
          <li>
            <a href="WordBreak">WordBreak</a>
          </li>
          <li>
            <a href="WordSpacing">WordSpacing</a>
          </li>
          <li>
            <a href="WordWrap">WordWrap</a>
          </li>
          <li>
            <a href="WritingMode">WritingMode</a>
          </li>
        </ul>

        <BrowserRouter>
          <Switch>
             <Route path="/home" component={Home} exact />
            <Route path="/BoxShadow" component={BoxShadow} />
            <Route path="/BorderRadius" component={BorderRadius} />
            <Route path="/TextShadow" component={TextShadow} />
            <Route path="/FlexBoxGenerator" component={FlexBoxGenerator} />
            <Route path="/Margin" component={Margin} />
            <Route path="/Border" component={Border} />
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
            <Route path="/FontSize" component={FontSize} />
            <Route path="/BoxSizing" component={BoxSizing} />
            <Route path="/Cursor" component={Cursor} />
            <Route path="/CaptionSide" component={CaptionSide} />
            <Route path="/PointerEvents" component={PointerEvents} />
            <Route path="/AllProperty" component={AllProperty} />
            <Route path="/ColumnCount" component={ColumnCount} />
            <Route path="/AlignContent" component={AlignContent} />
            <Route path="/BorderCollapse" component={BorderCollapse} />
            <Route path="/BorderBottom" component={BorderBottom} />
            <Route path="/BackgroundClip" component={BackgroundClip} />
            <Route path="/ColumnRule" component={ColumnRule} />
            <Route path="/WordSpacing" component={WordSpacing} />
            <Route path="/WhiteSpace" component={WhiteSpace} />
            <Route path="/Width" component={Width} />
            <Route path="/Visibility" component={Visibility} />
            <Route path="/UserSelect" component={UserSelect} />
            <Route path="/Top" component={Top} />
            <Route path="/FontVariant" component={FontVariant} />
            <Route path="/TextIndent" component={TextIndent} />
            <Route path="/BackfaceVisibility" component={BackfaceVisibility} />
            <Route path="/Height" component={Height} />
            <Route path="/ColumnGap" component={ColumnGap} />
            <Route path="/EmptyCells" component={EmptyCells} />
            <Route path="/FlexboxPlayground" component={FlexboxPlayground} />
            <Route path="/MaxHeight" component={MaxHeight} />
            <Route path="/MaxWidth" component={MaxWidth} />
            <Route path="/MinHeight" component={MinHeight} />
            <Route path="/TableLayout" component={TableLayout} />
            <Route path="/BorderSpacing" component={BorderSpacing} />
            <Route path="/FontWeight" component={FontWeight} />
            <Route path="/MinWidth" component={MinWidth} />
            <Route path="/TextAlignLast" component={TextAlignLast} />
            <Route path="/TabSize" component={TabSize} />
            <Route path="/Resize" component={Resize} />
            <Route path="/OverflowX" component={OverflowX} />
            <Route path="/Opacity" component={Opacity} />
            <Route path="/Direction" component={Direction} />
            <Route path="/Position" component={Position} />
            <Route path="/Right" component={Right} />
            <Route path="/Left" component={Left} />
            <Route path="/BackgroundRepeat" component={BackgroundRepeat} />
            <Route
              path="/BackgroundBlendMode"
              component={BackgroundBlendMode}
            />
            <Route path="/BackgroundColor" component={BackgroundColor}></Route>
            <Route path="/BackgroundPosition" component={BackgroundPosition} />
            <Route path="/BackgroundOrigin" component={BackgroundOrigin} />
            <Route path="/OverflowY" component={OverflowY} />
            <Route path="/Display" component={Display} />
            <Route path="/CaretColor" component={CaretColor} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
