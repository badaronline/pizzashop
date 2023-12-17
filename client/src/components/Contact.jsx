import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Badar Online Pizza Shop</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
              unde similique aspernatur ea, dolorem sit esse blanditiis quaerat
              consequuntur atque in. Quidem pariatur veritatis aliquid! Eligendi
              quasi suscipit aliquam magnam aperiam fugiat commodi eaque
              corrupti tenetur voluptatibus iste non sint veniam perferendis
              quas, unde in? Animi necessitatibus maiores aspernatur.
              Aspernatur?
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning" colSpan={3}>
                    ---Contact Details---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>12345678</td>
                </tr>
                <tr>
                  <td>
                    <FaMobileAlt />
                  </td>
                  <td>Call</td>
                  <td>12345678</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>abc@abc.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/bbqpizza.jpg"
              style={{ width: "100%", height: "95%" }}
              alt="Pizza"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
