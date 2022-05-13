import { signOut } from "firebase/auth";
import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";

const NotVerified = () => {
  const [authUser] = useAuthState(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  return (
    <div className="flex justify-center min-h-screen items-center">
      {sending && (
        <div className=" absolute h-screen w-screen top-0 bottom-0 bg-slate-200 z-40">
          <Spinner />
        </div>
      )}
      <div className="card max-w-lg bg-base-100 shadow-xl">
        <figure>
          <img
            className=" p-20"
            src="https://th.bing.com/th/id/R.8331d422332d574047aab6114804b420?rik=B0J08ioRA6LIEA&pid=ImgRaw&r=0"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className=" text-lg font-bold text-red-500">
            Click on the link sended to your email and then reload
          </h2>
          <div className="card-actions justify-around">
            <button className="btn btn-success text-white mt-5">
              <Link onClick={() => signOut(auth)} to="/login">
                Login Again
              </Link>
            </button>
            <button
              onClick={() => {
                console.log("clicked");
                sendEmailVerification(authUser.email);
              }}
              className="btn btn-success text-white mt-5"
            >
              Send Verification Email Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotVerified;
