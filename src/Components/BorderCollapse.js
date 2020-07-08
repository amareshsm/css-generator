import React, { Component } from "react";
import "../Styles/BorderCollapse.css";

class BorderCollapse extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Border_Collapse: "collapse",
    };
    this.onChange = this.onChange.bind(this);
    this.BorderCollapseStyle = this.BorderCollapseStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.BorderCollapseStyle();
  }

  async onSelect(e) {
    await this.setState({
      Border_Collapse: [e.target.value],
    });
    await this.BorderCollapseStyle();
  }

  BorderCollapseStyle() {
    let e = document.querySelector(".BorderCollapse");
    e.style.borderCollapse = `${this.state.Border_Collapse}`;
    console.log(this.state.Border_Collapse);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.BorderCollapseStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">Border_Collapse</label>&nbsp;
        <select
          value={this.state.Border_Collapse}
          name="Border_Collapse"
          onChange={this.onSelect}
        >
          &nbsp;
          <option value="separate">separate </option>
          <option value="collapse">collapse</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <table className="BorderCollapse">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Enchanted Wood</td>
              <td>Enid Blyton</td>
            </tr>
            <tr>
              <td>Oath of Vayuputras</td>
              <td>Amish Tripathi</td>
            </tr>
            <tr>
              <td>The Fault in Our Stars</td>
              <td>John Green</td>
            </tr>
          </tbody>
        </table>
        <div> border-collapse = {this.state.Border_Collapse} ;</div>
        <p></p>
      </div>
    );
  }
}

export default BorderCollapse;
