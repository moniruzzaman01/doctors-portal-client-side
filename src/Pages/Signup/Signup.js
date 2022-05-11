import React from "react";
import { Link } from "react-router-dom";
import InputTag from "../Shared/InputTag";
import SocialLogin from "../Shared/SocialLogin";

const Signup = () => {
  return (
    <div className="md:max-w-md lg:max-w-lg mx-auto my-20 px-5">
      <h2 className="text-5xl text-center mb-10">SignUp</h2>
      <form className="">
        <label htmlFor="">Name</label>
        <br />
        <InputTag></InputTag>
        <label htmlFor="">Email</label>
        <br />
        <InputTag></InputTag>
        <br />
        <label htmlFor="">Password</label>
        <br />
        <InputTag></InputTag>
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
