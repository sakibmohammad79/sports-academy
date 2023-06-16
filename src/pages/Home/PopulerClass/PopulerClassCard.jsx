import React from 'react';
import { Bounce, Flip, Zoom } from "react-awesome-reveal";

const PopulerClassCard = ({classes}) => {
    const {classImage} = classes;
    return (
        <Bounce>
          <div className=" shadow-xl">
      <figure>
        <img
        style={{height: '301px', width: '500px'}}
          src={classImage}
          alt="Shoes"
        />
      </figure>
    </div>
        </Bounce>
    );
};

export default PopulerClassCard;