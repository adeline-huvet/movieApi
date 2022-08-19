import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="container-fluid">
      <ul>
        <NavLink to="/">
          <li>Acceuil</li>
        </NavLink>
        <NavLink to="/beggin">
          <li>Commencer</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
