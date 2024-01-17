import React from "react";
import Talep from "./talep";

const Talepler = () => {
  return (
    <div className="container">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">TALEP ID</th>
            <th scope="col">MÜŞTERİ</th>
            <th scope="col">ÜRÜN</th>
            <th scope="col">TARİH</th>
            <th scope="col">İŞLEMLER</th>
          </tr>
        </thead>
        <tbody>
          <Talep />
          <Talep />
        </tbody>
      </table>
    </div>
  );
};

export default Talepler;
