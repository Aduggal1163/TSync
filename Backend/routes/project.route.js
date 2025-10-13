import { Router } from "express";
import {
  createProjectController,
  deleteProjectController,
  getAllProjectsByIdAndWorkspaceIDController,
  getAllProjectsInWorkspaceController,
  getProjectAnalyticsController,
  updateProjectController,
} from "../controllers/project.controller.js";
const projectRoutes = Router();

projectRoutes.post("/workspace/:workspaceId/create", createProjectController);
projectRoutes.get(
  "/workspace/:workspaceId/all",
  getAllProjectsInWorkspaceController
);

projectRoutes.put(
  "/:id/workspace/:workspaceId/update",
  updateProjectController
);

projectRoutes.delete(
  "/:id/workspace/:workspaceId/delete",
  deleteProjectController
);

projectRoutes.get(
  "/:id/workspace/:workspaceId/analytics",
  getProjectAnalyticsController
);

projectRoutes.get(
  "/:id/workspace/:workspaceId",
  getAllProjectsByIdAndWorkspaceIDController
);

export default projectRoutes;
