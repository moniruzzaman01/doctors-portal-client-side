import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPass, user] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  //-------------------------------
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //--------------------------------

  const handleSignupForm = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const pass = event.target.pass.value;

    await createUserWithEmailAndPass(email, pass);
    updateProfile({ displayName: name });
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  return (
    <div className="md:max-w-md lg:max-w-lg mx-auto my-20 px-5">
      <h2 className="text-5xl text-center mb-10">SignUp</h2>
      <form onSubmit={handleSignupForm}>
        <label htmlFor="">Name</label>
        <br />
        <input
          type="text"
          name="name"
          className="input mb-5 input-bordered w-full max-w-lg"
        />
        <label htmlFor="">Email</label>
        <br />
        <input
          type="text"
          name="email"
          className="input mb-5 input-bordered w-full max-w-lg"
        />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="text"
          name="pass"
          className="input mb-5 input-bordered w-full max-w-lg"
        />
        <br />
        <p>Forgot password?</p>
        <button className="btn btn-accent w-full text-white mt-2">
          sign up
        </button>
        <p className="text-center mt-2">
          Have an account?{" "}
          <Link to="/login" className="text-primary">
            Login
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

export default Signup;
