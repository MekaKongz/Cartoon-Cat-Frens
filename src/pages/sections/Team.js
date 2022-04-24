import React from "react";
import styled from "styled-components";
import * as gs from "../../globalStyles";

import DummyNFT from "../../assets/nft.png";

const TeamWrapper = styled.div`
  width: 60%;
`;

const TeamContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledMember = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 40px;

  transition: transform 0.3s ease 0s;
  text-align: center;
  border-radius: 10px;
  background-color: #161616;
  box-shadow: 8px 8px 10px rgb(0 0 0 / 0.5);
  overflow: hidden;
  &:hover {
    transform: scale(110%);
  }

  @media only screen and (min-width: 768px) {
    width: 45%;
  }

  @media only screen and (min-width: 992px) {
    width: 30%;
  }
`;

const NFT = styled.img`
  width: 100%;
`;

const StyledName = styled.p`
  color: white;
  font-size: 1.5rem;
  line-height: 1.5rem;
  letter-spacing: 2px;
`;

const StyledRole = styled.p`
  color: #aaaaaa;
  font-size: 1rem;
  line-height: 1rem;
  padding-bottom: 10px;
`;

export const Team = () => {
  return (
    <gs.Container
      fd="column"
      jc="center"
      ai="center"
      bgcolor="#1c1c1c"
      style={{ padding: "32px 0px" }}
      id="team"
    >
      <gs.TextHeader color="red">Meet The Team</gs.TextHeader>
      <TeamWrapper>
        <TeamContainer>
          <StyledMember>
            <NFT src={DummyNFT} alt="NFT" />
            <StyledName>Yemar</StyledName>
            <StyledRole>Founder</StyledRole>
          </StyledMember>
          <StyledMember>
            <NFT src={DummyNFT} alt="NFT" />
            <StyledName>woongdre</StyledName>
            <StyledRole>Co-Founder</StyledRole>
          </StyledMember>
          <StyledMember>
            <NFT src={DummyNFT} alt="NFT" />
            <StyledName>Skip</StyledName>
            <StyledRole>Artist</StyledRole>
          </StyledMember>
          <StyledMember>
            <NFT src={DummyNFT} alt="NFT" />
            <StyledName>KULOT</StyledName>
            <StyledRole>Artist</StyledRole>
          </StyledMember>
          <StyledMember>
            <NFT src={DummyNFT} alt="NFT" />
            <StyledName>Jebb</StyledName>
            <StyledRole>Dev</StyledRole>
          </StyledMember>
        </TeamContainer>
      </TeamWrapper>
    </gs.Container>
  );
};
