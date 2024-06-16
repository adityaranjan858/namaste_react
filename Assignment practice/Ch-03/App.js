import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

// Created using React.createElement()
const title = React.createElement("div", {}, [
  "",
  React.createElement(
    "p",
    { className: "heading" },
    "Created a Nested header Element using 'React.createElement'"
  ),
  React.createElement("h1", { className: "title" }, "This is first title"),
  React.createElement("h2", { className: "title" }, "This is second title"),
  React.createElement("h3", { className: "title" }, "This is third title"),
]);

// Created using JSX
const jsx_title = (
  <div>
    <p className="heading">Created a Nested header Element using 'JSX'</p>
    <h1 className="title">This is first title</h1>
    <h2 className="title">This is second title</h2>
    <h3 className="title">This is third title</h3>
  </div>
);

// Created using Functional Component
const Title = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
      </div>
      <div className="container">
        <div className="row text-center pt-5">
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{title}</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{jsx_title}</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  <p className="heading">
                    Created a Nested header Element using 'Functional Component'
                  </p>
                  <h1 className="title">This is first title</h1>
                  <h2 className="title">This is second title</h2>
                  <h3 className="title">This is third title</h3>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Title />);
