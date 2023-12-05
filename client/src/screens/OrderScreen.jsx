import React, { useEffect } from "react";
import { getUserOrders } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Error from "../components/Error";

const OrderScreen = () => {
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = orderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <>
      <h1>Your Orders</h1>
      {loading && <Loader />}
      {error && <Error error="Something went wrong" />}
      {orders &&
        orders.map((order) => (
          <Row>
            <Col md={4}>
              <h4>Items:</h4>
              {order.orderItems.map((item) => (
                <h6 key={item.name}>
                  {item.name} [{item.variant}] * {item.quantity} = {item.price}
                </h6>
              ))}
            </Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
          </Row>
        ))}
    </>
  );
};

export default OrderScreen;
