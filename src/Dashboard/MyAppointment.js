import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const MyAppointment = () => {
  const [authUser] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  //-------------------------------

  useEffect(() => {
    const url = `http://localhost:5000/appointmentsByEmail?email=${authUser.email}`;

    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        // console.log("response", res);
        //I have to retun res.json() otherwise it won't provide data
        if (res.status === 403 || res.status === 401) {
          signOut(auth);
          localStorage.removeItem("accessToken", "");
          navigate("/");
          return;
        }
        return res.json();
      })
      .then((data) => {
        setAppointments(data);
      });
  }, [authUser, localStorage]);

  return (
    <div className="overflow-x-auto">
      <h2 className=" text-3xl mb-5">My Appointments</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date</th>
            <th>Appointment</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments?.map((a, key) => (
            <tr key={key}>
              <th>{key + 1}</th>
              <td>{a.patientName}</td>
              <td>{a.date}</td>
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
