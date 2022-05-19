import React, { useState } from "react";

const Hog = ({ hogs }) => {
  const [active, setActive] = useState(false);

  function showDetails(e) {
    console.log(e.target);
    setActive((active) => !active);
  }

  function singleHog(hog) {
    return (
      <>
        <p>{hog.weight}</p>
        <p>{hog.specialty}</p>
        <p>{hog.greased ? "Greased" : "Not Greased"}</p>
        <p>{hog["highest medal achieved"]}</p>
      </>
    );
  }

  return (
    <>
      {hogs.map((hog) => {
        return (
          <div key={hog.name} class="card">
            <p onClick={showDetails}>{hog.name}</p>
            {/* <p> {active ? <HiddenDetails hogDetails={hogs} /> : ""}</p> */}
            {/* <p> {active ? hog.weight : ""}</p>*/}
            {active ? singleHog(hog) : ""}
            <img src={hog.image} alt={hog.name} />
          </div>
        );
      })}
    </>
  );
};

export default Hog;
