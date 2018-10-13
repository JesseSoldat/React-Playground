import React, { Component, Fragment } from "react";
import { ReactComponent as ReactLogo } from "./logo.svg";
import "./App.css";
import { colorsArray } from "./data/colors";
import Toggle from "./Toggle";
import NameList from "./NameList";

const namesArray = ["Jesse", "Zuhura", "Akil", "Sela", "Nate", "Marcia"];
const namesToAddArray = ["Bill", "Ted", "Jim", "Ed", "Pam", "Kim"];

class App extends Component {
  state = {
    names: namesArray,
    counter: namesToAddArray.length,
    color: "blue",
    noMoreNames: false
  };

  addName = () => {
    const { counter, names } = this.state;
    if (counter > 0) {
      const nameToAdd = namesToAddArray.shift();
      const updatedNames = [...names];
      updatedNames.push(nameToAdd);

      this.setState({
        counter: counter - 1,
        names: updatedNames
      });
    } else {
      this.setState({
        noMoreNames: true
      });
    }
  };

  changeColor = () => {
    const colorsLength = colorsArray.length;
    const randomNumber = Math.floor(Math.random() * colorsLength + 1);
    this.setState({ color: colorsArray[randomNumber] });
  };

  render() {
    return (
      <div className="App">
        <Toggle>
          {({ on, toggle }) => (
            <div>
              <div>
                <button onClick={toggle}>Show / Hide</button>
              </div>
              <div>{on && <ReactLogo className="App-logo" />}</div>
            </div>
          )}
        </Toggle>
        <div style={{ marginTop: "30px" }}>
          {this.state.noMoreNames && (
            <Fragment>
              <h3>No More names to Add</h3>
              <hr />
            </Fragment>
          )}
          <NameList
            noMoreNames={this.state.noMoreNames}
            names={this.state.names}
            addName={this.addName}
            color={this.state.color}
            changeColor={this.changeColor}
          />
        </div>
      </div>
    );
  }
}

export default App;
