import { Suspense, lazy, ElementType } from "react";

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export const LoginPage = Loadable(lazy(() => import("../pages/Login")));
export const DashboardPage = Loadable(lazy(() => import("../pages/Dashboard")));
export const ProfilePage = Loadable(lazy(() => import("../pages/Profile")));
export const RegisterPage = Loadable(lazy(() => import("../pages/Register")));
export const SuperAdminPage = Loadable(
  lazy(() => import("../pages/SuperAdmin"))
);
export const WorkspaceAdminPage = Loadable(
  lazy(() => import("../pages/WorkspaceAdmin"))
);