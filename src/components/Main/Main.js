import React, { useEffect, useState } from 'react';
import api from '../../services/index';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const Main = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await api.instanceAxios.get();
      setFruits(request.data);
      console.log(request.data[0].name);
    }
    fetchData();
  }, []);

  return (
      

        <main>
      {fruits.map((fruit, index) => (
          
        <Link to={`/${fruit.name}`} fruit={fruit}>
        <Card fruit={fruit} key={index} />

        </Link>
         
        
      ))}
    </main>

  
  );
};

export default Main;
