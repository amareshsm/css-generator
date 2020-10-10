import React, { Component } from "react";
import "../Styles/AllProperty.css";

class AllProperty extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      All_Property: "",
    };

  }

  componentDidMount() {
    this.AllPropertyStyle();
  }

   onChange= async (e) =>{
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.AllPropertyStyle();
  }

   onSelect= async (e) =>{
    await this.setState({
      All_Property: [e.target.value],
    });
    await this.AllPropertyStyle();
  }

  AllPropertyStyle = ()=> {
    const {All_Property} = this.state
    let e = document.querySelector(".AllProperty");
    e.style.all = `${All_Property}`;
    document.body.appendChild(e);
  }



  render() {
    const {All_Property} = this.state
    return (
      <div className="App">
        <label htmlFor="value">All</label>&nbsp;
        <select
          value={All_Property}
          name="All_Property"
          onChange={this.onSelect}
        >
          <option value="">None</option>
          <option value="unset">unset </option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="AllProperty">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div> all = {All_Property} ;</div>
        <p></p>
      </div>
    );
  }
}

export default AllProperty;
