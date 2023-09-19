import React from "react";

function Card({ title, content }) {
  return (
    <div className="card shadow-lg 20">
      <div className="card-header">{title}</div>
      <div className="card-body w-50">{content}</div>
    </div>
  );
}

export default Card;
