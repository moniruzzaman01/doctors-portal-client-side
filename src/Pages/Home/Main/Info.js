import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
  const infoCardData = [
    {
      bg: "bg-gradient-to-r from-secondary to-primary",
      img: clock,
      title: "Opening Hours",
      desc: "lorem is simply dummy text of the pri",
    },
    {
      bg: "bg-accent",
      img: marker,
      title: "visit Our Location",
      desc: "Brooklyn, NY 10036, United States",
    },
    {
      bg: "bg-gradient-to-r from-secondary to-primary",
      img: phone,
      title: "Contact Us Now",
      desc: "+8802367423764",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 lg:px-20">
      {infoCardData.map((info, key) => (
        <InfoCard
          key={key}
          bg={info.bg}
          title={info.title}
          desc={info.desc}
          img={info.img}
        ></InfoCard>
      ))}
    </div>
  );
};

export default Info;
