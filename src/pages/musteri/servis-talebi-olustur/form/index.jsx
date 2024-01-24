import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import { toast } from "react-toastify";

const ServisTalebiForm = () => {
  const [issueDescription, setIssueDescription] = useState("");
  let [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5155/api/Products/GetProducts", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        res.json().then((response) => {
          setProducts(response.data);
        });
      })
      .catch((err) => {
        console.log(response.data);
        toast.error("Hata :" + err.message);
      });
  }, []);

  const handleSelect = (s) => {
    setSelected(s);
    if (s[0] != null) setSelectedId(s[0].id);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    let regobj = {
      customerId: 1,
      productId: selectedId,
      requestDate: "2024-01-23T05:21:53.984Z",
      issueDescription,
      statusId: 1,
    };
    if (true) {
      //Buraya validation yapacağımız için şuanlık true geçtik
      await fetch(
        "http://localhost:5155/api/ServiceRequests/CreateServiceRequest",
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
    <form onSubmit={handlesubmit}>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form2Example1">
          Ürün
        </label>
        <Typeahead
          id="typeahead1"
          onChange={handleSelect}
          labelKey={(option) => `${option.productName}`}
          options={products}
          selected={selected}
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
            value={issueDescription}
            onChange={(e) => {
              setIssueDescription(e.target.value);
            }}
          ></textarea>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary btn-block mb-2">
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
