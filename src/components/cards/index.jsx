import React from "react";
import "./card.css";
import PuanlamaModal from "../../pages/musteri/taleplerim/puanlama-modal";
import { useLocation } from "react-router-dom";

const ServiceRequestCard = () => {
  const location = useLocation();
  const { hash, pathname, search } = location;
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
        <div className="d-flex justify-content-end  mt-3">
          {pathname == "/musteri/taleplerim" ? (
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
            >
              Puanla
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <PuanlamaModal />
    </div>
  );
};

export default ServiceRequestCard;
