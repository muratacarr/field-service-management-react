import React, { useEffect, useState } from "react";
import Talep from "./talep";
import Spinner from "../../../components/spinner";

const Talepler = () => {
  const [issue, setIssue] = useState([]);
  const [reRender, setRerender] = useState(false);
  const [spinner, setSpinner] = useState(false); //

  useEffect(() => {
    setSpinner(true); //
    fetch("http://localhost:5155/api/ServiceRequests/GetOpenServiceRequest", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        res.json().then((response) => {
          console.log(response.data);
          setIssue(response.data);
          setSpinner(false); //
        });
      })
      .catch((err) => {
        console.log(response.data);
        toast.error("Hata :" + err.message);
      });
  }, [reRender]);

  return (
    <div className="container">
      <table className="table table-striped table-hover mt-3">
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
          {spinner ? (
            <Spinner />
          ) : issue ? (
            issue.map((item, index) => {
              return (
                <Talep
                  key={index}
                  index={index}
                  item={item}
                  setRerender={setRerender}
                  reRender={reRender}
                />
              );
            })
          ) : (
            <tr>Talep Yok</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Talepler;
