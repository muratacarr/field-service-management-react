import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
        <div className="container-fluid">
          <div className="navbar-brand">ArmService</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarColor03"
          >
            <ul className="navbar-nav">
              {/* Musteri */}
              <li className="nav-item dropdown">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link dropdown-toggle"
                      : "nav-link dropdown-toggle"
                  }
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Müşteri
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink
                    to="/musteri/servis-talebi-olustur"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active" : "dropdown-item"
                    }
                  >
                    Talep Aç
                  </NavLink>
                  <NavLink
                    to="/musteri/taleplerim"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active" : "dropdown-item"
                    }
                  >
                    Taleplerim
                  </NavLink>
                </div>
              </li>
              {/* Bayi */}
              <li className="nav-item dropdown">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link dropdown-toggle"
                      : "nav-link dropdown-toggle"
                  }
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Bayi
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink
                    to="/bayi/isler"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active" : "dropdown-item"
                    }
                  >
                    İşler
                  </NavLink>
                  <NavLink
                    to="/bayi/talepler"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active" : "dropdown-item"
                    }
                  >
                    Talepler
                  </NavLink>
                  <NavLink
                    to="/bayi/teknisyenler"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active" : "dropdown-item"
                    }
                  >
                    Teknisyenler
                  </NavLink>
                </div>
              </li>
              {/* Teknisyen */}
              <li className="nav-item dropdown">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link dropdown-toggle"
                      : "nav-link dropdown-toggle"
                  }
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Teknisyen
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink
                    to="/teknisyen/islerim"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active" : "dropdown-item"
                    }
                  >
                    İşlerim
                  </NavLink>
                  <NavLink
                    to="/teknisyen/fatura-olustur"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active" : "dropdown-item"
                    }
                  >
                    Fatura Oluştur
                  </NavLink>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              {/* Kullanıcı Dropdown */}
              <li className="nav-item dropdown">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link dropdown-toggle"
                      : "nav-link dropdown-toggle"
                  }
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Ad Soyad
                </NavLink>
                <div className="dropdown-menu dropdown-menu-end">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active" : "dropdown-item"
                    }
                  >
                    Profilim
                  </NavLink>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active" : "dropdown-item"
                    }
                  >
                    Çıkış Yap
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
