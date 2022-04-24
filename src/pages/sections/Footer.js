import React from "react";
import * as gs from "../../globalStyles";

import { FaTwitter, FaDiscord } from "react-icons/fa";
import OpenseaLogo from "../../assets/opensea-logo.svg";

export const Footer = () => {
  return (
    <gs.Container
      style={{ minHeight: "72px" }}
      jc="center"
      ai="center"
      as={"footer"}
    >
      <gs.ResponsiveWrapper flex={1} jc="space-between" ai="center">
        <gs.Text
          color="black"
          style={{ margin: "16px 0px", textAlign: "center" }}
        >
          © Cartoon Cat Frens 2022. All rights reserved
        </gs.Text>

        <gs.SocialMedias className="socmed-links">
          <gs.SocialMediaLink
            target="_blank"
            href="https://twitter.com/cartooncatfrens"
          >
            <gs.SocialMedia fill="#1c1c1c" size={"30px"} as={FaTwitter} />
          </gs.SocialMediaLink>
          <gs.SocialMediaLink
            target="_blank"
            href="https://discord.gg/pHEyD3KJ"
          >
            <gs.SocialMedia fill="#1c1c1c" size={"30px"} as={FaDiscord} />
          </gs.SocialMediaLink>
          <gs.SocialMediaLink
            target="_blank"
            href="https://opensea.io/collection/cartoon-cat-frens"
          >
            <gs.SocialMedia
              src={OpenseaLogo}
              alt="Opensea"
              size={"30px"}
              style={{ filter: `brightness(10%)` }}
              as={"img"}
            />
          </gs.SocialMediaLink>
        </gs.SocialMedias>
      </gs.ResponsiveWrapper>
    </gs.Container>
  );
};
