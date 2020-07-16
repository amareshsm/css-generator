import React, { Component } from "react";
import "../Styles/EmptyCells.css";

class EmptyCells extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Empty_Cells: "show",
    };
    this.onChange = this.onChange.bind(this);
    this.EmptyCellsStyle = this.EmptyCellsStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.EmptyCellsStyle();
  }

  async onSelect(e) {
    await this.setState({
      Empty_Cells: [e.target.value],
    });
    await this.EmptyCellsStyle();
  }

  EmptyCellsStyle() {
    let e = document.querySelector(".EmptyCells");
    e.style.emptyCells = `${this.state.Empty_Cells}`;
    console.log(this.state.Empty_Cells);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.EmptyCellsStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="value">Empty_Cells</label>
        <select
          value={this.state.Empty_Cells}
          name="Empty_Cells"
          onChange={this.onSelect}
        >
          <option value="hide">hide </option>
          <option value="show">show</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <table className="EmptyCells">
          <caption>Table 1.1</caption>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Harry Potter</td>
              <td>JK Rowling</td>
            </tr>
            <tr>
              <td>Immortals of Meluha</td>
              <td>Amish Tripathi</td>
            </tr>
            <tr>
              <td>Looking for Alaska</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div> empty-cells = {this.state.Empty_Cells} ;</div>
        <p></p>
      </div>
    );
  }
}

export default EmptyCells;
