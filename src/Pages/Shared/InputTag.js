import React from "react";

const InputTag = ({ placeholder, value }) => {
  return (
    <input
      type="text"
      disabled={value ? true : false}
      placeholder={placeholder || ""}
      value={value || ""}
      className="input mb-5 input-bordered w-full max-w-lg"
    />
  );
};

export default InputTag;
