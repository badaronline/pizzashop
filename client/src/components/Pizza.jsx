import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";

const Pizza = ({ pizza }) => {
  const [variant, setVariant] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch(function)
  const addToCartHandler = () => {
    dispatch(addToCart(pizza,quantity, variant ))
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem", margin: "20px" }}>
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "180px", cursor: "pointer" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Variants</h6>
                <select
                  value={variant}
                  onChange={(e) => setVariant(e.target.value)}
                >
                  {pizza.variants.map((variant) => (
                    <option>{variant}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col
              md={6}
              style={{
                fontWeight: "bold",
                margin: "auto",
              }}
            >
              Price: €{pizza.prices[0][variant] * quantity}
            </Col>
            <Col md={6}>
              <Button className="bg-warning text-white">Add to cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={pizza.image}
              style={{ height: "180px" }}
            />
          </div>
          <div>
            <h5>Description: </h5>
            <h6> {pizza.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
