import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout";
import Musteri from "../pages/musteri";
import Teknisyen from "../pages/teknisyen";
import Bayi from "../pages/bayi";
import Login from "../pages/login";
import TeknikServisTalebi from "../pages/musteri/servis-talebi-olustur";
import ServisTalebiOlustur from "../pages/musteri/servis-talebi-olustur";
import Taleplerim from "../pages/musteri/taleplerim";
import Islerim from "../pages/teknisyen/islerim";
import FaturaOlustur from "../pages/teknisyen/fatura-olustur";
import Talepler from "../pages/bayi/talepler";
import Isler from "../pages/bayi/isler";
import Teknisyenler from "../pages/bayi/teknisyenler";
import Profile from "../pages/profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "musteri",
        element: <Musteri />,
        children: [
          {
            path: "servis-talebi-olustur",
            element: <ServisTalebiOlustur />,
          },
          {
            path: "taleplerim",
            element: <Taleplerim />,
          },
        ],
      },
      {
        path: "teknisyen",
        element: <Teknisyen />,
        children: [
          {
            path: "islerim",
            element: <Islerim />,
          },
          {
            path: "fatura-olustur",
            element: <FaturaOlustur />,
          },
        ],
      },
      {
        path: "bayi",
        element: <Bayi />,
        children: [
          {
            path: "talepler",
            element: <Talepler />,
          },
          {
            path: "isler",
            element: <Isler />,
          },
          {
            path: "teknisyenler",
            element: <Teknisyenler />,
          },
        ],
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
