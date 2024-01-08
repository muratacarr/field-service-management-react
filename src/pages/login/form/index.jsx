import React from "react";

const LoginForm = () => {
  return (
    <form>
      <div className="form-outline mb-4">
        <label className="form-label" for="form2Example1">
          Email
        </label>
        <input type="email" id="form2Example1" className="form-control" />
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" for="form2Example2">
          Parola
        </label>{" "}
        <input type="password" id="form2Example2" className="form-control" />
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
      <label className="form-check-label" for="form2Example31">
        {" "}
        Remember me{" "}
      </label>
    </div>
  </div> */}

        {/* <div className="col">
          <a href="#!">Şifremi Unuttum</a>
        </div> */}
      </div>

      <button type="button" className="btn btn-primary btn-block mb-2">
        Giriş Yap
      </button>

      {/* <div className="text-center">
        <p>
          <a href="#!">Kayıt Ol</a>
        </p>
      </div> */}
    </form>
  );
};

export default LoginForm;
