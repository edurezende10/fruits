import React from 'react';
import './Card.css'

const Card = (props) => {
  const { fruit } = props;
  return (
    <div className="container-fruit">
      <div className="wrapper">

        <h2>{fruit.name}</h2>
        <img src={fruit.photo} alt={fruit.name} />
      </div>
    </div>
  );
};

export default Card;
