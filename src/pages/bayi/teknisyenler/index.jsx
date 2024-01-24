import React, { useEffect, useState } from "react";
import Teknisyen from "./teknisyen";
import Spinner from "../../../components/spinner";

const Teknisyenler = () => {
  const [technicians, setTechnicians] = useState([]);
  const [spinner, setSpinner] = useState(false); //

  useEffect(() => {
    setSpinner(true); //
    fetch("http://localhost:5155/api/User/GetTechnicians", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        res.json().then((response) => {
          setTechnicians(response.data);
          setSpinner(false); //
        });
      })
      .catch((err) => {
        console.log(response.data);
        toast.error("Hata :" + err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {spinner ? (
          <Spinner />
        ) : (
          technicians.map((item, index) => {
            return <Teknisyen item={item} key={index} />;
          })
        )}
      </div>
    </div>
  );
};

export default Teknisyenler;
