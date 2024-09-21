import React, { useState } from "react";
import "./EventList.css";
import { useNavigate } from "react-router-dom";
const EventList = ({ item, setItem }) => {
  const navigate = useNavigate();
  const arr = localStorage.getItem("arry");
  const arr2 = JSON.parse(arr);
  const pastData = (elm) => {
    const newData =
      arr2.length > 0
        ? arr2.filter((val) => {
            return val.status == elm;
          })
        : "";
    setItem(newData);
  };
  const newDat = () => {
    setItem(arr2);
  };
  const getId = (val) => {
    localStorage.setItem("id", val);
    navigate("/event_details");
  };
  return (
    <>
      <div className="event_list">
        <div className="btns">
          <button className="btn1" onClick={() => newDat()}>
            ALL Events
          </button>
          <button className="btn3" onClick={() => pastData("Past")}>
            Past Events
          </button>
          <button className="btn2" onClick={() => pastData("Upcoming")}>
            UpComing Events
          </button>
        </div>
        <div className="card_items">
          {item.length > 0
            ? item.map((val) => {
                const { id, heading, date, location, status, img } = val;
                return (
                  <div className="inner_div" onClick={() => getId(id)}>
                    <img src={img} alt={id} />
                    <div className="info_status">
                      <h3>
                        <span>Title:</span> {heading}
                      </h3>
                      <p>
                        <span>Status: </span>
                        {status} Event
                      </p>
                      <p>{`Date: ${date.day} ${date.month}, ${date.year}`}</p>
                      <p>{`Location: ${location}`}</p>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default EventList;
