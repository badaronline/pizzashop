import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";
import { clearCart } from "../actions/cartAction";

const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;

  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    dispatch(clearCart());
  };

  const userLogin = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userLogin;

  const [isLoggedIn, setIsLoggedIn] = useState(!!currentUser);

  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  return (
    <>
      {cartItems.length === 0 ? (
        <p style={{ color: "red" }}>
          Your cart is empty. Add items before proceeding to checkout.
        </p>
      ) : (
        <>
          {loading && <Loader />}
          {error && <Error error="Something went wrong" />}
          {success && <Success success="Order placed successfully" />}
          {isLoggedIn ? (
            <StripeCheckout
              amount={subTotal * 100}
              shippingAddress
              token={tokenHandler}
              stripeKey="pk_test_51OJ1SOBYR2toddcKGjZR9OvpW0p1qtE8YvICvqvINW9NlFy1cBcv6FUhHsyK6B05Hc4TUR04VCa1wBDZJGE9c8xb00M3jsSucz"
              currency="EUR"
            >
              <Button>Pay Now</Button>
            </StripeCheckout>
          ) : (
            <p>Please login to proceed with the payment.</p>
          )}
        </>
      )}
    </>
  );
};

export default Checkout;
