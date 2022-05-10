import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appoinment from "../../assets/images/appointment.png";

const HomeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appoinment})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center px-10 mt-20 lg:mt-32"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 py-5">
        <h4 className="text-secondary text-lg font-bold">Appointment</h4>
        <h2 className="text-4xl my-3 text-white">Make an appointment today</h2>
        <p className="mb-5 text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn btn-primary text-white">Get Started</button>
      </div>
    </section>
  );
};

export default HomeAppointment;
