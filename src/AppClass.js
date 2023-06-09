import React from "react";
import colors from "./colors";
import "./style.css";

class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndexColor: 0,
    };
  }

  componentDidMount() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex]; // set bg to random color after the page loads
    this.setState({ currentIndexColor: randomIndex });
  }

  handleClick = (index) => {
    document.body.style.backgroundColor = colors[index];
    this.setState({ currentIndexColor: index });
  };

  render() {
    return (
      <div id="app">
        <h1 id="current-color">{colors[this.state.currentIndexColor]}</h1>
        <h2>Refresh to get a new set of colors</h2>
        <div className="colors">
          {colors.map((color, index) => (
            <button
              style={{ backgroundColor: color }}
              onClick={() => this.handleClick(index)}
              className={this.state.currentIndexColor === index ? "active" : ""} //set "active" class to the active button
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default AppClass;
