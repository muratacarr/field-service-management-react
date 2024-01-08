import React from "react";
import ReactDOM from "react-dom/client";
import "bootswatch/dist/zephyr/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
