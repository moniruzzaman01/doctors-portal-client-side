import React, { useEffect, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Spinner from "./Spinner";

const SocialLogin = () => {
  const [loading, setLoading] = useState(false);
  const [signInWithGoogle, user, SignInLoading] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = async () => {
    setLoading(true);
    await signInWithGoogle();
    setLoading(false);
  };
  const [token] = useToken(user);

  //---------------------------
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //---------------------------
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  if (loading || SignInLoading) {
    return <Spinner />;
  }

  return (
    <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
      continue with google
    </button>
  );
};

export default SocialLogin;
