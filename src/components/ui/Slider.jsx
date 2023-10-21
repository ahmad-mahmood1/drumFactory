import React from "react";

function Slider({ value, onChange = () => {} }) {
  return <input type="range" value={value} onChange={onChange} />;
}

export default Slider;
