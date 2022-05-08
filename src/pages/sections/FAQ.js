import React, { useState } from "react";
import styled from "styled-components";
import * as gs from "../../globalStyles";

import { FaMinus, FaPlus } from "react-icons/fa";

const StyledAccordion = styled.div`
  width: 90%;

  @media only screen and (min-width: 992px) {
    width: 800px;
    max-width: 800px;
  }
`;

const StyledAccordionItem = styled.div`
  background-color: #222222;
  border-radius: 25px;
  margin: 20px 0px;
  overflow: hidden;
  box-shadow: 8px 8px 10px rgb(0 0 0 / 0.2);

  transition: background-color .5s;

  &:hover {
    background-color: #111111;
  }
`;

const AccordianQuestion = styled.div`
  position: relative;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  cursor: pointer; 
  z-index: 1;
`;

const StyledAccordionTitle = styled.div`
  color: white;
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

const AccordianTransition = styled.div`
  max-height:  ${({ show }) => show ? "500px" : "0px"};
  overflow: hidden;
  transition: all .5s ease-out;
`;

const StyledAccordionContent = styled.div`
  color: white;
  font-size: 1.5rem;
  line-height: 1.5rem;

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  padding: 30px;

  z-index: -1;
`;

const StyledAccordionData = [
  {
    title: "What is the total supply of Cartoon Cat Frens?",
    content: `777`,
  },
  {
    title: "What is the mint price?",
    content: `0.055 ETH`,
  },
  {
    title: "When is the launch date?",
    content: `TBA`,
  },
  {
    title: `How many can you mint?`,
    content: `Our meowlisted frens can mint 1 Cat Fren while 5 Cat Frens can be minted in the public launch per transaction.`,
  },
];

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledAccordionItem>
      <AccordianQuestion onClick={() => setIsActive(!isActive)}>
        <StyledAccordionTitle>{title}</StyledAccordionTitle>
        {isActive ? <FaMinus fill="white"/> : <FaPlus fill="white"/>}
      </AccordianQuestion>
      <AccordianTransition show={isActive}>
        <StyledAccordionContent show={isActive}>{content}</StyledAccordionContent>
      </AccordianTransition>
    </StyledAccordionItem>
  );
};

const FAQ = () => {
  return (
    <gs.Container
      fd="column"
      jc="center"
      ai="center"
      bgcolor="#1c1c1c"
      style={{ padding: "32px 0px" }}
      id="faq"
    >
      <gs.TextHeader color="pink">Frequently Asked Questions</gs.TextHeader>
      <StyledAccordion>
        {StyledAccordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} key={title} />
        ))}
      </StyledAccordion>
    </gs.Container>
  );
};

export default FAQ;
