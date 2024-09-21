import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./EventForm.css";
const EditForm = () => {
  const navigate = useNavigate();
  let day;
  let month1;
  let year1;
  let final_day;
  const [update, setUpdate] = useState({
    id: Math.floor(Math.random() * (15 - 9) + 9),
    heading: "",
    description: "",
    location: "",
    status: "",
    date: { year: "", month: "", day: "" },
    img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F817278869%2F1953598950733%2F1%2Foriginal.20240730-175538?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C94%2C1000%2C500&s=f65d9781fae78ce1a7238bbe2262d579",
  });
  const dateVal = (e) => {
    const dat = e.target.value;
    const dat1 = new Date(dat);
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    day = dat1.getUTCDate() - 1;
    const formula = day % 7;
    final_day = week[formula];
    month1 = months[dat1.getUTCMonth()];
    year1 = dat1.getUTCFullYear();
    const new_date = {
      ...update.date,
      year: year1,
      month: month1,
      day: final_day,
    };
    setUpdate({ ...update, date: new_date });
  };
  const getElm = (arr) => {
    const id = localStorage.getItem("id");
    const newarr = arr.filter((elm) => {
      return id == elm.id;
    });
    setUpdate({
      ...update,
      id: newarr[0].id,
      heading: newarr[0].heading,
      description: newarr[0].description,
      location: newarr[0].location,
      status: newarr[0].status,
      date: newarr[0].date,
    });
  };
  const changeVal = (e) => {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(update);
    const arr2 = localStorage.setItem("arr3", JSON.stringify(update));
    const arr3 = localStorage.getItem("arry");
    const update_arry = JSON.parse(arr3);
    const id = localStorage.getItem("id");
    const arr1 = update_arry.forEach((elm, index) => {
      if (update.id == elm.id) {
        update_arry[index] = update;
      }
    });
    localStorage.setItem("arry", JSON.stringify(update_arry));
    navigate("/event_details");
  };
  useEffect(() => {
    const arr = localStorage.getItem("arry");
    const arr2 = JSON.parse(arr);
    getElm(arr2);
  }, []);
  return (
    <div className="form">
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="heading"
            placeholder="Enter Title of a event"
            value={update.heading}
            onChange={changeVal}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter Description of a event"
            value={update.description}
            onChange={changeVal}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" onChange={dateVal} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Location of a event"
            name="location"
            value={update.location}
            onChange={changeVal}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Upcoming / Past"
            name="status"
            style={{ textTransform: "capitalize" }}
            value={update.status}
            onChange={changeVal}
          />
        </Form.Group>

        <img src="" name="img" />

        <Button variant="primary" type="submit" className="button">
          Edit Event
        </Button>
      </Form>
    </div>
  );
};

export default EditForm;
