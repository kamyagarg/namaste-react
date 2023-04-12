/*
// we are creating a h1 element, which is core react thing.
// Hence, React.createElement
const heading = React.createElement("h1", { id: "heading1" }, "Helllo form react");
const heading2 = React.createElement("h1", { id: "heading2" }, "Helllo form react 2");

console.log("heading:", heading) //object


// Here we need to put 'heading' in the browser,
// thats why creating a root inside the DOM.
// Hence, ReactDOM.createRoot()
const root = ReactDOM.createRoot(document.getElementById("root"));


// This render method takes the heading object and 
// converts it into a tag and put it on the DOM 
root.render(heading);
root.render(heading2);

*/

// Now we will create a heirarchy, like given below
/*
*
* <div id="parent"> 
*   <div id="child1">
*     <h1> I am h1 tag </h1>
*     <h2> I am h2 tag </h2>
*   </div>
*   <div id="child2">
*     <h1> I am h1 tag </h1>
*     <h2> I am h2 tag </h2>
*   </div>
* </div>
*   parent is ReactElement(Object) => converted into html tag by => ReactDOM() => root.render()
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child1" },
      [
        React.createElement(
          "h1",
          {},
          "I am h1 tag"
        ),
        React.createElement(
          "h2",
          {},
          "I am h2 tag"
        ),
      ]
    ),
    React.createElement(
      "div",
      { id: "child2" },
      [
        React.createElement(
          "h1",
          {},
          "I am h1 tag"
        ),
        React.createElement(
          "h2",
          {},
          "I am h2 tag"
        ),
      ]
    )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);