import React, { useEffect, useState } from "react";
import "./EventDetails.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
const EventDetails = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getElm = (arr) => {
    const id = localStorage.getItem("id");
    const newarr = arr.filter((elm) => {
      if (elm.id == id) {
        return elm;
      }
    });
    setData(newarr);
    
  };
  const delEvent = () => {
    const id = localStorage.getItem("id");
    const newArr = data.filter((elm) => {
      if (id == elm.id) {
        localStorage.removeItem(elm);
        return null;
      }
    });
    setData(newArr);
    setTimeout(() => {
      navigate("/event_list");
    }, 600);
  };
  const EditEvent = () => {
    navigate("/edit_form")
  }
  useEffect(() => {
    const arr = localStorage.getItem("arry");
    const arr2 = JSON.parse(arr);
    getElm(arr2);
  }, []);

  return (
    <>
      <div className="box">
        {data ? (
          data.map((val) => {
            const { id, heading, date, location, status, img, description } =val;
            return (
              <div className="inner_box">
                <div className="img">
                  <img src={img} alt={id} />
                </div>
                <div className="information">
                  <div className="icons">
                    <EditIcon
                      style={{
                        marginRight: "10px",
                        color: "green",
                        cursor: "pointer",
                      }}
                      onClick={() => EditEvent()}
                    />
                    <DeleteIcon
                      onClick={() => delEvent()}
                      title="Delete Event"
                      style={{ color: "red", cursor: "pointer" }}
                    />
                  </div>
                  <h3>
                    <span>Title:</span> {heading}
                  </h3>
                  <p>
                    <span>Status: </span>
                    {status} Event
                  </p>
                  <p>{`Date: ${date.day} ${date.month}, ${date.year}`}</p>
                  <p>{`Location: ${location}`}</p>
                  <p>{`Description: ${description}`}</p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Event Available</h1>
        )}
      </div>
    </>
  );
};

export default EventDetails;
