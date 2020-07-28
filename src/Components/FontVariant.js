import React, { Component } from "react";
import "../Styles/FontVariant.css";

class FontVariant extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Font_Variant: "normal",
    };
    this.onChange = this.onChange.bind(this);
    this.FontVariantStyle = this.FontVariantStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.FontVariantStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.FontVariantStyle();
  }

  async onSelect(e) {
    await this.setState({
      Font_Variant: [e.target.value],
    });
    await this.FontVariantStyle();
  }

  FontVariantStyle() {
    const { Font_Variant } = this.state;
    let e = document.querySelector(".FontVariant");
    e.style.fontVariant = `${Font_Variant}`;
    console.log(Font_Variant);
    document.body.appendChild(e);
  }

  render() {
    const { Font_Variant } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Font Variant</label>
        <select
          value={Font_Variant}
          name="Font_Variant"
          onChange={this.onSelect}
        >
          <option value="normal">normal </option>
          <option value="small-caps">small-caps</option>
          <option value="initial">Initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <div className="FontVariant">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            consequat dui, et luctus quam. Aliquam magna libero, sodales non
            eros nec, vestibulum sollicitudin leo. Quisque sed erat lorem.
            Aliquam interdum ante purus, a blandit nunc placerat et. Proin
            tristique ante tincidunt lacus dictum imperdiet. Quisque libero mi,
            molestie et suscipit eget, convallis a ipsum.
          </p>
        </div>
        <div> font-variant = {Font_Variant} ; </div>
      </div>
    );
  }
}

export default FontVariant;
