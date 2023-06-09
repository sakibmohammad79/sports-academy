import React from "react";

const DisplayClass = ({ classs }) => {
  const { classImage,instructorName,  className, seats, price } = classs;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
        style={{width: '100%', height: '300px'}}
          src={classImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <h2 className="card-title">{instructorName}</h2>
        <h2 className="card-title">{seats}</h2>
        <h2 className="card-title">{price}</h2>
        
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Select Class</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayClass;
