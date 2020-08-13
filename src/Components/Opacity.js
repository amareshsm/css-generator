import React, { Component } from "react";
import "../Styles/Opacity.css";

class Opacity extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Opacity: "0.5",
    };
    this.onChange = this.onChange.bind(this);
    this.OpacityStyle = this.OpacityStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.OpacityStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.OpacityStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.OpacityStyle();
  }

  OpacityStyle() {
    const { Opacity } = this.state;
    let e = document.querySelector(".Opacity");
    e.style.opacity = `${Opacity}`;
    console.log(Opacity);
    document.body.appendChild(e);
  }

  render() {
    const { Opacity } = this.state;
    return (
      <div className="App">
        <label htmlFor="Opacity">Opacity</label>
        <select value={Opacity} name="Opacity" onChange={this.onChange}>
          <option value="0.1">0.1 </option>
          <option value="0.2">0.2</option>
          <option value="0.3">0.3</option>
          <option value="0.4">0.4</option>
          <option value="0.5">0.5</option>
          <option value="0.6">0.6</option>
          <option value="0.7">0.7</option>
          <option value="0.8">0.8</option>
          <option value="0.9">0.9</option>
          <option value="1">1</option>
          <option value="initial">initial</option>
        </select>
        <br />
        <p></p>
        <div className="Opacity">
          Lorcm ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
          consequat dui, et luctus quam. Aliquam magna libero, sodales non eros
          nec, vestibulum sollicitudin leo. Quisque sed erat lorcm. Aliquam
          interdum ante purus, a blandit nunc placerat et. Proin tristique ante
          tincidunt lacus dictum imperdiet. Quisque libero mi, molestie et
          suscipit eget, convallis a ipsum.
        </div>
        <div> Opacity = {Opacity};</div>
        <p></p>
      </div>
    );
  }
}

export default Opacity;
