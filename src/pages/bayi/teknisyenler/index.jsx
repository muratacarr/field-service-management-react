import React from "react";
import Teknisyen from "./teknisyen";

const Teknisyenler = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Teknisyen />
        <Teknisyen />
      </div>
    </div>
  );
};

export default Teknisyenler;
