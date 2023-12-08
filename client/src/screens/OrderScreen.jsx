import React, { useEffect } from "react";
import { getUserOrders } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
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
    <div className="container">
      <h1 className="text-center mb-4 mt-4">Your Orders</h1>
      {loading && <Loader />}
      {error && <Error error="Something went wrong" />}
      {orders &&
        orders.map((order) => (
          <Card className="mb-3">
            <Card.Body>
              <Row>
                <Col md={4}>
                  <h4>Items:</h4>
                  {order.orderItems.map((item) => (
                    <div className="mb-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100px",
                          height: "100px",
                          marginRight: "10px",
                        }}
                      />
                      <span>
                        {item.name} [{item.variant}] * {item.quantity} = €
                        {item.price}
                      </span>
                    </div>
                  ))}
                </Col>
                <Col md={4}>
                  <h4>Address</h4>
                  <h6>Street: {order.shippingAddress.street}</h6>
                  <h6>City: {order.shippingAddress.city}</h6>
                  <h6>Zip code: {order.shippingAddress.zipCode}</h6>
                  <h6>Country: {order.shippingAddress.country}</h6>
                </Col>
                <Col md={4}>
                  <h4>Order Info</h4>
                  <h6>Order Amount: €{order.orderAmount}</h6>
                  <h6>Transaction Id: {order.transactionId}</h6>
                  <h6>Order Id: {order._id}</h6>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default OrderScreen;
