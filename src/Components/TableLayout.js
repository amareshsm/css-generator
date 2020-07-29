import React, { Component } from "react";
import "../Styles/TableLayout.css";

class TableLayout extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      table_Layout: "fixed",
    };
    this.onChange = this.onChange.bind(this);
    this.TableLayoutStyle = this.TableLayoutStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.TableLayoutStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.TableLayoutStyle();
  }

  async onSelect(e) {
    await this.setState({
      table_Layout: [e.target.value],
    });
    await this.TableLayoutStyle();
  }

  TableLayoutStyle() {
    const { table_Layout } = this.state;
    let e = document.querySelector(".TableLayout");
    e.style.tableLayout = `${table_Layout}`;
    console.log(table_Layout);
    document.body.appendChild(e);
  }

  render() {
    const { table_Layout } = this.state;
    return (
      <div className="App">
        <label htmlFor="value">table_Layout</label>
        <select
          value={table_Layout}
          name="table_Layout"
          onChange={this.onSelect}
        >
          <option value="auto">auto </option>
          <option value="fixed">fixed</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
        <p></p>
        <table className="TableLayout">
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
              <td>Me before you</td>
              <td>Jojo Moyes</td>
            </tr>
            <tr>
              <td>Looking for Alaska</td>
              <td>John Green</td>
            </tr>
          </tbody>
        </table>
        <div> table-layout = {table_Layout} ;</div>
        <p></p>
      </div>
    );
  }
}

export default TableLayout;
