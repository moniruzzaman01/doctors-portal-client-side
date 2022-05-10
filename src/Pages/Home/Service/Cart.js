import React from "react";
import CartInfo from "./CartInfo";
import flouride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const Cart = () => {
  const cartData = [
    {
      img: flouride,
      title: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      img: cavity,
      title: "Cavity Filling",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      img: whitening,
      title: "Teeth Whitening",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 px-5 lg:px-20">
      {cartData.map((data, key) => (
        <CartInfo
          key={key}
          title={data.title}
          desc={data.desc}
          img={data.img}
        ></CartInfo>
      ))}
    </div>
  );
};

export default Cart;
