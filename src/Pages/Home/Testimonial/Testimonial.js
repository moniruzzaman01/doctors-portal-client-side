import React from "react";
import quote from "../../../assets/icons/quote.svg";
import TestimonialCard from "./TestimonialCard";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";

const Testimonial = () => {
  const testimonials = [
    {
      img: people1,
      name: "Winson Herry",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "California",
    },
    {
      img: people2,
      name: "Winson Herry",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "California",
    },
    {
      img: people3,
      name: "Winson Herry",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "California",
    },
  ];

  return (
    <section className="px-5 lg:px-20 my-20">
      <div className="flex items-center justify-between">
        <div className="">
          <h4 className="text-xl text-secondary font-bold">Testimonial</h4>
          <h2 className=" text-4xl my-5 lg:text-5xl">What Our Patients Says</h2>
        </div>
        <div className="">
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {testimonials.map((test, key) => (
          <TestimonialCard
            key={key}
            img={test.img}
            name={test.name}
            comment={test.comment}
            address={test.address}
          ></TestimonialCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
