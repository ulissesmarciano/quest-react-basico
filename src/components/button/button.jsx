import React from "react";
import "./button.css";

const Button = ({ changeParagraphColor }) => {
  return (
    <button className="btn" onClick={changeParagraphColor}>
      mude a cor
    </button>
  );
};

export default Button;
