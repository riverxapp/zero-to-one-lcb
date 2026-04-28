import { RouteObject } from "react-router-dom";
import { Home } from "../pages/home";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProjectsIntake as ProjectsIntakePage } from "../pages/projects";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <ProjectsIntakePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];