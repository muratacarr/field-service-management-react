import React, { useState } from "react";
import { Outlet } from "react-router-dom";

function Musteri() {
  return (
    <div>
      Musteri
      <Outlet />
    </div>
  );
}

export default Musteri;
