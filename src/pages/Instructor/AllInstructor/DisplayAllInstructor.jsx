import React from "react";

const DisplayAllInstructor = ({ instructor }) => {
  const {instructorImage, instructorName, instructorEmail, className} = instructor;
  return (
    <div className="card w-86 bg-lime-100 shadow-xl ">
      <figure>
        <img
        style={{height: '300px', width: '100%'}}
          src={instructorImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body font-semibold">
        <h2 className="card-title">{instructorName}</h2>
        <p>Email: {instructorEmail}</p>
        <p>Class: {className}</p>
        <div className="card-actions justify-end">
          <button className="btn font-bold text-white bg-lime-500">Show Classes</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayAllInstructor;
