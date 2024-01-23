import React, { useEffect, useState } from "react";
import Teknisyen from "./teknisyen";

const Teknisyenler = () => {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5155/api/User/GetTechnicians", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        res.json().then((response) => {
          console.log(response.data);
          setTechnicians(response.data);
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
        {technicians.map((item) => {
          return <Teknisyen item={item} />;
        })}
      </div>
    </div>
  );
};

export default Teknisyenler;
