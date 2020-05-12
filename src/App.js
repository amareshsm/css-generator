import React, { Component } from "react";
import "./App.css";
import BoxShadow from "./Components/BoxShadow";
import BorderRadius from "./Components/BorderRadius.js";
import TextShadow from "./Components/TextShadow";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <a href="/BoxShadow">BoxShadow</a>
          <br></br>
          <a href="/BorderRadius">BorderRadius</a>
          <br></br>
          <a href="/TextShadow">TextShadow</a>

          <Switch>
            {/* <Route path="/" component={Home} exact />*/}
            <Route path="/BoxShadow" component={BoxShadow} />
            <Route path="/BorderRadius" component={BorderRadius} />
            <Route path="/TextShadow" component={TextShadow} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
