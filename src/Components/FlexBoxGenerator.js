import React, { Component } from "react";
import "../Styles/FlexBoxGenerator.css";

class FlexBoxGenerator extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      no_of_boxes: "5",
      box_foreground: "#ff0000",
      box_background: "80bfff",
      box_height: "",
    };
    this.onChange = this.onChange.bind(this);
    this.Generate_Box = this.Generate_Box.bind(this);
    this.Add_Click_Event = this.Add_Click_Event.bind(this);
  }

  Add_Click_Event() {
    let button = document.getElementById("button");
    button.addEventListener("click", this.Generate_Box);
  }

  Generate_Box() {
    console.log();
    let n;
    n =
      document.getElementById("boxes").childElementCount +
      parseInt(this.state.no_of_boxes);
    for (
      let i = document.getElementById("boxes").childElementCount + 1;
      i <= n;
      i++
    ) {
      let boxes = document.createElement("div");
      boxes.classList.add("myDiv");
      document.getElementById("boxes").appendChild(boxes);
      boxes.innerHTML = i;
    }
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: [e.target.value],
    });
  }

  componentDidMount() {
    this.Add_Click_Event();
    this.Generate_Box();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="topLeftRadius">NO OF BOXES</label>
        <input
          type="number"
          value={this.state.no_of_boxes}
          onChange={this.onChange}
          name="no_of_boxes"
        />

        <div>
          <button id="button">Generate</button>
        </div>
        <div className="container">
          <div className="boxes" id="boxes"></div>
        </div>
      </div>
    );
  }
}

export default FlexBoxGenerator;
