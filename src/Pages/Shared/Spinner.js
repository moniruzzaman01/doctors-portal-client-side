import React from "react";

const Spinner = () => {
  return (
    <div className=" absolute top-1/2 left-1/2 z-50">
      <button className="btn btn-square loading"></button>
    </div>
  );
};

export default Spinner;
