import React from "react";

const ClientCard = ({review}) => {
  const { clientName, rating, description, reviewTime, guestOrStudent } =
    review;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <img src="" alt="" />
        <h2 className="card-title">{clientName}</h2>
        <p>{description}</p>
        <div className="flex justify-between">
          <p>{reviewTime}</p>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
