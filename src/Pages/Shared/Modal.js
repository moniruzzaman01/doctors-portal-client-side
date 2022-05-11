import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Modal = ({ trtment, date, setTrtment }) => {
  const [authUser] = useAuthState(auth);
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
      <input
        required
        type="checkbox"
        id="appoinment-modal"
        className="modal-toggle"
      />
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
              required
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
              required
              type="text"
              disabled
              value={authUser?.displayName}
              className="input mb-5 input-bordered w-full max-w-lg"
            />
            <input
              required
              type="text"
              placeholder="+880"
              className="input mb-5 input-bordered w-full max-w-lg"
            />
            <input
              required
              type="email"
              disabled
              value={authUser?.email}
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
