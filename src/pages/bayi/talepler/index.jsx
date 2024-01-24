import React, { useEffect, useState } from "react";
import Talep from "./talep";

const Talepler = () => {
  const [issue, setIssue] = useState([]);
  const [reRender, setRerender] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5155/api/ServiceRequests/GetOpenServiceRequest", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        res.json().then((response) => {
          setIssue(response.data);
        });
      })
      .catch((err) => {
        console.log(response.data);
        toast.error("Hata :" + err.message);
      });
  }, [reRender]);

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
          {issue.length != 0 ? (
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
            <tr>{"Veri yok"}</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Talepler;
