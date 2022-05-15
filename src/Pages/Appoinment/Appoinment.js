import React, { useEffect, useState } from "react";
import chair from "../../assets/images/chair.png";
import Footer from "../Shared/Footer";
import AvailableAppointment from "./AvailableAppointment";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import appoinmentBg from "../../assets/images/bg.png";
import Modal from "../Shared/Modal";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import axios from "axios";

const Appoinment = () => {
  const [date, setDate] = useState(new Date());
  // const [services, setServices] = useState([]);
  const [trtment, setTrtment] = useState({});
  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["services", formattedDate], () =>
    fetch(`http://localhost:5000/services?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  // useEffect(() => {
  //   axios(`http://localhost:5000/services?date=${formattedDate}`).then((res) =>
  //     setServices(res.data)
  //   );
  // }, [formattedDate]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      {/* Appointment banner */}
      <div
        style={{
          background: `url(${appoinmentBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="hero lg:py-20"
      >
        <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse">
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
      {/* appoinment services */}
      <div className="my-10">
        <h4 className="text-primary text-center text-3xl mb-10 lg:my-20">
          Available Appointments on {format(date, "PP")}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-20 mx-5">
          {services?.map((service, key) => (
            <AvailableAppointment
              key={key}
              service={service}
              setTrtment={setTrtment}
            ></AvailableAppointment>
          ))}
        </div>
        {trtment && (
          <Modal
            date={date}
            trtment={trtment}
            setTrtment={setTrtment}
            refetch={refetch}
          />
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Appoinment;
