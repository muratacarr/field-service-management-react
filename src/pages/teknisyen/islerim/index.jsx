import React, { useEffect, useState } from "react";
import TechnicianJobCard from "../../../components/technician-job-card";
import Spinner from "../../../components/spinner";

const Islerim = () => {
  const [jobs, setJobs] = useState([]);
  const [spinner, setSpinner] = useState(false); //
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    setSpinner(true); //
    fetch(
      "http://localhost:5155/api/JobAssignments/GetJobsByTechnicianId?technicianId=" +
        "5",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => {
        res.json().then((response) => {
          setJobs(response.data);
          setSpinner(false); //
        });
      })
      .catch((err) => {
        console.log(response.data);
        toast.error("Hata :" + err.message);
      });
  }, [rerender]);
  return (
    <div className="container mt-4">
      <div className="row">
        {spinner ? (
          <Spinner />
        ) : (
          jobs &&
          jobs.map((item, index) => {
            return (
              <TechnicianJobCard
                key={index}
                item={item}
                setRerender={setRerender}
                rerender={rerender}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Islerim;
