import React, { useState, useEffect } from "react";
import "./DashBoard.css";
import Cards from "./Cards";
const DashBoard = () => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  const getElm = (arr) => {
    const newarr = arr.filter((elm) => {
      if (elm.status == "Past") {
        return elm;
      }
    });
    setData(newarr);
  };

  const getElm1 = (arr) => {
    const newarr = arr.filter((elm) => {
      if (elm.status == "Upcoming") {
        return elm;
      }
    });
    setItem(newarr);
  };
  useEffect(() => {
    const arr = localStorage.getItem("arry");
    const arr2 = JSON.parse(arr);
    getElm(arr2);
    getElm1(arr2);
  }, []);
  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: "20px" }}>Past Events</h3>
      <div className="left">
        {data.length > 0
          ? data.map((val) => {
              return <Cards val={val} />;
            })
          : "No Event Found"}
      </div>
      <h3 style={{ textAlign: "center" }}>Upcoming Events</h3>
      <div className="right">
        {item.length > 0
          ? item.map((val) => {
              return <Cards val={val} />;
            })
          : "No Event Found"}
      </div>
    </>
  );
};

export default DashBoard;
