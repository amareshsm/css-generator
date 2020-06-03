import React, { Component } from "react";
import "./App.css";
import BoxShadow from "./Components/BoxShadow";
import BorderRadius from "./Components/BorderRadius.js";
import TextShadow from "./Components/TextShadow";
import FlexBoxGenerator from "./Components/FlexBoxGenerator";
import Margin from "./Components/Margin";
import LineHeight from "./Components/LineHeight";
import FontStyle from "./Components/FontStyle";
import {
  Button,
  Navbar,
  Nav,
  Form,
  NavDropdown,
  FormControl,
} from "react-bootstrap";

import { Switch, BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/BoxShadow">Box Shadow</Nav.Link>
              <NavDropdown title="css generators" id="basic-nav-dropdown">
                <NavDropdown.Item href="/BoxShadow">BoxShadow</NavDropdown.Item>
                <NavDropdown.Item href="/BorderRadius">
                  BorderRadius
                </NavDropdown.Item>
                <NavDropdown.Item href="/TextShadow">
                  TextShadow
                </NavDropdown.Item>
                <NavDropdown.Item href="/FlexBoxGenerator">
                  Flex Box Generator
                </NavDropdown.Item>
                <NavDropdown.Item href="/Margin">
                  Margin and Padding
                </NavDropdown.Item>
                <NavDropdown.Item href="/LineHeight">
                  Line Height
                </NavDropdown.Item>
                <NavDropdown.Item href="/FontStyle">
                  Font Style
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <BrowserRouter>
          <Switch>
            {/* <Route path="/" component={Home} exact />*/}
            <Route path="/BoxShadow" component={BoxShadow} />
            <Route path="/BorderRadius" component={BorderRadius} />
            <Route path="/TextShadow" component={TextShadow} />
            <Route path="/FlexBoxGenerator" component={FlexBoxGenerator} />
            <Route path="/Margin" component={Margin} />
            <Route path="/LineHeight" component={LineHeight} />
            <Route path="/FontStyle" component={FontStyle} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
