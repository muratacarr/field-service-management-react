import React, { useEffect, useState } from "react";
import BayiJobCard from "../../../components/bayi-card";

const Isler = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5155/api/JobAssignments/GetJobAssignment", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        res.json().then((response) => {
          console.log(response.data);
          setJobs(response.data);
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
        {jobs ? (
          jobs.map((item, index) => {
            return <BayiJobCard />;
          })
        ) : (
          <tr>{"Veri yok"}</tr>
        )}
      </div>
    </div>
  );
};

export default Isler;
