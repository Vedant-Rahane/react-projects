import React from "react";

function Heading() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return (
    <div className="container">
      <h2 id="heading">{today.toLocaleDateString("en-US", options)}</h2>
    </div>
  );
}

export default Heading;
