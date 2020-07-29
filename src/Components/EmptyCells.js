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

  componentDidMount() {
    this.EmptyCellsStyle();
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
    const { Empty_Cells } = this.state;
    let e = document.querySelector(".EmptyCells");
    e.style.emptyCells = `${Empty_Cells}`;
    console.log(Empty_Cells);
    document.body.appendChild(e);
  }

  render() {
    const { Empty_Cells } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">Empty_Cells</label>
        <select value={Empty_Cells} name="Empty_Cells" onChange={this.onSelect}>
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
        <div> empty-cells = {Empty_Cells} ;</div>
        <p></p>
      </div>
    );
  }
}

export default EmptyCells;
