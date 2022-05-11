import { format } from "date-fns";
import React from "react";
import InputTag from "../Shared/InputTag";

const Modal = ({ trtment, date, setTrtment }) => {
  const { name, slots } = trtment;
  const haldleModalform = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);

    setTrtment(null);
  };

  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="appoinment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appoinment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-10">{name}</h3>
          <form onSubmit={haldleModalform}>
            <InputTag value={format(date, "PP")} />
            <div className="form-control w-full max-w-lg">
              <select name="slot" className="select select-bordered mb-5">
                <option defaultValue disabled>
                  select one
                </option>
                {slots?.map((slot, key) => (
                  <option value={slot} key={key}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
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
