import React from "react";

const Cardmeteo = ({ prevision, index }) => {
  return (
    <div>
      <li>
        <h4>{prevision.name}</h4>
      </li>
    </div>
  );
};

export default Cardmeteo;
