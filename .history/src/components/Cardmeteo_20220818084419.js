import React from "react";

const Cardmeteo = ({ data }) => {
  return (
    <div>
      <li>
        <h4>{data.name}</h4>
        <h5>{data.main.temp} + C° </h5>
      </li>
    </div>
  );
};

export default Cardmeteo;
