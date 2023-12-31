export const addToCart = (pizza, quantity, variant) => (dispatch, getState) => {
  const cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    variant: variant,
    quantity: Number(quantity),
    prices: pizza.prices,
    price: pizza.prices[0][variant] * quantity,
  };
  if (cartItem.quantity > 10) {
    alert("You can only add 10 pizzas");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartReducer.cartItems)
      );
    }
  }
};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: "CLEAR_CART" });
  localStorage.removeItem("cartItems"); // to clear the cart from local storage
};
