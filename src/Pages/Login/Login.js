import React from "react";
import { Link } from "react-router-dom";
import InputTag from "../Shared/InputTag";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
  return (
    <div className="md:max-w-md lg:max-w-lg mx-auto my-20 px-5">
      <h2 className="text-5xl text-center mb-10">Login</h2>
      <form>
        <label htmlFor="">Email</label>
        <br />
        <InputTag></InputTag>
        <br />
        <label htmlFor="">Password</label>
        <br />
        <InputTag></InputTag>
        <br />
        <p>Forgot password?</p>
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
