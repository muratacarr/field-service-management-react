import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    let regobj = { email, password };
    if (true) {
      await fetch("http://localhost:5155/api/Auth/CreateToken", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          res.json().then((response) => {
            console.log(response.data);
            if (response.isSuccessful) {
              toast.success("Giriş Başarılı");
              navigate("/");
            } else {
              toast.error("Hata :" + response.error.errors[0]);
            }
          });
        })
        .catch((err) => {
          toast.error("Hata :" + err.message);
        });
    }
  };
  return (
    <form onSubmit={handlesubmit}>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="loginFormId">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="loginFormId"
          className="form-control"
        />
      </div>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form2Example2">
          Parola
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="form2Example2"
          className="form-control"
        />
      </div>
      <div className="row mb-4">
        {/* <div className="col d-flex justify-content-center">
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="form2Example31"
        checked
      />
      <label className="form-check-label" htmlFor="form2Example31">
        {" "}
        Remember me{" "}
      </label>
    </div>
  </div> */}

        {/* <div className="col">
          <a href="#!">Şifremi Unuttum</a>
        </div> */}
      </div>
      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary btn-block mb-2">
          Giriş Yap
        </button>
        <Link
          to="/register"
          type="button"
          className="btn btn-success btn-block mb-2"
        >
          Kayıt Ol
        </Link>
      </div>
      {/* <div className="text-center">
        <p>
          <a href="#!">Kayıt Ol</a>
        </p>
      </div> */}
    </form>
  );
};

export default LoginForm;
