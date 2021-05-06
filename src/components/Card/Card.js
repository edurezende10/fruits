import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';


const Card = (props) => {
  const { fruit } = props;
  return (
    <div className="container-fruit">
      <div className="wrapper">
      <Link className="fruit-link"  to={`/${fruit.name}`} fruit={fruit}>

        <h2>{fruit.name}</h2>
      </Link>
      <Link className="fruit-link" to={`/${fruit.name}`} fruit={fruit}>

        <img src={fruit.photo} alt={fruit.name} />
      </Link>
      </div>
    </div>
  );
};

export default Card;
