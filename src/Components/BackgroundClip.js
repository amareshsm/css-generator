import React, { Component } from "react";
import "../Styles/BackgroundClip.css";

class BackgroundClip extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Background_Clip: "border-box",
    };
    this.onChange = this.onChange.bind(this);
    this.BackgroundClipStyle = this.BackgroundClipStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.BackgroundClipStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.BackgroundClipStyle();
  }

  async onSelect(e) {
    await this.setState({
      Background_Clip: [e.target.value],
    });
    await this.BackgroundClipStyle();
  }

  BackgroundClipStyle() {
    let e = document.querySelector(".BackgroundClip");
    e.style.backgroundClip = `${Background_Clip}`;
    console.log(Background_Clip);
    document.body.appendChild(e);
  }

  render() {
    const { Background_Clip } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Background Clip</label>&nbsp;
        <select
          value={Background_Clip}
          name="Background_Clip"
          onChange={this.onSelect}
        >
          <option value="border-box">border-box</option>
          <option value="padding-box">padding-box </option>
          <option value="content-box">content-box</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="BackgroundClip">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div> background-clip = {Background_Clip} ;</div>
        <p></p>
      </div>
    );
  }
}

export default BackgroundClip;
