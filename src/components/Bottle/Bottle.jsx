import React from 'react';
import './Bottle.css';

const Bottle = ({ bottle, handleAddToCart }) => {
  // console.log(bottle);

  const { img, name, price, stock } = bottle;

  return (
    <div className="bottle card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h2>${price}</h2>
      <h2>Available: {stock}</h2>
      <button onClick={() => handleAddToCart(bottle)}>Buy now</button>
    </div>
  );
};

export default Bottle;
