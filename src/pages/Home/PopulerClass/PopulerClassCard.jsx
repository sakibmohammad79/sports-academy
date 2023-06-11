import React from 'react';

const PopulerClassCard = ({classes}) => {
    const {classImage} = classes;
    return (
        <div className=" shadow-xl">
      <figure>
        <img
        style={{height: '301px', width: '500px'}}
          src={classImage}
          alt="Shoes"
        />
      </figure>
    </div>
    );
};

export default PopulerClassCard;