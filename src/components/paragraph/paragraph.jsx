import React, { useState } from "react";
import Button from "../button/button";
import "./paragraph.css";

const Paragraph = ({ text }) => {
  const [textStyle, setTextStyle] = useState(false);

  const handleParagraphColor = () => {
    setTextStyle(!textStyle)
  };

  return (
    <div className={textStyle ? "paragraph-container changed" : "paragraph-container"}>
      <p>{text}</p>
      <Button changeParagraphColor={handleParagraphColor} />
      <hr />
    </div>
  );
};

export default Paragraph;
