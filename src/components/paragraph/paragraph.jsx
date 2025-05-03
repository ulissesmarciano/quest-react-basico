import React from "react";
import Button from "../button/button";
import "./paragraph.css";

const getClasseTexto = (element) => {
  return element.classList.contains("paragraph-container")
    ? "paragraph-container"
    : "paragraph-container changed";
};

const handleParagraphColor = (event) => {
  const newClass = getClasseTexto(event.currentTarget.previousElementSibling);
  event.currentTarget.previousElementSibling.className = newClass;
};

const Paragraph = ({ text }) => {
  return (
    <div className={"paragraph-container"}>
      <p>{text}</p>
      <Button changeParagraphColor={handleParagraphColor} />
      <hr />
    </div>
  );
};

export default Paragraph;
