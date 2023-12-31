import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filters from "../components/Filters";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error>Error while fetching Pizzas{error}</Error>
        ) : (
          <Row>
            <Filters />
            {pizzas.map((pizza) => (
              <Col md={4}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
