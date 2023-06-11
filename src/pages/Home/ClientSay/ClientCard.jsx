import React from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ClientCard = ({review}) => {
  const { image, clientName, rating, description, reviewTime, guestOrStudent } =
    review;
  return (
    <div className="card w-86  bg-lime-100 shadow-xl">
      <div className="card-body">
        <img className="rounded-full  border-2 border-yellow-500 " style={{width: '50px', height: '50px'}} src={image} alt="" />
        <Rating
          style={{ maxWidth: 120 }}
          value={rating}
          readOnly
        />
        <h2 className="card-title">{clientName}</h2>
        <p className="font-medium">{description}</p>
        <div className="flex justify-between font-medium">
          <p>{reviewTime}</p>
          <span>{guestOrStudent}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
