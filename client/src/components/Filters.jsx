import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";
import { filterPizza } from "../actions/pizzaActions";

const Filters = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("all");

  const handleSearch = () => {
    dispatch(filterPizza(searchKey, category));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="p-4 bg-warning mt-4">
      <Form>
        <Row>
          <Col>
            <Form.Control
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="search pizza"
            />
          </Col>
          <Col>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>all</option>
              <option>veg</option>
              <option>nonveg</option>
            </Form.Select>
          </Col>
          <Col>
            <Button onClick={handleSearch}>Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filters;
