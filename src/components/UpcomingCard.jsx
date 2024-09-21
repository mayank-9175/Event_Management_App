import React from "react";
import Card from "react-bootstrap/Card";
const Cards = ({ val }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        height: "20%",
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        marginBottom: "20px",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "20px auto",
      }}
    >
      <Card>
        <Card.Img
          variant="top"
          src={val.img}
          style={{ width: "100%", padding: 0, margin: 0 }}
        />
        <Card.Body>
          <Card.Title>{val.heading}</Card.Title>
          <Card.Text>{val.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
