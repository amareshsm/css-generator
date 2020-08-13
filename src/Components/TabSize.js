import React, { Component } from "react";
import "../Styles/TabSize.css";

class TabSize extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      TabSize: "0",
    };
    this.onChange = this.onChange.bind(this);
    this.TabSizeStyle = this.TabSizeStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.TabSizeStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.TabSizeStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.TabSizeStyle();
  }

  TabSizeStyle() {
    const { TabSize } = this.state;
    let e = document.querySelector(".TabSize");
    e.style.tabSize = `${parseInt(TabSize)}`;
    console.log(TabSize);
    document.body.appendChild(e);
  }

  render() {
    const { TabSize } = this.state;
    const content = `lorem  ipsum   sad    sdafd   sdafsd  `;
    return (
      <div className="App">
        <label htmlFor="TabSize">TabSize</label>
        <input
          type="range"
          min="0"
          max="300"
          step="1"
          value={TabSize}
          onChange={this.onChange}
          name="TabSize"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="300"
          step="1"
          value={TabSize}
          onChange={this.onChange}
          name="TabSize"
        />
        <br />
        <p></p>
        <div>
          <pre className="TabSize">{content}</pre>
        </div>
        <div>
          {" "}
          tab-size = {TabSize};<br />
          -moz-tab-size = {TabSize};<br />
          -o-tab-size = {TabSize};<br />
        </div>
        <p></p>
      </div>
    );
  }
}

export default TabSize;
