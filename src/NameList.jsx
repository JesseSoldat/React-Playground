import React from "react";
import Names from "./Names";

const NameList = ({ color, names, noMoreNames, addName, changeColor }) => {
  return (
    <div style={{ color: color }}>
      <button onClick={changeColor}>Change the color</button>
      <Names names={names} noMoreNames={noMoreNames} addName={addName} />
    </div>
  );
};

export default NameList;
