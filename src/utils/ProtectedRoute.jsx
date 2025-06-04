import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isLogged, user } = useSelector((state) => state.auth);

  if (!isLogged) {
    return <Navigate to={"/Login"} />;
  }

  if (requiredRole && !requiredRole.includes(user.role)) {
    toast.info("You dont have role to access!");
    return <Navigate to={"/"} />;
  }
  return children;
};

export default ProtectedRoute;
