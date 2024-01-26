import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const IslerModal = ({ item, setRerender, rerender }) => {
  const inputRef = useRef(null);
  let [statuses, setStatuses] = useState([]);
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5155/api/Statuses/GetStatuses", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        res.json().then((response) => {
          setStatuses(response.data);
        });
      })
      .catch((err) => {
        console.log(response.data);
        toast.error("Hata :" + err.message);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5155/api/User/GetTechnicians", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        res.json().then((response) => {
          setTechnicians(response.data);
        });
      })
      .catch((err) => {
        console.log(response.data);
        toast.error("Hata :" + err.message);
      });
  }, []);

  const HandleSelectChange = async (event) => {
    event.preventDefault();
    await fetch(
      "http://localhost:5155/api/ServiceRequests/UpdateStatusOfServiceRequest",
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          id: item.serviceRequest.id,
          statusId: event.target.value,
        }),
      }
    )
      .then((res) => {
        res.json().then((response) => {
          inputRef.current.click();
          toast.success("Durum değiştirildi.");
          setRerender(!rerender);
        });
      })
      .catch((err) => {
        console.log(response.data);
        toast.error("Hata :" + err.message);
      });
  };

  return (
    <div
      className="modal fade"
      id={"exampleModal" + item.id}
      tabIndex="-1"
      aria-labelledby={"exampleModalLabel"}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={"exampleModalLabel"}>
              İş Ataması Id : {item.id}
            </h1>
            <button
              ref={inputRef}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="form2Example1">
                  Müşteri
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={
                    item.serviceRequest.appUser.name +
                    " " +
                    item.serviceRequest.appUser.surname
                  }
                  style={{ backgroundColor: "white" }}
                  disabled
                />
              </div>
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="form2Example1">
                  Bölge
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={
                    item.serviceRequest.appUser.name +
                    " " +
                    item.serviceRequest.appUser.surname
                  }
                  style={{ backgroundColor: "white" }}
                  disabled
                />
              </div>
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="form2Example1">
                  Ürün
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={item.serviceRequest.product.productName}
                  style={{ backgroundColor: "white" }}
                  disabled
                />
              </div>
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="form2Example1">
                  Tarih
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={item.serviceRequest.requestDate}
                  style={{ backgroundColor: "white" }}
                  disabled
                />
              </div>
              <div className="row mb-2">
                <div className="form-group">
                  <label htmlFor="exampleTextarea" className="form-label mt-2">
                    Açıklama
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea"
                    rows="3"
                    style={{ resize: "none" }}
                    value={item.serviceRequest.issueDescription}
                    readOnly
                  ></textarea>
                </div>
              </div>
              <div className="row mb-2">
                <div className="form-group">
                  <label htmlFor="exampleSelect1" className="form-label mt-2">
                    Teknisyen
                  </label>
                  <select className="form-select" id="exampleSelect1">
                    {technicians.map((tech, index) => {
                      if (tech.zoneId == item.serviceRequest.appUser.zoneId) {
                        if (item.technicianId != null) {
                          return (
                            <option key={index} value={tech.id} selected>
                              {tech.name + " " + tech.surname}
                            </option>
                          );
                        } else {
                          return (
                            <option key={index} value={tech.id}>
                              {tech.name + " " + tech.surname}
                            </option>
                          );
                        }
                      }
                    })}
                  </select>
                </div>
              </div>
              <div className="row mb-2">
                <div className="form-group">
                  <label htmlFor="exampleSelect1" className="form-label mt-2">
                    Durum
                  </label>
                  <select
                    className="form-select"
                    id="exampleSelect1"
                    onChange={(e) => HandleSelectChange(e)}
                  >
                    {statuses &&
                      statuses.map((status, index) => {
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
                      })}
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default IslerModal;
