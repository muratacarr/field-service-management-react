import React from "react";
import "./card.css";

const ServiceRequestCard = () => {
  return (
    <div className="col-md-4 card-container" style={{ cursor: "pointer" }}>
      <div className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              <i className="bx bxl-mailchimp"></i>
            </div>
            <div className="ms-2 c-details">
              <h6 className="mb-0">Murat ACAR</h6> <span>1 days ago</span>
            </div>
          </div>
          <div className="">
            <span class="badge bg-warning">Devam ediyor</span>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="heading">Armatür kartuşu sorunu</h3>
          <div className="mt-5">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequestCard;
