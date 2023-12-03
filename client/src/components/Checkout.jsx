import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderAction";

const Checkout = ({ subTotal }) => {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };
  return (
    <StripeCheckout
      amount={subTotal * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51OJ1SOBYR2toddcKGjZR9OvpW0p1qtE8YvICvqvINW9NlFy1cBcv6FUhHsyK6B05Hc4TUR04VCa1wBDZJGE9c8xb00M3jsSucz"
      currency="EUR"
    >
      <Button>Pay Now</Button>
    </StripeCheckout>
  );
};

export default Checkout;
