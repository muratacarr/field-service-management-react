import React from "react";
import "./technician-job-card.css";
import { Link } from "react-router-dom";

const TechnicianJobCard = ({ item }) => {
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
              <h6 className="mb-0">Murat ACAR</h6> <span>1 days ago</span>
            </div>
          </div>
          <div className="">
            <span className="badge bg-warning">Devam ediyor</span>
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
        <div className="d-flex justify-content-between mt-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <button type="button" className="btn btn-info">
              Durum
            </button>
            <div className="btn-group" role="group">
              <button
                id="btnGroupDrop3"
                type="button"
                className="btn btn-info dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div className="dropdown-menu" aria-labelledby="btnGroupDrop3">
                <a className="dropdown-item" href="#">
                  İş üzerine alındı
                </a>
                <a className="dropdown-item" href="#">
                  Adrese geliyor
                </a>
                <a className="dropdown-item" href="#">
                  Adreste çalışma yapılıyor
                </a>
              </div>
            </div>
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
