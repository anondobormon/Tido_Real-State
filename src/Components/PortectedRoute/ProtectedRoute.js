import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let uid = localStorage.getItem("uid");
  let location = useLocation();
  console.log(uid);
  if (!uid) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
export default ProtectedRoute;
