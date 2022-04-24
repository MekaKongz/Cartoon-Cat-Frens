import React, { useState } from 'react';


import {FaMinus, FaPlus} from "react-icons/fa";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? <FaMinus/> : <FaPlus/>}</div>
      </div>
      <div className={isActive ? "test active" : "test"}>
        <div className={isActive ? "accordion-content active" : "accordion-content"}>{content}</div>
      </div>
    </div>
  );
};

export default Accordion;