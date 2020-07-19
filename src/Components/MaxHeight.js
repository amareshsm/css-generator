import React, { Component } from 'react';
import '../Styles/MaxHeight.css';

class MaxHeight extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      MaxHeight: '30',
      unit: 'px',
    };
    this.onChange = this.onChange.bind(this);
    this.MaxHeightStyle = this.MaxHeightStyle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await this.MaxHeightStyle();
  }

  async onSelect(e) {
    await this.setState({
      unit: [e.target.value],
    });
    await this.MaxHeightStyle();
  }

  MaxHeightStyle() {
    let e = document.querySelector('.MaxHeight');
    e.style.maxHeight = `${parseInt(this.state.MaxHeight)}${this.state.unit}`;
    console.log(this.state.MaxHeight, this.state.unit);
    document.body.appendChild(e);
  }

  componentDidMount() {
    this.MaxHeightStyle();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="MaxHeight">MaxHeight</label>
        <input
          type="range"
          min="0"
          max="500"
          step="1"
          value={this.state.MaxHeight}
          onChange={this.onChange}
          name="MaxHeight"
        />
        &nbsp;
        <input
          type="number"
          min="0"
          max="500"
          step="1"
          value={this.state.MaxHeight}
          onChange={this.onChange}
          name="MaxHeight"
        />
        <br />
        <label htmlFor="value">unit</label>&nbsp;
        <select value={this.state.unit} name="unit" onChange={this.onSelect}>
          <option value="px">px </option>
          <option value="cm">cm</option>
        </select>
        <p></p>
        <div className="MaxHeight">
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
          MaxHeight = {this.state.MaxHeight}
          {this.state.unit} ;
        </div>
        <p></p>
      </div>
    );
  }
}

export default MaxHeight;
