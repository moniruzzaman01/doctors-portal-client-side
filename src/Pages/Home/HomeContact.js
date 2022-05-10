import React from "react";
import contactBg from "../../assets/images/appointment.png";
import InputTag from "../Shared/InputTag";

const Contact = () => {
  return (
    <div
      style={{
        background: `url(${contactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" text-center py-24"
    >
      <h4 className="text-secondary text-xl font-bold">Contact Us</h4>
      <h2 className="text-5xl text-white">Stay connected with us</h2>
      <form
        className="mt-16 px-5
      "
        action=""
      >
        <InputTag placeholder={"Email Address"}></InputTag>
        <br />
        <InputTag placeholder={"Subject"}></InputTag>
        <br />
        <textarea
          className="textarea mb-5 textarea-bordered  w-full max-w-lg"
          placeholder="Your message"
        ></textarea>
        <br />
        <button className="btn btn-primary text-white">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
