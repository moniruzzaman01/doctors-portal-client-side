import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  if (user) {
    console.log(user);
  }
  return (
    <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
      continue with google
    </button>
  );
};

export default SocialLogin;
