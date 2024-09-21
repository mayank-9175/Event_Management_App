import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { eventList } from "../api/api";
import "./Header.css";
const Header = () => {
  const storeitem = () => {
    localStorage.setItem("arry", JSON.stringify(eventList));
  };
  useEffect(() => {
    storeitem();
  }, []);
  return (
    <div className="nav">
      <div className="list">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/event_list">Event List</NavLink>
        <NavLink to="/event_details">Event Details</NavLink>
        <NavLink to="/event_form">Event Form</NavLink>
      </div>
    </div>
  );
};

export default Header;
