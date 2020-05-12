import React, { Component } from "react";
import "../Styles/FlexBoxGenerator.css";

class FlexBoxGenerator extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      no_of_boxes:"",
      box_foreground:"#ff0000",
      box_background:"#000000",
      box_height:"",

    };
    this.onChange = this.onChange.bind(this);
    this.borderRadiusStyle = this.borderRadiusStyle.bind(this);
    this.boxColour = this.boxColour.bind(this);
    this.Generate_Box = this.Generate_Box.bind(this);

  
  }


 Generate_Box(){
    let button =document.getElementById("button"); //adha btn 
    button.addEventListener("click",myFunction);//btn ku click event add panrom
    let n;
    let oldvalue=0; //temp var to store old value 
    let i=1;
    console.log(this.state.no_of_boxes);
    function myFunction(){
        n=parseInt(oldvalue)+parseInt(this.state.no_of_boxes);
        for(;i<=n;i++){
            var boxes = document.createElement('div');
            boxes.classList.add('myDiv');
            document.getElementById('boxes').appendChild(boxes);
            boxes.innerHTML=i;
        }
        oldvalue=document.getElementById('boxes').lastElementChild.innerHTML;
        console.log(oldvalue);
    }
  }


  async onChange(e) {
    await this.setState({
      [e.target.name]: [e.target.value],
    });
    await this.borderRadiusStyle(
      //this.state.style,
      this.state.topLeftRadius,
      this.state.topRightRadius,
      this.state.bottomLeftRadius,
      this.state.bottomRightRadius
      //this.state.shadowColor
    );

    await this.boxColour(this.state.boxColour);
  }

  boxColour(bg) {
    let b = document.querySelector(".box");
    b.style.backgroundColor = bg;
  }

  borderRadiusStyle(
    //style,
    topLeftRadius,
    topRightRadius,
    bottomLeftRadius,
    bottomRightRadius
    //clr
  ) {
    let ele = document.querySelector(".box");
    ele.style.borderRadius = ` ${topLeftRadius}px ${topRightRadius}px ${bottomLeftRadius}px ${bottomRightRadius}px `;
    console.log(
      ` ${topLeftRadius}px ${topRightRadius}px ${bottomLeftRadius}px ${bottomRightRadius}px `
    );
    document.body.appendChild(ele);
  }

  componentDidMount() {
    this.borderRadiusStyle(
      this.state.topLeftRadius,
      this.state.topRightRadius,
      this.state.bottomLeftRadius,
      this.state.bottomRightRadius
    );
    this.boxColour(this.state.boxColour);

    this.Generate_Box()

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


        <label htmlFor="topLeftRadius">Top Left Radius</label>
        <input
          type="range"
          min="0"
          max="200"
          value={this.state.topLeftRadius}
          onChange={this.onChange}
          name="topLeftRadius"
        />
        <input
          type="number"
          min="0"
          max="200"
          value={this.state.topLeftRadius}
          onChange={this.onChange}
          name="topLeftRadius"
        />
        <br />
        <label htmlFor="topRightRadius">Top Right Radius</label>
        <input
          type="range"
          min="0"
          max="200"
          value={this.state.topRightRadius}
          onChange={this.onChange}
          name="topRightRadius"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="200"
          value={this.state.topRightRadius}
          onChange={this.onChange}
          name="topRightRadius"
        />
        <br />
        <label htmlFor="bottomLeftRadius">Bottom Left Radius</label>
        <input
          type="range"
          min="0"
          max="200"
          value={this.state.bottomLeftRadius}
          onChange={this.onChange}
          name="bottomLeftRadius"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="200"
          value={this.state.bottomLeftRadius}
          onChange={this.onChange}
          name="bottomLeftRadius"
        />
        <br />
        <label htmlFor="bottomRightRadius">Bottom Right Radius</label>
        <input
          type="range"
          min="0"
          max="200"
          value={this.state.bottomRightRadius}
          onChange={this.onChange}
          name="bottomRightRadius"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="200"
          value={this.state.bottomRightRadius}
          onChange={this.onChange}
          name="bottomRightRadius"
        />
        <br />
        <label htmlFor="border_Width">Border Width</label>
        <input
          type="range"
          min="0"
          max="200"
          value={this.state.border_Width}
          onChange={this.onChange}
          name="border_Width"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="200"
          value={this.state.border_Width}
          onChange={this.onChange}
          name="border_Width"
        />
        <br />
        <p></p>

        <label htmlFor="boxColour">box color</label>
        <input
          type="color"
          name="boxColour"
          onChange={this.onChange}
          value={this.state.boxColour}
        />
        <p></p>
        <label htmlFor="borderColour">Border color</label>
        <input
          type="color"
          name="borderColour"
          onChange={this.onChange}
          value={this.state.borderColour}
        />
        <p></p>
        {/*<input
          type="checkbox"
          name="style"
          checked={this.state.checked}
          onChange={this.handleChange}
          value={this.state.style}
        ></input>
        <label htmlFor="style">Inset</label>*/}
        <div className="box"></div>
        <div>
          box-Radius:&nbsp;
          {this.state.topLeftRadius}px {this.state.topRightRadius}px{" "}
          {this.state.bottomLeftRadius}px {this.state.bottomRightRadius}
          px;
        </div>
        <div>
          -webkit-box-Radius:&nbsp;
          {this.state.topLeftRadius}px {this.state.topRightRadius}px{" "}
          {this.state.bottomLeftRadius}px {this.state.bottomRightRadius}
          px;
        </div>
        <div>
          -moz-box-Radius:&nbsp;
          {this.state.topLeftRadius}px {this.state.topRightRadius}px{" "}
          {this.state.bottomLeftRadius}px {this.state.bottomRightRadius}
          px;
        </div>



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
