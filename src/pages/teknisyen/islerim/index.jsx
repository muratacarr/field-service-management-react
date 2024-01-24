import React, { useEffect, useState } from "react";
import TechnicianJobCard from "../../../components/technician-job-card";

const Islerim = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost:5155/api/JobAssignments/GetJobsByTechnicianId?technicianId=" +
        "3",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
      }
    )
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
        {jobs &&
          jobs.map((item, index) => {
            return <TechnicianJobCard key={index} item={item} />;
          })}
      </div>
    </div>
  );
};

export default Islerim;
