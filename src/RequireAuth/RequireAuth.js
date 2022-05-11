import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const RequireAuth = ({ children }) => {
  const [authUser] = useAuthState(auth);
  //----------------------------
  const location = useLocation();
  //----------------------------
  if (!authUser) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAuth;
