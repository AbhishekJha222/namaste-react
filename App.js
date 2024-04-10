// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Inception of React JS"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
        React.createElement("div", { id: "child"}, [
              React.createElement("h1", {}, "I am H1 tag !!"),
              React.createElement("h3", {}, "I am second child !!"),
          ]),
            React.createElement("div", { id: "child2"}, [ 
                      React.createElement("h1", {}, "I am H2 tag !!"),
                      React.createElement("h3", {}, "I am second child !!"),
                      React.createElement("h3", {}, "I am third child"),
            ]),
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);