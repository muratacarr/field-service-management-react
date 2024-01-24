import React from "react";
import Modal from "./modal";

const Talep = ({ item, index, setRerender, reRender }) => {
  return (
    <>
      <tr>
        <th scope="row">{item.id}</th>
        <td>{item.customerId}</td>
        <td>{item.productId}</td>
        <td>{item.requestDate}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={"#exampleModal" + index}
          >
            Görüntüle
          </button>
        </td>
      </tr>
      <Modal
        item={item}
        index={index}
        setRerender={setRerender}
        reRender={reRender}
      />
    </>
  );
};

export default Talep;
