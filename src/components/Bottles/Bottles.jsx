import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import {
  addToStoredCart,
  getStoreCart,
  removeFromCart,
} from '../../utilities/localstorage';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  const [cart, setCart] = useState([]);

  //useEffect

  useEffect(() => {
    const storedCartIds = getStoreCart();
    // console.log(storedCartIds);

    const storedCart = [];

    for (const id of storedCartIds) {
      console.log(id);
      const cartBottle = bottles.find(bottle => bottle.id === id);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }

    console.log('stored cart', storedCart);
    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = bottle => {
    console.log('bottle will be added to the cart', bottle);

    const newCart = [...cart, bottle];
    setCart(newCart);

    //save the bottle id to the local storage
    addToStoredCart(bottle.id);
  };

  const handleRemoveFromCart = id => {
    console.log('remove id from the cart', id);

    const remainingCart = cart.filter(bottle => bottle.id !== id);
    setCart(remainingCart);
    removeFromCart(id);
  };

  //console.log(bottles);
  return (
    <div>
      <h2>Bottles: {bottles.length}</h2>
      <h2>Added to cart: {cart.length}</h2>

      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

      <div className="bottles-container">
        {bottles.map(bottle => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
