import React, { useState } from 'react';

const Laptop = ({ laptop }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <h3>{laptop.name}</h3>
      <button onClick={handleToggleDetails}>
        {showDetails ? 'Show less' : 'Show more'}
      </button>
      {showDetails && (
        <div>
          <p>Brand: {laptop.brand}</p>
          <p>Weight: {laptop.weight}</p>
        </div>
      )}
    </div>
  );
};

export default Laptop;
