import React from "react";

const CartInfo = ({ img, title, desc }) => {
  return (
    <div className="card lg:max-w-lg bg-slate-100 shadow-xl pt-10">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default CartInfo;
