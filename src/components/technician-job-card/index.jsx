import React, { useEffect, useState } from "react";
import "./technician-job-card.css";
import { Link } from "react-router-dom";

const TechnicianJobCard = ({ item }) => {
  console.log(item);
  let [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5155/api/Statuses/GetStatuses", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        res.json().then((response) => {
          console.log(response.data);
          setStatuses(response.data);
        });
      })
      .catch((err) => {
        console.log(response.data);
        toast.error("Hata :" + err.message);
      });
  }, []);

  return (
    <div className="col-4 ">
      <div
        className="card card-container p-3 mb-2"
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              <i className="bx bxl-mailchimp"></i>
            </div>
            <div className="ms-2 c-details">
              <h6 className="mb-0">
                {item.serviceRequest.appUser.name +
                  " " +
                  item.serviceRequest.appUser.surname}
              </h6>{" "}
              <span>1 days ago</span>
            </div>
          </div>
          <div className="">
            <span className="badge bg-warning">
              {item.serviceRequest.status.name}
            </span>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="heading">{item.serviceRequest.issueDescription}</h3>
          <div className="mt-5">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={
                  item
                    ? { width: item.serviceRequest.status.percent + "%" }
                    : { width: "20%" }
                }
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <div className="form-group">
            <select className="form-select" id="exampleSelect1">
              {statuses &&
                statuses.map((status, index) => {
                  if (status.showTechnician) {
                    if (item.serviceRequest.statusId == status.id) {
                      return (
                        <option selected value={status.id} key={index}>
                          {status.name}
                        </option>
                      );
                    } else {
                      return (
                        <option value={status.id} key={index}>
                          {status.name}
                        </option>
                      );
                    }
                  }
                })}
            </select>
          </div>
          <Link
            type="button"
            to="/teknisyen/fatura-olustur"
            className="btn btn-outline-warning"
          >
            Fatura Oluştur
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechnicianJobCard;
