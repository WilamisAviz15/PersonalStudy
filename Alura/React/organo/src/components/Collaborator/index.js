import React from "react";
import "./styles.css";

const Collaborator = ({ name, role, image, backgroundColor }) => {
  return (
    <div className="collaborator">
      <div className="header" style={{ backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
