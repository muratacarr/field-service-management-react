import React from "react";
import ReactDOM from "react-dom/client";
import "bootswatch/dist/zephyr/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="App">
    <RouterProvider router={routes} />
    <ToastContainer />
  </div>
);
