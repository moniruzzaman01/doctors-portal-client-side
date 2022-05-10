import React, { useEffect, useState } from "react";
import chair from "../../assets/images/chair.png";
import Footer from "../Shared/Footer";
import AvailableAppointment from "./AvailableAppointment";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import axios from "axios";
import appoinmentBg from "../../assets/images/bg.png";

const Appoinment = () => {
  const [date, setDate] = useState(new Date());
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios("Service.json").then((res) => setServices(res.data));
  }, []);

  console.log(services);
  return (
    <section>
      <div
        style={{
          background: `url(${appoinmentBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="hero lg:py-20"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl lg:ml-10"
            alt=""
          />
          <div className=" lg:mr-10">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
      <div className="my-10">
        <h4 className="text-primary text-center text-3xl mb-10 lg:my-20">
          Available Appointments on {format(date, "PP")}
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:mx-20 mx-5">
          {services.map((service, key) => (
            <AvailableAppointment
              key={key}
              service={service}
            ></AvailableAppointment>
          ))}
          {/* {recentAppontment.map((reApp, key) => (
            <AvailableAppointment
              key={key}
              name={reApp.name}
              time={reApp.time}
              spaces={reApp.spaces}
            ></AvailableAppointment>
          ))} */}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Appoinment;
