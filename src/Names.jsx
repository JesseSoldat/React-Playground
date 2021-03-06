import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Names extends Component {
  static propTypes = {
    names: PropTypes.array.isRequired
  };

  state = {
    names: [],
    sortedNames: []
  };

  // Invoked  before calling the render method on the initial mount and updates.
  // Return an object to update the state, or null to update nothing
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.names !== nextProps.names) {
      console.log("getDerivedStateFromProps - Update Sort");
      const { names } = nextProps;
      let sortedNames = [...names];
      sortedNames.sort();
      return {
        names,
        sortedNames
      };
    }

    return null;
  }

  render() {
    const { noMoreNames, addName } = this.props;
    const { sortedNames } = this.state;

    return (
      <Fragment>
        <button disabled={noMoreNames} onClick={addName}>
          Add a Name
        </button>
        {sortedNames && (
          <ul>
            {sortedNames.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      </Fragment>
    );
  }
}

export default Names;
