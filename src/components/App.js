import React from "react";
import hogs from "../porkers_data.js";
import Hoglist from "./Hoglist.js";
import Nav from "./Nav";

function App() {
  console.log(hogs);
  return (
    <div className="App">
      <Nav />
      <Hoglist hogs={hogs} />
    </div>
  );
}

export default App;

// single hog component
// HogList Component filtering each hog with select form, displays name and image
//  chain the filter so multiple selections can be made

// hidden items for current hog only
