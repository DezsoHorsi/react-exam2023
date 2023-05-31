import React, { useEffect, useState } from 'react';
import Laptop from './components/Laptop';
import LoadingMask from './components/LoadingMask';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const response = await fetch('https://demoapi.com/api/laptop');
        const data = await response.json();
        setLaptops(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Laptops</h1>
      {loading ? (
        <LoadingMask />
      ) : (
        laptops.map((laptop, index) => (
          <Laptop key={index} laptop={laptop} />
        ))
      )}
    </div>
  );
};

export default App;