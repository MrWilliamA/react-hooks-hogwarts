import React from "react";
import Hog from "./Hog";

const Hoglist = ({ hogs }) => {
  return (
    <div class="hoglist">
      <Hog hogs={hogs} />
    </div>
  );
};

export default Hoglist;
