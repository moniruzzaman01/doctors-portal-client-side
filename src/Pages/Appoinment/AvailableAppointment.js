import React from "react";
import Modal from "../Shared/Modal";

const AvailableAppointment = ({ name, time, spaces }) => {
  return (
    <div className="card lg:max-w-lg bg-slate-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title mx-auto text-primary font-bold">{name}</h2>
        <p className=" text-center uppercase">{time}</p>
        <p className=" text-center uppercase">{spaces}</p>
        <div className="flex justify-center">
          <Modal>
            <label
              htmlFor="my-modal-3"
              className="btn btn-primary text-white my-3 modal-button"
            >
              Book Appointment
            </label>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointment;
