import { Navigate, useRoutes } from "react-router-dom";
import GuestGuard from "../auth/GuestGuard";
import {
  DashboardPage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  SuperAdminPage,
  WorkspaceAdminPage,
} from "./elements";
import { PATH_DASHBOARD } from "./paths";
import AuthGuard from "../auth/AuthGuard";

export default function Router() {
  return useRoutes([
    // Auth
    {
      path: "/",
      index: true,
      element: (
        <GuestGuard>
          <LoginPage />
        </GuestGuard>
      ),
    },
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
        {
          path: "register",
          element: (
            <GuestGuard>
              <RegisterPage />
            </GuestGuard>
          ),
        },
        { path: "login", element: <LoginPage /> },
      ],
    },
    // Dashboard
    {
      path: "dashboard",
      element: (
        <AuthGuard>
          <DashboardPage />
        </AuthGuard>
      ),
    },
    // User
    {
      path: "profile",
      element: (
        <AuthGuard>
          <ProfilePage />
        </AuthGuard>
      ),
    },
    {
      path: "workspace",
      element: (
        <AuthGuard>
          <SuperAdminPage />
        </AuthGuard>
      ),
    },
    {
      path: "employee",
      element: (
        <AuthGuard>
          <WorkspaceAdminPage />
        </AuthGuard>
      ),
    }
  ]);
}