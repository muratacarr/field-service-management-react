import React, { useEffect, useState } from "react";
import ServiceRequestCard from "../../../components/cards";
import PuanlamaModal from "./puanlama-modal";
import Spinner from "../../../components/spinner";

const Taleplerim = () => {
  let [serviceRequests, setServiceRequests] = useState([null]);
  const [spinner, setSpinner] = useState(false); //
  let regobj = { customerId: 1 };
  // 3. Create out useEffect function
  useEffect(() => {
    setSpinner(true); //
    fetch("http://localhost:5155/api/ServiceRequests/GetServiceRequest", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(regobj),
    })
      .then((res) => {
        res.json().then((response) => {
          setServiceRequests(response.data);
          setSpinner(false); //
        });
      })
      .catch((err) => {
        console.log(response.data);
        toast.error("Hata :" + err.message);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {spinner ? (
          <Spinner />
        ) : (
          serviceRequests.map((serviceRequest, index) => (
            <div className="col-4" key={index}>
              <ServiceRequestCard serviceRequest={serviceRequest} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Taleplerim;
