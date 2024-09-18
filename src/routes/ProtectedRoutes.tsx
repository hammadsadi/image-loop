import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

type Props = {};

const ProtectedRoutes = (props: Props) => {
  const isAuth: boolean = true;
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} />
  );
};

export default ProtectedRoutes;
