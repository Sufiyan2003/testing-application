import React from "react";

function Card({ title, content }) {
  return (
    <div className="card-container card shadow-lg 20">
      <div className="card-header">{title}</div>
      <div className="card-body">{content}</div>
    </div>
  );
}

export default Card;
