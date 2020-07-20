import React, { Component } from 'react';
import styles from '../Styles/FlexboxPlayground.module.css'
class Flexboxplayground extends Component {
    constructor(props) {
        super(props)
        this.state = {
            elements: ['1', '2', '3', '4', '5'],
            height: 10,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'no-wrap',
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
            alignItems: 'flex-start'
        }
    }

    onChange = async (e) => {
        let param = e.target.name; //identify the target input
        await this.setState({ [e.target.name]: [e.target.value] });    
        let ele = document.getElementsByClassName(styles.flexbox_element)[0];    
        let flexChilds = document.querySelectorAll("." + styles.flexbox_child);
        switch (param) {  //sending the target input as params                
            case 'display':
                ele.style.display = this.state.display
                break

            case 'flexDirection':
                ele.style.flexDirection = this.state.flexDirection
                break;

            case 'flexWrap':
                ele.style.flexWrap = this.state.flexWrap
                break

            case 'justifyContent':
                ele.style.justifyContent = this.state.justifyContent
                break

            case 'alignItems':
                ele.style.alignItems = this.state.alignItems
                break

            case 'alignContent':
                ele.style.alignContent = this.state.alignContent
                break

            case "height":
                flexChilds.forEach((element) => {
                    element.style.height = this.state.height + "px";
                });
                break;

            case "width":
                flexChilds.forEach((element) => {
                    element.style.width = this.state.width + "px";
                });
                break;
        }
    }


    render() {
        const {height,width,display,flexDirection,flexWrap,
            justifyContent,alignItems,alignContent,elements} = this.state
        return (
          <>
            <div>
              <label htmlFor="height">Height</label>
              <input
                type="range"
                min="0"
                max="100"
                value={height}
                onChange={this.onChange}
                name="height"
              />
              &nbsp;
              <input
                type="number"
                min="0"
                max="100"
                value={height}
                onChange={this.onChange}
                name="height"
              />
              <br />
              <label htmlFor="height">Width</label>
              <input
                type="range"
                min="0"
                max="100"
                value={width}
                onChange={this.onChange}
                name="width"
              />
              &nbsp;
              <input
                type="number"
                min="0"
                max="100"
                value={width}
                onChange={this.onChange}
                name="width"
              />
              <br />
              <label htmlFor="value">display</label>
              <select
                value={display}
                name="display"
                onChange={this.onChange}
              >
                <option value="flex">flex</option>
                <option value="inline-flex">inline-flex</option>
              </select>
              <label htmlFor="value">flex-direction</label>
              <select
                value={flexDirection}
                name="flexDirection"
                onChange={this.onChange}
              >
                <option value="row">row</option>
                <option value="row-reverse">row-reverse</option>
                <option value="column">column</option>
                <option value="column-reverse">column-reverse</option>
              </select>
              <label htmlFor="value">flex-wrap</label>
              <select
                value={flexWrap}
                name="flexWrap"
                onChange={this.onChange}
              >
                <option value="no-wrap">no-wrap</option>
                <option value="wrap">wrap</option>
                <option value="wrap-reverse">wrap-reverse</option>
              </select>
              <label htmlFor="value">justify-content</label>
              <select
                value={justifyContent}
                name="justifyContent"
                onChange={this.onChange}
              >
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="space-around">space-around</option>
                <option value="space-between">space-between</option>
              </select>
              <label htmlFor="value">align-items</label>
              <select
                value={alignItems}
                name="alignItems"
                onChange={this.onChange}
              >
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="space-around">space-around</option>
                <option value="space-between">space-between</option>
              </select>
              <label htmlFor="value">align-content</label>
              <select
                value={alignContent}
                name="alignContent"
                onChange={this.onChange}
              >
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="space-around">space-around</option>
                <option value="space-between">space-between</option>
              </select>
            </div>
            <div className={styles.flexbox_container}>
              <div className={styles.flexbox_element}>
                {elements.map((ele, index) => (
                  <div className={styles.flexbox_child} key={index}>
                    <span>{ele}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      }
}

export default Flexboxplayground
