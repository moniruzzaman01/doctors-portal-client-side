import React from "react";
import InputTag from "../Shared/InputTag";

const Modal = ({ children }) => {
  return (
    <div>
      {children}
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-10">Modal heading</h3>
          <form action="">
            <InputTag value={"April 30,2020"}></InputTag>
            <InputTag value={"10:05 am - 11:30 am"}></InputTag>
            <InputTag placeholder={"Full Name"}></InputTag>
            <InputTag placeholder={"Phone Number"}></InputTag>
            <InputTag placeholder={"Email"}></InputTag>
            <button type="submit" className="btn btn-accent w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
