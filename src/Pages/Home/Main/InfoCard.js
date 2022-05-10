import React from "react";

const InfoCard = ({ img, title, desc, bg }) => {
  return (
    <div className={`card lg:card-side shadow-xl text-white ${bg} py-5`}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
