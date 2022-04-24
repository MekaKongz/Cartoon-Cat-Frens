import React, { useState } from "react";
import styled from "styled-components";
import * as gs from "../../globalStyles";

import { FaMinus, FaPlus } from "react-icons/fa";

const StyledAccordionData = [
  [
    {
      title: "1. Build the community.",
      content: `As we know communities in the are the backbone to the NFT space. Without a community you have no foundation. So, our goal with CCF is to build a community first and foremost. Getting into a lot of communities is kind of expensive so we want to bring back the affordable entry point for a great community.`,
    },
    {
      title: "2. Do collaborations & giveaways.",
      content: `We know that giving back is very important to our holders. So, we will continue to collab with projects as much as we can. Going through the entire process of building an NFT project is not easy so we will support new and existing projects. We want to be able to give a platform for new start-ups to be able to be accepted into this space as it's hard. If you have been through it you know what I'm talking about.`,
    },
    {
      title: "3. Alpha community.",
      content: `I myself have an Alpha Community and I understand the importance of alpha information within the community. So, once the mint takes place I will merge my community into CCF. Holding a CCF NFT will be your key to access this information. I have been sharing small samples now but once we mint and everyone holders their NFT the full Alpha will be shared at that time.`,
    },
    {
      title: `4. Mint!`,
    },
  ],
  [
    {
      title: "1. Growing our team.",
      content: `So, what we plan to do with our mint money + 5% of the royalties on any Opensea listing is to reinvest it into our community.

      How we will do that is by hiring more people to join our team from NFT Analysis to Alpha Hunters and much much more! We want to provide the best for our community holders and really give back to our community in a different way.`,
    },
    {
      title: "2. Continuing to build our community.",
      content: `Building a community is a lot of work. How do you get people to trust you or buy-in to you? Well, we do that by delivering! Our NFT & Shill community was small but we created an extremely positive environment there and I want to instill that into CCF. I believe once people really see what our team is made of they will really enjoy CCF and that is what it's all about.`,
    },
    {
      title: "3. Creating a space.",
      content: `Chatting over channels is cool and all but really opening a space where we can communicate with our voice is what we want to do. We can accomplish so much more when we communicate effectively! We, want to host 1-3 calls a week where people can come in and join the space. People can jump up on stage and get feedback/knowledge on a project they're looking at. Getting feedback constructively really helps people. Our spaces will be for everyone whether you an OG or a newbie to NFT's. We want to welcome everyone with open arms into CCF.

      We believe that communities are the backbone of the NFT space and without we wouldn't make it as far as we do. So, that is our main goal of CCF. Build a solid foundation and continue to grow and build upon that.`,
    },
  ],
  [
    {
      title: "Continuing to provide utility to our holders through collaborations & whitelisting. Continuing to expand with potentially creating a web store to purchase WL spots through an ERC-20 token.",
    },
  ],
];

const StyledAccordion = styled.div`
  width: 90%;

  @media only screen and (min-width: 992px) {
    width: 100%;
    max-width: 100%;
  }
`;

const StyledAccordionItem = styled.div`
  background-color: #161616;
  padding: 16px 10px;
  overflow: hidden;
  border-top: 2px solid #333333; 

  transition: background-color 0.5s;

  ${({hover}) => hover && (`
    &:hover {
      cursor: pointer;
      background-color: #111111;
    }
  `)}
`;

const AccordianQuestion = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  
  z-index: 1;
`;

const StyledAccordionTitle = styled.div`
  color: white;
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5rem;
  
`;

const AccordianTransition = styled.div`
  max-height: ${({ show }) => (show ? "500px" : "0px")};
  overflow: hidden;
  transition: all 0.5s ease-out;
`;

const StyledAccordionContent = styled.div`
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 1.5rem;

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  padding: 30px;

  z-index: -1;
`;

const PhaseCard = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 40px;
  padding: 10px 0px;

  transition: transform 0.3s ease 0s;
  text-align: left;
  border-radius: 10px;
  background-color: #161616;
  box-shadow: 8px 8px 10px rgb(0 0 0 / 0.5);
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    width: 600px;
  }
`;

const PhaseHeader = styled.div`
  width: 100%;
  color: var(--${({ color }) => (color ? color : "white")});
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 8px;
`;

const PhaseContentContainer = styled.div`
  background-color: #111111;
  box-shadow: inset 0 0 10px rgb(0 0 0 / 10);
`;

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledAccordionItem hover={content} onClick={() => setIsActive(!isActive)}>
      <AccordianQuestion>
        <StyledAccordionTitle>{title}</StyledAccordionTitle>
        {content &&
          (isActive ? <FaMinus fill="white" /> : <FaPlus fill="white" />)}
      </AccordianQuestion>
      <AccordianTransition show={isActive}>
        {content && (
          <PhaseContentContainer>
            <StyledAccordionContent show={isActive}>
              {content}
            </StyledAccordionContent>
          </PhaseContentContainer>
        )}
      </AccordianTransition>
    </StyledAccordionItem>
  );
};

export const Roadmap = () => {
  return (
    <gs.Container
      fd="column"
      jc="center"
      ai="center"
      bgcolor="#1c1c1c"
      style={{ padding: "32px 32px" }}
      id="roadmap"
    >
      <gs.TextHeader color="yellow">Roadmap</gs.TextHeader>
      <PhaseCard>
        <PhaseHeader>Phase 1</PhaseHeader>
        <StyledAccordion>
          {StyledAccordionData[0].map(({ title, content }) => (
            <Accordion title={title} content={content} key={title} />
          ))}
        </StyledAccordion>
      </PhaseCard>

      <PhaseCard>
        <PhaseHeader>Phase 2</PhaseHeader>
        <StyledAccordion>
          {StyledAccordionData[1].map(({ title, content }) => (
            <Accordion title={title} content={content} key={title} />
          ))}
        </StyledAccordion>
      </PhaseCard>

      <PhaseCard>
        <PhaseHeader>Phase 3</PhaseHeader>
        <StyledAccordion>
          {StyledAccordionData[2].map(({ title, content }) => (
            <Accordion title={title} content={content} key={title} />
          ))}
        </StyledAccordion>
      </PhaseCard>
    </gs.Container>
  );
};
