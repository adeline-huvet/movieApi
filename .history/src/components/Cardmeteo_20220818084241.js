import React from "react";

const Cardmeteo = ({ data }) => {
  return (
    <div>
      <li>
        <h4>{data.name}</h4>
      </li>
    </div>
  );
};

export default Cardmeteo;
