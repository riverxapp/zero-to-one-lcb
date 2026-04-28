import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { Home } from "../pages/home";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProjectsIntakePage } from "../pages/projects";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsIntakePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}