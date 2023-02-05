import React from 'react';
import ReactDom from "react-dom";

const LearnReactCreateElement = () => {
  return React.createElement("h1", { className: "font-mono text-3xl text-yellow font-bold"}, "This is a heading!");
}

// ReactDom.render(React.createElement(LearnReactC  reateElement), document.getElementById("root"));
export default LearnReactCreateElement;
