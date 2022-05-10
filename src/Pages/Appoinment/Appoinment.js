import React from "react";
import chair from "../../assets/images/chair.png";
import Footer from "../Shared/Footer";
import AvailableAppointment from "./AvailableAppointment";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Appoinment = () => {
  const recentAppontment = [
    {
      name: "Teeth Orthodontics",
      time: "8:00 am - 9:00 am",
      spaces: "10 spaces available",
    },
    {
      name: "Cosmetic Dentistry",
      time: "8:00 am - 9:00 am",
      spaces: "10 spaces available",
    },
    {
      name: "Teeth Cleaning",
      time: "8:00 am - 9:00 am",
      spaces: "10 spaces available",
    },
    {
      name: "Teeth Orthodontics",
      time: "8:00 am - 9:00 am",
      spaces: "10 spaces available",
    },
    {
      name: "Teeth Orthodontics",
      time: "8:00 am - 9:00 am",
      spaces: "10 spaces available",
    },
    {
      name: "Teeth Orthodontics",
      time: "8:00 am - 9:00 am",
      spaces: "10 spaces available",
    },
  ];
  return (
    <section>
      <div className="hero lg:my-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl lg:ml-10"
            alt=""
          />
          <div className=" lg:mr-10">
            <DayPicker />
          </div>
        </div>
      </div>
      <div className="my-10">
        <h4 className="text-primary text-center text-3xl mb-10 lg:mb-20">
          Available Appointments on April 30,2022
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:mx-20 mx-5">
          {recentAppontment.map((reApp, key) => (
            <AvailableAppointment
              key={key}
              name={reApp.name}
              time={reApp.time}
              spaces={reApp.spaces}
            ></AvailableAppointment>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Appoinment;
