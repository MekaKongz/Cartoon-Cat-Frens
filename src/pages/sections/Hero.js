import React from "react";
import * as gs from "../../globalStyles";
import {
  ButtonsWrapper,
  StyledName,
  StyledIntroduction,
  StyledDate,
  StyledButton,
  Breaker,
  NFTContainer,
  StyledNFT,
} from "./Hero.styles";

import { FaTwitter, FaDiscord } from "react-icons/fa";
import OpenseaLogo from "../../assets/opensea-logo.svg";

import NFT from "../../assets/nft.png";

export const Hero = () => {
  const currentDateTime = new Date();
  const targetDateTime = new Date('Fri, 13 May 2022 07:00:00 GMT');

  return (
    <gs.Container
      jc="center"
      ai="center"
      bgcolor="#1c1c1c"
      style={{ padding: "124px 0px 32px 0px" }}
    >
      <gs.ResponsiveWrapper flex={1}>
        <gs.Container flex={1} jc="space-between">
          <StyledName>
            Cartoon Cat <br />
            Frens
          </StyledName>

          <StyledIntroduction>
            Cartoon Cat Frens is a 90s-2000s inspired NFT collection that brings
            back nostalgic memories of your favorite Cartoons and Anime's. Our
            goal is to a build a community and reward our holders.
          </StyledIntroduction>

          <gs.Container>
            <StyledDate>Meowlist Mint: May 13</StyledDate>
            <StyledDate>Public Mint: May 14</StyledDate>
            <StyledDate></StyledDate>
          </gs.Container>

          <gs.Container>
            <ButtonsWrapper fw="wrap">
              {Date.parse(currentDateTime) > Date.parse(targetDateTime) && (
                <gs.SocialMediaLink href="/minting-dapp/">
                  <StyledButton>MINT</StyledButton>
                </gs.SocialMediaLink>
              )}
              <Breaker />
              <gs.SocialMediaLink
                target="_blank"
                href="https://twitter.com/cartooncatfrens"
              >
                <gs.SocialMedia color="white" size={48} as={FaTwitter} />
              </gs.SocialMediaLink>
              <gs.SocialMediaLink
                target="_blank"
                href="https://discord.gg/pHEyD3KJ"
              >
                <gs.SocialMedia color="white" size={48} as={FaDiscord} />
              </gs.SocialMediaLink>
              <gs.SocialMediaLink
                target="_blank"
                href="https://opensea.io/collection/cartoon-cat-frens"
              >
                <gs.SocialMedia
                  src={OpenseaLogo}
                  alt="Opensea"
                  size={"48px"}
                  as={"img"}
                />
              </gs.SocialMediaLink>
            </ButtonsWrapper>
          </gs.Container>
        </gs.Container>
        <gs.SpacerLarge />
        <NFTContainer>
          <StyledNFT src={NFT} ttx={"-15%"} tty={"-35%"} />
          <StyledNFT src={NFT} ttx={"45%"} tty={"0%"} />
          <StyledNFT src={NFT} ttx={"-45%"} tty={"35%"} />
        </NFTContainer>
      </gs.ResponsiveWrapper>
    </gs.Container>
  );
};
