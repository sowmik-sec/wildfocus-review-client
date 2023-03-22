import React from "react";

const Service = ({ service }) => {
  const { name, title, img, description } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={img} alt="photographer" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Service;
