import React, { Component } from 'react';
import '../Styles/MaxWidth.css';

class MaxWidth extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      MaxWidth: '30',
      unit: 'px',
    };
    this.onChange = this.onChange.bind(this);
    this.MaxWidthStyle = this.MaxWidthStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.MaxWidthStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.MaxWidthStyle();
  }

  MaxWidthStyle() {
    let e = document.querySelector('.MaxWidth');
    e.style.maxWidth = `${parseInt(this.state.MaxWidth)}${this.state.unit}`;
    console.log(this.state.MaxWidth, this.state.unit);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.MaxWidthStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="MaxWidth">MaxWidth</label>
        <input
          type="range"
          min="0"
          max="500"
          step="1"
          value={this.state.MaxWidth}
          onChange={this.onChange}
          name="MaxWidth"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="500"
          step="1"
          value={this.state.MaxWidth}
          onChange={this.onChange}
          name="MaxWidth"
        />
        <br />
        <label htmlFor="value">unit</label>&nbsp;
        <select value={this.state.unit} name="unit" onChange={this.onSelect}>
          <option value="px">px </option>
          <option value="cm">cm</option>
        </select>
        <p></p>
        <div className="MaxWidth">
          Lorcm ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
          consequat dui, et luctus quam. Aliquam magna libero, sodales non eros
          nec, vestibulum sollicitudin leo. Quisque sed erat lorcm. Aliquam
          interdum ante purus, a blandit nunc placerat et. Proin tristique ante
          tincidunt lacus dictum imperdiet. Quisque libero mi, molestie et
          suscipit eget, convallis a ipsum. Lorcm ipsum dolor sit amet,
          consectetur adipiscing elit. Nam eget consequat dui, et luctus quam.
          Aliquam magna libero, sodales non eros nec, vestibulum sollicitudin
          leo. Quisque sed erat lorcm. Aliquam interdum ante purus, a blandit
          nunc placerat et. Proin tristique ante tincidunt lacus dictum
          imperdiet. Quisque libero mi, molestie et suscipit eget, convallis a
          ipsum.
        </div>
        <div>
          {' '}
          MaxWidth = {this.state.MaxWidth}
          {this.state.unit} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default MaxWidth;
