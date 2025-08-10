import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../../Firebase/AuthProvider";
import Loading from "../../Shared/loading/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading } =  useContext(AuthContex)
  const location = useLocation()  


  if (loading) {
    return <Loading />;
    // return <p>Loading...</p> ;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}} replace ></Navigate>;
};

export default PrivetRoute;
