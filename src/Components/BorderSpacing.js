import React, { Component } from "react";
import "../Styles/BorderSpacing.css";

class BorderSpacing extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      horizontalSpacing: 2,
      verticalSpacing: 2,
    };
    this.onChange = this.onChange.bind(this);
    this.BorderSpacingStyle = this.BorderSpacingStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.BorderSpacingStyle();
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.BorderSpacingStyle();
  }

  async onSelect(e) {
    await this.setState({
      border_Spacing: [e.target.value],
    });
    await this.BorderSpacingStyle();
  }

  BorderSpacingStyle() {
    const { horizontalSpacing, verticalSpacing } = this.state;
    let e = document.querySelector(".BorderSpacing");
    e.style.borderSpacing = `${horizontalSpacing}px ${verticalSpacing}px`;
    document.body.appendChild(e);
  }

  render() {
    const { horizontalSpacing, verticalSpacing } = this.state;
    return (
      <div className="App">
        <label htmlFor="horizontalSpacing">horizontalSpacing</label>
        <input
          type="range"
          min="0"
          max="200"
          value={this.state.horizontalSpacing}
          onChange={this.onChange}
          name="horizontalSpacing"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="200"
          value={this.state.horizontalSpacing}
          onChange={this.onChange}
          name="horizontalSpacing"
        />
        <br />
        <label htmlFor="verticalSpacing">verticalSpacing</label>
        <input
          type="range"
          min="0"
          max="200"
          value={this.state.verticalSpacing}
          onChange={this.onChange}
          name="verticalSpacing"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="200"
          value={this.state.verticalSpacing}
          onChange={this.onChange}
          name="verticalSpacing"
        />
        <br />
        <p></p>
        <table className="BorderSpacing">
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
        <div>
          border-spacing = {horizontalSpacing}px {verticalSpacing}px ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default BorderSpacing;
