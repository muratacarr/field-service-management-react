import React from "react";
import { Outlet } from "react-router-dom";

function Teknisyen() {
  return (
    <div>
      Teknisyen
      <Outlet />
    </div>
  );
}

export default Teknisyen;
