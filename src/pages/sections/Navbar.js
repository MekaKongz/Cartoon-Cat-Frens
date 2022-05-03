import React, { useState, useEffect } from "react";
import * as gs from "../../globalStyles";
import {
  StyledNavbar,
  StyledLogo,
  StyledMenuIcon,
  StyledNavMenu,
  StyledUl,
  StyledLi,
  StyledLink,
} from "./Navbar.styles";

import { FaTwitter, FaDiscord } from "react-icons/fa";

import { FaBars, FaTimes } from "react-icons/fa";
import OpenseaLogo from "../../assets/opensea-logo.svg";
import CCFLogo from "../../assets/ccf-logo.PNG";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMenu = () => setOpen(!open);

  const handleNavbarClick = (e) => {
    const target = e.currentTarget.getAttribute("to");
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
  };

  const navbarShow = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarShow);
    return () => window.removeEventListener("scroll", navbarShow);
  }, []);

  return (
    <StyledNavbar show={show}>
      <StyledLogo src={CCFLogo} alt="Cartoon Cat Frens" show={show} />

      <StyledMenuIcon onClick={handleMenu}>
        {open ? (
          <FaTimes fill={show ? "#1c1c1c" : "white"} size={"25px"} />
        ) : (
          <FaBars fill={show ? "#1c1c1c" : "white"} size={"25px"} />
        )}
      </StyledMenuIcon>

      <StyledNavMenu open={open} show={show}>
        <StyledUl className="nav-links">
          <StyledLi className="nav-link" to="about" onClick={handleNavbarClick}>
            <StyledLink href="#" show={show}>
              ABOUT
            </StyledLink>
          </StyledLi>
          <StyledLi className="nav-link" to="roadmap" onClick={handleNavbarClick}>
            <StyledLink href="#" show={show}>
              ROADMAP
            </StyledLink>
          </StyledLi>
          <StyledLi className="nav-link" to="team" onClick={handleNavbarClick}>
            <StyledLink href="#" show={show}>
              TEAM
            </StyledLink>
          </StyledLi>
          <StyledLi className="nav-link" to="faq" onClick={handleNavbarClick}>
            <StyledLink href="#" show={show}>
              FAQ
            </StyledLink>
          </StyledLi>
        </StyledUl>

        <gs.SocialMedias>
          <gs.SocialMediaLink target="_blank" href="https://twitter.com/cartooncatfrens"><gs.SocialMedia show={show} fill="white" size={"30px"} as={FaTwitter} /></gs.SocialMediaLink>
          <gs.SocialMediaLink target="_blank" href="https://discord.gg/pHEyD3KJ"><gs.SocialMedia show={show} fill="white" size={"30px"} as={FaDiscord} /></gs.SocialMediaLink>
          <gs.SocialMediaLink target="_blank" href="https://opensea.io/collection/cartoon-cat-frens"><gs.SocialMedia src={OpenseaLogo} alt="Opensea" size={"30px"} show={show} as={"img"}/></gs.SocialMediaLink>
        </gs.SocialMedias>
      </StyledNavMenu>
    </StyledNavbar>
  );
};
