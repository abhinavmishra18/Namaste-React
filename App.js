// Manipulate the HTML DOM using Javascript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone"
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React 

// Create nested React Elements 

// Create nested React Elements

const heading = React.createElement(
    "h1",
    {
      id: "title",
      style: {
        background:"red",
      },
      className:"title"
    },
    "heading"
  );
const heading1 = React.createElement(
    "h1",
    {
        id:"title",
    },
    "heading1"
);

const container = React.createElement(
    "div",
    {
        id: "conatiner" ,
    },
    [heading , heading1]
);

// create root using createRoot
const root = ReactDOM.createRoot(documant.getElementById("root"));
// passing react element inside root
root.render(container);
