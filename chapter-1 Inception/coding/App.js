// 1.
// create a single element
// const heading = React.createElement("h1", {id : "heading"}, "Hello world from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// // this "heading" is the React Element
// // React element is nothing but a normal Javascript Object
// console.log(heading);

// 2.
// create a nested element
// example : -
/**
 *     <div class="parent">
        <div class="child">
            <h1>I am a child H1 Tag</h1>
        </div>
    </div>
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am a child H1 Tag")
//   )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// this "heading" is the React Element
// React element is nothing but a normal Javascript Object
// console.log(parent);

// 3.
// create a siblings (more than 1 children) using an array
// example : -
/**
 *     <div class="parent">
        <div class="child">
            <h1>I am a child H1 Tag</h1>
            <h2>I am a child H2 Tag</h2>
        </div>
    </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a child H1 Tag"),
    React.createElement("h2", {}, "I am a child H2 Tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// this "heading" is the React Element
// React element is nothing but a normal Javascript Object
console.log(parent);
