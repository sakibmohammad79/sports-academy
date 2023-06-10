import React from "react";

const ClientCard = ({review}) => {
  const { image, clientName, rating, description, reviewTime, guestOrStudent } =
    review;
  return (
    <div className="card w-86  bg-base-100 shadow-xl">
      <div className="card-body">
        <img className="rounded-full  border-2 border-yellow-500 " style={{width: '50px', height: '50px'}} src={image} alt="" />
        <h2 className="card-title">{clientName}</h2>
        <p>{description}</p>
        <div className="flex justify-between">
          <p>{reviewTime}</p>
          <span>{guestOrStudent}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
