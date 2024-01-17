import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog p-0" style={{ background: "000" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Talep Id : 1
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
                <label className="form-label" for="form2Example1">
                  Müşteri
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                  style={{ backgroundColor: "white" }}
                  disabled
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" for="form2Example1">
                  Ürün
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                  style={{ backgroundColor: "white" }}
                  disabled
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" for="form2Example1">
                  Tarih
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                  style={{ backgroundColor: "white" }}
                  disabled
                />
              </div>
              <div className="row mb-4">
                <div class="form-group">
                  <label for="exampleTextarea" class="form-label mt-2">
                    Açıklama
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleTextarea"
                    rows="3"
                    style={{ resize: "none" }}
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
            <button type="button" className="btn btn-success">
              Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
