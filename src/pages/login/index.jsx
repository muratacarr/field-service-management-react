import React from "react";
import LoginForm from "./form";

const Login = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="row border p-4 rounded-3 shadow bg-light">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
