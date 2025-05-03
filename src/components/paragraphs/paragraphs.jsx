import React from "react";
import Paragraph from "../paragraph/paragraph";
import "./paragraphs.css";

const Paragraphs = () => {
  return (
    <div className="paragraphs-container">
      <h3 className="paragraphs-title">Parágrafos</h3>
      <Paragraph
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sint iste explicabo. Aliquam autem a ut fugiat perferendis ipsum libero voluptas similique dolorem! Tempora asperiores in, maxime ex sequi omnis."
      />

      <Paragraph 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestiae, ab excepturi quia numquam aliquid debitis adipisci perferendis aliquam minus doloremque est provident libero dolore eos consectetur repudiandae voluptatum officiis!" 
      />      
      <Paragraph 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, harum distinctio aperiam optio assumenda quasi nostrum velit laborum, libero natus molestias? Molestias dolor doloribus officiis odio ea soluta! Omnis, reiciendis."
      />
    </div>
  );
};

export default Paragraphs;
