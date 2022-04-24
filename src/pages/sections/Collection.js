import React from "react";
import styled from "styled-components";
import * as gs from "../../globalStyles";

import DummyNFT from "../../assets/nft.png";

const CollectionWrapper = styled.div`
  width: 60%;
`;

const CollectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const NFT = styled.img`
  width: 90%;
  margin-bottom: 40px;
  transition: transform 0.3s ease 0s;
  box-shadow: 8px 8px 10px rgb(0 0 0 / 0.5);

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

export const Collection = () => {
  return (
    <gs.Container
      fd="column"
      jc="center"
      ai="center"
      bgcolor="#1c1c1c"
      style={{ padding: "32px 0px" }}
    >
      <gs.TextHeader color="green">Cat Frens</gs.TextHeader>
      <CollectionWrapper>
        <CollectionContainer>
          <NFT src={DummyNFT} alt="NFT 1" />
          <NFT src={DummyNFT} alt="NFT 2" />
          <NFT src={DummyNFT} alt="NFT 3" />
          <NFT src={DummyNFT} alt="NFT 4" />
          <NFT src={DummyNFT} alt="NFT 5" />
          <NFT src={DummyNFT} alt="NFT 6" />
        </CollectionContainer>
      </CollectionWrapper>
    </gs.Container>
  );
};
