import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", {  }, [
  React.createElement("h2", { id: "heading" }, "This heading is represented by :"),
  React.createElement(
    "h2",
    { class: "heading" },
    "'My Own Create React App'"
  ),
  React.createElement(
    "h2",
    { class: "sub_heading" },
    "Used :"
  ),
  React.createElement(
    "ul",
    { class: "items" },
    [React.createElement("li", {class: "item_list"}, "npm"),
        React.createElement("li", {class: "item_list"}, "parcel bundler"),
        React.createElement("li", {class: "item_list"}, "react & react-dom"),
        React.createElement("li", {class: "item_list"}, ".gitignore"),
    ]
    
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
