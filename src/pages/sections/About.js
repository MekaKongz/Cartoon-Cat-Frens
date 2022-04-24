import React from "react";
import styled from "styled-components";
import * as gs from "../../globalStyles";

import { Parallax } from "react-parallax";

import CatPlaygroundOne from "../../assets/cat-playground1.jpg";

const StyledParallax = styled(Parallax)`
  display: none;

  @media only screen and (min-width: 1200px) {
    display: block;
    width: 50%;
    min-height: 800px;
  }
`;

export const About = () => {
  return (
    <gs.Container
      ai="center"
      jc="center"
      bgcolor="#1c1c1c"
      style={{ padding: "32px 0px" }}
      id="about"
    >
      <gs.CardWrapper>
        <gs.Container flex={1} style={{ padding: "64px 5%" }}>
          <gs.TextHeader color="orange">About Us</gs.TextHeader>

          <gs.Text>
            Cartoon Cat Frens project is a community first driven project where
            we are here to build a foundation and create a space for new and/or
            experienced NFT enthusiasts can collaborate to make the Web3 space a
            better environment for all. Our goals with this project is to
            challenge ourselves to continue to provide value to our holders
            through different means.
          </gs.Text>
          <br />
          <gs.Text>
            We started a group where we would just discuss and talk about NFT's
            which eventually evolved into an Alpha group called NFT & Shill.
            This slowly became something myself (Yemar) and woongdre really
            wanted to grow and develop as we really just love the Web3 space and
            want to build a great community. So, CCF is our first step into
            opening our group to the public.
          </gs.Text>
          <br />
          <gs.Text>
            Our limits are our communities mind! We can't wait to show you what
            we're made of.
          </gs.Text>
        </gs.Container>
        <StyledParallax
          bgImage={CatPlaygroundOne}
          bgImageAlt="Cat Playground"
          strength={500}
        />
      </gs.CardWrapper>
    </gs.Container>
  );
};
