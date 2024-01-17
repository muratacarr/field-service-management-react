import React from "react";
import Modal from "./modal";

const Talep = () => {
  return (
    <>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Görüntüle
          </button>
        </td>
      </tr>
      <Modal />
    </>
  );
};

export default Talep;
