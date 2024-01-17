import React from "react";
import { Link } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";

const ServisTalebiForm = () => {
  return (
    <form>
      <div className="form-outline mb-4">
        <label className="form-label" for="form2Example1">
          Ürün
        </label>
        <Typeahead
          onChange={(selected) => {
            // Handle selections...
          }}
          options={["murat", "sılay"]}
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
          ></textarea>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-primary btn-block mb-2">
          Talep Aç
        </button>
      </div>
      {/* <div className="text-center">
    <p>
      <a href="#!">Kayıt Ol</a>
    </p>
  </div> */}
    </form>
  );
};

export default ServisTalebiForm;
