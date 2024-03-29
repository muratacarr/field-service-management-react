import React, { useState } from "react";
import "../cards/card.css";
import { useLocation } from "react-router-dom";
import IslerModal from "../../pages/bayi/isler/isler-modal";

const BayiJobCard = ({ item, setRerender, rerender }) => {
  const location = useLocation();
  const { hash, pathname, search } = location;
  console.log(item);
  return (
    <>
      <div
        className="col-4"
        data-bs-toggle="modal"
        data-bs-target={"#exampleModal" + item.id}
      >
        <div
          className="card p-3 mb-2 card-container"
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
              <span
                className="badge"
                style={
                  item && {
                    backgroundColor: item.serviceRequest.status.color,
                  }
                }
              >
                {item.serviceRequest.status.name}
              </span>
            </div>
          </div>
          <div className="mt-5">
            <h5 className="heading">{item.serviceRequest.issueDescription}</h5>
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
          <div className="d-flex justify-content-end  mt-3"></div>
        </div>
      </div>
      <IslerModal item={item} setRerender={setRerender} rerender={rerender} />
    </>
  );
};

export default BayiJobCard;
