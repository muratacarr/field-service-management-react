import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { toast } from "react-toastify";

const Modal = ({ item, index }) => {
  const handleApprove = async (e) => {
    e.preventDefault();
    let regobj = {
      serviceRequestId: item.id,
      assignmentDate: "2024-01-23T05:21:53.984Z",
    };
    if (true) {
      //Buraya validation yapacağımız için şuanlık true geçtik
      await fetch(
        "http://localhost:5155/api/JobAssignments/CreateJobAssignment",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(regobj),
        }
      )
        .then((res) => {
          res.json().then((response) => {
            toast.success("Talep Oluşturuldu.");
          });
        })
        .catch((err) => {
          console.log(response.data);
          toast.error("Hata :" + err.message);
        });
    }
  };

  return (
    <div
      className="modal fade"
      id={"exampleModal" + index}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog p-0" style={{ background: "000" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Talep Id : {item.id}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">
                  Müşteri
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={item.customerId}
                  style={{ backgroundColor: "white" }}
                  disabled
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">
                  Ürün
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={item.productId}
                  style={{ backgroundColor: "white" }}
                  disabled
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">
                  Tarih
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={item.requestDate}
                  style={{ backgroundColor: "white" }}
                  disabled
                />
              </div>
              <div className="row mb-4">
                <div className="form-group">
                  <label htmlFor="exampleTextarea" className="form-label mt-2">
                    Açıklama
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea"
                    rows="3"
                    style={{ resize: "none" }}
                    value={item.issueDescription}
                    readOnly
                  ></textarea>
                </div>
              </div>

              {/* <div className="text-center">
    <p>
      <a href="#!">Kayıt Ol</a>
    </p>
  </div> */}
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Reddet
            </button>
            <button
              onClick={handleApprove}
              type="button"
              className="btn btn-success"
            >
              Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
