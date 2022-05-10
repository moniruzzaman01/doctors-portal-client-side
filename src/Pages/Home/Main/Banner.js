import React from "react";
import bannerImg from "../../../assets/images/chair.png";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import bannerBg from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="hero lg:py-40"
    >
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl lg:mr-5"
          alt=""
        />
        <div className="lg:ml-5 pb-10">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryBtn>get started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
