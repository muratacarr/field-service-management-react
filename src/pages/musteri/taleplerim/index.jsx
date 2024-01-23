import React, { useEffect, useState } from "react";
import ServiceRequestCard from "../../../components/cards";
import PuanlamaModal from "./puanlama-modal";

const Taleplerim = () => {
  let [serviceRequests, setServiceRequests] = useState(null);
  let regobj = { customerId: 1 };
  // 3. Create out useEffect function
  useEffect(() => {
    fetch("http://localhost:5155/api/ServiceRequests/GetServiceRequest", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(regobj),
    })
      .then((res) => {
        res.json().then((response) => {
          setServiceRequests(response.data);
          console.log(response.data);
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
        {serviceRequests &&
          serviceRequests.map((serviceRequest) => (
            <div className="col-4">
              <ServiceRequestCard serviceRequest={serviceRequest} />
              <PuanlamaModal />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Taleplerim;
