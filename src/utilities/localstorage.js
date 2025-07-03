/**
 * 1.to get something from localStorage you will get it as an string
 * 2.convert this to javascript object/array
 * 3.
 */

const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem('cart');

  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};

const saveCartToLocalStorage = cart => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
};

const addItemToCartLocalStorage = id => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, id];

  //save newCart to the local storage
  saveCartToLocalStorage(newCart);
};

const removeFromLocalstorage = id => {
  const storedCart = getCartFromLocalStorage();
  const remainingCart = storedCart.filter(storedId => storedId !== id);
  saveCartToLocalStorage(remainingCart);
};

export {
  getCartFromLocalStorage as getStoreCart,
  addItemToCartLocalStorage as addToStoredCart,
  removeFromLocalstorage as removeFromCart,
};
