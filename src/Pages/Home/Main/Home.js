import React from "react";
import HomeContact from "../HomeContact";
import HomeAppointment from "../HomeAppointment";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner";
import Info from "./Info";
import Footer from "../../Shared/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Service />
      <HomeAppointment />
      <Testimonial />
      <HomeContact />
      <Footer />
    </div>
  );
};

export default Home;
