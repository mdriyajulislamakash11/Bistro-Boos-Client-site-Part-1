import React from "react";
import useAdmin from "../hook/useAdmin";
import useAuth from "../hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Shared/loading/Loading";

const AdminRoute = ({children}) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation()

  if (loading || isAdminLoading) {
    return <Loading />;
    // return <p>Loading...</p>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
