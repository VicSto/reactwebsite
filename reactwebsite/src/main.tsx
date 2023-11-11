import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/home/HomePage.tsx";
import AboutPage from "./components/about/AboutPage.tsx";
import ProjectsPage from "./components/projects/ProjectsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/linkedin",
    Component: () => {
      window.location.href = "https://www.linkedin.com/in/victorstolle/";
      return null;
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
