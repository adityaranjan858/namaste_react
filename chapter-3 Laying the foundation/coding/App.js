import React from "react";
import ReactDOM from "react-dom/client"

//* using pure core react
/*
*behind the scene, how it's converting :
React.createElement => ReactElement-JS Object => HTMLElement(render)
*/

/* 
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a child H1 Tag"),
    React.createElement("h2", {}, "I am a child H2 Tag"),
  ])
);
 */
//* ********************



//* using JSX

/*
* behind the scene, how it's converting :
JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
*/

//* this is perfectly fine for single line 
// const jsx_heading = <h1 className="heading" tabIndex="1">Namaste React using JSX</h1>

//! but for multiple line , we must have to use () brackets. So Babel can understands where it is starting and ending.
// const jsx_multiline_heading = (<h1 className="heading" tabIndex="1">
//   Namaste React using JSX 
//   </h1>)

// const root = ReactDOM.createRoot(document.getElementById("root"));

// ! Render a React Element 
// root.render(jsx_heading);

// this "jsx_heading" is the React Element
// React element is nothing but a normal Javascript Object

// !=================================================================
// * Create a React Functional Component
// const Heading = ()=>{
//   return <h1>Namaste React Functional Component</h1>
// }

const Title = ()=>{
  return <h1>Functional Component</h1>
}

// React Element
const number = 10000;


// nested element
//* Component Composition : component inside component 
const Heading2 = ()=>( 
<div id="container">
  <Title/>   
  {number}  {/* we can use React element using parenthesis.  */}
  <h1 className="heading">Namaste React Functional Component</h1>
</div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

// ! Render a React component
root.render(<Heading2/>)

