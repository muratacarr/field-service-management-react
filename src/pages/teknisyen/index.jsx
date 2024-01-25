import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Teknisyen() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Teknisyen;
