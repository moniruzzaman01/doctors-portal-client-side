import { format } from "date-fns";
import React from "react";

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
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input mb-5 input-bordered w-full max-w-lg"
            />
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
            <input
              type="text"
              placeholder="Full Name"
              className="input mb-5 input-bordered w-full max-w-lg"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input mb-5 input-bordered w-full max-w-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="input mb-5 input-bordered w-full max-w-lg"
            />
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
