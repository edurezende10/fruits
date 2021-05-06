import React, { useEffect, useState } from 'react';
import api from '../../services';
import './FruitDetail.css';

const FruitDetail = ({ match }) => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await api.instanceAxios.get();
      setFruits(request.data);
    }
    fetchData();
  }, []);

  const name = match.params.id;

  return (
    <section>
      {fruits
        .filter((fruit) => fruit.name === name)
        .map((fruit) => (
          <div key={fruit.name} className="container-fruit-detail">
            <ul className="main-fruit-detail">
              <li>
                <strong>Nome: </strong>
                 <span>{fruit.name}</span>
              </li>
              <li>
                <strong>Calorias: </strong> 
                <span>{fruit.calories}</span>
              </li>
              <li>
                <strong>Carboidratos: </strong>
                <span>{fruit.carbohydrates}</span>
              </li>
              <li>
                <strong> Fibras:</strong>
                 <span>{fruit.fiber}</span>
              </li>
              <li>
                <strong>Gordura: </strong> 
                <span> {fruit.blubber}</span>
               
              </li>
              <li>
                <strong>Porção: </strong> 
                <span>  {fruit.portion}</span>
              
              </li>
            </ul>
            <img
              className="fruit-img"
              src={fruit.photo}
              alt={fruit.name}
            />
          </div>
        ))}
    </section>
  );
};

export default FruitDetail;
