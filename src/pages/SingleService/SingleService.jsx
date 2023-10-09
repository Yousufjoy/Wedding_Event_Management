import React from "react";

const SingleService = ({ service }) => {
  const { id, name, description, image, price, short_description } = service;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="description">{description}</p>{" "}
          {/* Use a class for the description */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
