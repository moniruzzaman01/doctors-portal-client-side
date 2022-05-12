import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";
import ResetPassModal from "../Shared/ResetPassModal";

const Login = () => {
  const [modal, setModal] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [authUser] = useAuthState(auth);
  const [signInWithEmailAndPass, user, loading] =
    useSignInWithEmailAndPassword(auth);

  //-------------------------------
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //--------------------------------
  const handleSignupForm = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;

    signInWithEmailAndPass(email, pass);
  };

  //-----------------------------------
  useEffect(() => {
    if (authUser || user) {
      navigate(from, { replace: true });
    }
  }, [authUser, user, navigate, from]);

  if (loading || resetLoading) {
    return <Spinner />;
  }

  return (
    <div className="md:max-w-md lg:max-w-lg mx-auto my-20 px-5">
      <h2 className="text-5xl text-center mb-10">Login</h2>
      <form onSubmit={handleSignupForm}>
        <label htmlFor="">Email</label>
        <br />
        <input
          required
          type="text"
          name="email"
          className="input mb-5 input-bordered w-full max-w-lg"
        />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          required
          type="text"
          name="pass"
          className="input mb-5 input-bordered w-full max-w-lg"
        />
        <br />
        <label
          onClick={() => setModal(true)}
          htmlFor="resetPassModal"
          className="text-primary cursor-pointer"
        >
          Forgot password?
        </label>
        {modal ? (
          <ResetPassModal
            setModal={setModal}
            setResetLoading={setResetLoading}
          />
        ) : (
          ""
        )}
        <button className="btn btn-accent w-full text-white mt-2">login</button>
        <p className="text-center mt-2">
          New to Doctor's Portal?{" "}
          <Link to="/signup" className="text-primary">
            Create new account
          </Link>
        </p>
      </form>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider my-14">OR</div>
      </div>
      <SocialLogin />
    </div>
  );
};

export default Login;
