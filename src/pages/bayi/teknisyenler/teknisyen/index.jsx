import React from "react";

const Teknisyen = ({ item }) => {
  return (
    <div className="col" style={{ width: "16%" }}>
      <div class="card">
        <div class="card-body text-center">
          <p>
            <img
              class=" img-fluid h-auto"
              src="https://static.vecteezy.com/system/resources/previews/026/473/306/non_2x/hvac-technician-icon-vector.jpg"
              alt="card image"
              style={{ width: "125px" }}
            />
          </p>
          <h6 class="card-title">{item.name + " " + item.surname}</h6>
          <p class="card-text">
            <strong>Bölge :</strong> {item.zoneId}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teknisyen;
