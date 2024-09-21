import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { eventList } from "../api/api";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./EventForm.css";
const EventForm = () => {
  const navigate = useNavigate();
  let day;
  let month1;
  let year1;
  let final_day;
  const [data, setData] = useState({
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
      ...data.date,
      year: year1,
      month: month1,
      day: final_day,
    };
    setData({ ...data, date: new_date });
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    setData(() => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  const passData = (e) => {
    e.preventDefault();
    const { heading, date, location, status, description } = data;
    if (!heading || !date || !location || !status || !description) {
      alert("Fields are Empty");
    } else {
      const val =
        eventList.length > 0 && data != "" ? eventList.concat(data) : eventList;
      localStorage.setItem("arry", JSON.stringify(val));
      navigate("/event_list");
    }
  };

  return (
    <div className="form">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="heading"
            onChange={getValue}
            placeholder="Enter Title of a event"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            onChange={getValue}
            placeholder="Enter Description of a event"
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
            onChange={getValue}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Upcoming / Past"
            name="status"
            onChange={getValue}
            style={{ textTransform: "capitalize" }}
          />
        </Form.Group>

        <img src="" name="img" />

        <Button
          variant="primary"
          onClick={passData}
          type="submit"
          className="button"
        >
          Add Event
        </Button>
      </Form>
    </div>
  );
};

export default EventForm;
