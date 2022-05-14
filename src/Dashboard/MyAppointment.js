import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const MyAppointment = () => {
  const [authUser] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/appointmentsByEmail?email=${authUser.email}`)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [authUser]);
  return (
    <div className="overflow-x-auto">
      <h2 className=" text-3xl mb-5">My Appointments</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Appointment</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a, key) => (
            <tr key={key}>
              <th>{key + 1}</th>
              <td>{a.patientName}</td>
              <td>{a.treatment}</td>
              <td>{a.slot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointment;
