import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../hooks/useAdmin";

const RequireAdmin = ({ children }) => {
  const [authUser, authLoading] = useAuthState(auth);
  const [admin, loading] = useAdmin(authUser);
  //----------------------------
  const location = useLocation();
  //----------------------------
  if (authLoading || loading) {
    return;
  }
  if (!authUser || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;
