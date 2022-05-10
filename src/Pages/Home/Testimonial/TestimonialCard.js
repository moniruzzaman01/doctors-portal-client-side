import React from "react";

const TestimonialCard = ({ img, comment, name, address }) => {
  return (
    <div className="card lg:max-w-lg bg-slate-100 shadow-xl">
      <div className="card-body">
        <p>{comment}</p>
        <div className="card-actions items-center mt-5">
          <div className="avatar mr-2">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h4>{name}</h4>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
