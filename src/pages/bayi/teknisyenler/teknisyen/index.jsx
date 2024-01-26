import React from "react";

const Teknisyen = ({ item }) => {
  return (
    <div className="col" style={{ width: "16%" }}>
      <div className="card">
        <div className="card-body text-center">
          <p>
            <img
              className=" img-fluid h-auto"
              src="https://static.vecteezy.com/system/resources/previews/026/473/306/non_2x/hvac-technician-icon-vector.jpg"
              alt="card image"
              style={{ width: "125px" }}
            />
          </p>
          <h6 className="card-title">{item.name + " " + item.surname}</h6>
          <p className="card-text">
            <strong>Bölge :</strong> {item.zoneId}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teknisyen;
