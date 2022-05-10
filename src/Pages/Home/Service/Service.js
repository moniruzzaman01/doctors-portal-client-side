import React from "react";
import Cart from "./Cart";
import treatment from "../../../assets/images/treatment.png";
import PrimaryBtn from "../../Shared/PrimaryBtn";

const Service = () => {
  return (
    <div className="text-center mt-28">
      <h3 className="text-secondary font-bold text-xl uppercase">
        Our Services
      </h3>
      <h1 className="text-5xl">Service We Provide</h1>
      <Cart />
      <div className="hero lg:my-32 lg:px-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="max-w-sm rounded-lg shadow-2xl lg:mr-5"
            alt=""
          />
          <div className="text-left lg:ml-5">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryBtn>get started</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
