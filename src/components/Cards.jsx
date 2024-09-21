import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./DashBoard.css";
const Cards = ({ val }) => {
  console.log(val.date.year);
  return (
    <Card className="cards">
      <div className="img_card">
        <Card.Img variant="top" src={val.img} className="image" />
      </div>
      <Card.Body>
        <Card.Title>{val.heading}</Card.Title>
        <Card.Text>{val.description}</Card.Text>
        <div className="innner_info">
          <Card.Text>{`Date: ${val.date.day} ${val.date.month}, ${val.date.year}`}</Card.Text>
          <Card.Text>{val.status}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
