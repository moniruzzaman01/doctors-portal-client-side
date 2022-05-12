import React, { useRef } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ResetPassModal = ({ setResetLoading, setModal }) => {
  const email = useRef("");
  const [sendPassResetEmail] = useSendPasswordResetEmail(auth);
  //------------------------
  const handleBtn = async () => {
    const getEmail = email.current.value;
    setResetLoading(true);
    //clear input
    email.current.value = "";
    await sendPassResetEmail(getEmail);
    setResetLoading(false);
    setModal(false);
  };

  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="resetPassModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="resetPassModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Type Your email here!!!</h3>
          <input
            required
            type="email"
            ref={email}
            placeholder="abc@mail.com"
            className="input my-5 input-bordered w-full max-w-lg"
          />{" "}
          <label onClick={handleBtn} htmlFor="resetPassModal" className="btn">
            Reset
          </label>
        </div>
      </div>
    </div>
  );
};

export default ResetPassModal;
