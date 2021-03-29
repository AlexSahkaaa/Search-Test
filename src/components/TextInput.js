import React from "react";
const TextInput = ({ onChange }) => {

  return (
    <input
      className="form-control mt-3 mb-3"
      type="text"
      placeholder="Type something..."
      onChange={(e) => {onChange(e.target.value)}}
    />
  );
};

export default TextInput;
