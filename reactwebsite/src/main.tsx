import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./css/index.css";
import "./css/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import ProjectsMyWebsitePage from "./pages/projects/ProjectsMyWebsitePage.tsx";

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
    children: [
      {
        path: "",
        element: <ProjectsPage />,
      },
      {
        path: "mywebsite",
        element: <ProjectsMyWebsitePage />,
      },
    ],
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
