import React from "react";

const AvailableAppointment = ({ service, setTrtment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-slate-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title mx-auto text-primary font-bold">{name}</h2>
        <p className=" text-center uppercase">
          {slots.length ? slots[0] : "---------------"}
        </p>
        <p className=" text-center uppercase">
          {slots.length} {slots.length > 0 ? "slots" : "slot"} Available
        </p>
        <div className="flex justify-center">
          <label
            disabled={!slots.length}
            htmlFor="appoinment-modal"
            onClick={() => setTrtment(service)}
            className="btn btn-primary text-white my-3 "
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointment;
