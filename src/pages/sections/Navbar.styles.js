import styled from "styled-components";
import { FaTwitter, FaDiscord } from "react-icons/fa";

export const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  height: 64px;
  padding: 8px 5%;
  background-color: ${({ show }) => (show ? "#fff" : "none")};

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 999;

  transition: all 0.2s ease 0s;
`;

export const StyledLogo = styled.img`
  height: 56px;
  width: 56px;

  filter: brightness(${({ show }) => (show ? "5%" : "100%")});
`;

export const StyledMenuIcon = styled.div`
  display: block;

  @media only screen and (min-width: 768px) {
    display: none;
    cursor: pointer;
  }
`;

export const StyledNavMenu = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
        background: ${({ show }) => (show ? "#fff" : "#1c1c1c")};
        position: absolute;
        width: 100%;
        top: 64px;
        left: 0px;
        flex-direction: column;

        transition: transform 0.5s ease 0s;

        transform: translate(${({open}) => open ? "0%" : "-100%"}, 0%);
    }
`;

export const StyledUl = styled.ul`
  list-style: none;
  margin-right: 30px;

  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    margin-right: 0px;
  }
`;

export const StyledLi = styled.li`
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  cursor: pointer;

  display: inline-block;
  padding: 0px 12px;

  @media only screen and (min-width: 992px) {
    padding: 0px 24px;
  }
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    border-top: 1px solid rgb(69, 69, 69);

    padding: 24px 0px;

    display: flex;
    justify-content: center;
  }
`;

export const StyledLink = styled.div`
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${({ show }) => (show ? "#1c1c1c" : "white")};
  text-decoration: none;

  transition: color 0.3s ease 0s;

  &:hover {
    color: rgb(183, 183, 183);
  }
`;

/*
.navbar {
    position: fixed;
    width: 100%;
    height: 64px;
    padding: 8px 5%;
    background-color: none;

    display: flex;
    justify-content: space-between;
    align-items: center;

    z-index: 1;

    transition: all 0.2s ease 0s;
}

.show {
    background: #fff;
}

.logo {
    height: 56px;
    width: 56px;
}

.menu-icon {
    display: none;
    cursor: pointer;
}

.nav-menu {
    display: flex;
    align-items: center
}

.nav-links {
    list-style: none;
    margin-right: 30px;

    display: flex;
    align-items: center;
}

.nav-links li a{
    transition: color 0.3s ease 0s;
}

.nav-links li a:hover{
    color: rgb(183, 183, 183);
}

.nav-links li {
    display: inline-block;
    padding: 0px 24px;
}

li, a {
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: white !important;
    text-decoration: none;    
}

.show .nav-menu ul li a {
    color: black !important;
}

.socmed-links {
    display: flex;
    align-items: center;
}

.socmed-link {
    width: 30px;
    margin: 0 10px;
    cursor: pointer;
}

@media only screen and (max-width : 1400px) {
 
}

@media only screen and (max-width : 1200px) {
 
}

@media only screen and (max-width : 992px) {
    .menu-icon {
        display: block;
    }

    .nav-menu {
        background: rgb(29, 29, 29);
        position: absolute;
        width: 100%;
        top: 80px;
        left: 0px;
        flex-direction: column;

        transition: transform 0.5s ease 0s;

        transform: translate(-100%, 0%);
    }

    .navbar > .active {
        transform: translate(0%, 0%);
    }

    .nav-links {
        width: 100%;
        flex-direction: column;

        margin-right: 0px;
    }

    .nav-link {
        width: 100%;
        border-top: 1px solid rgb(69, 69, 69);
    }

    .nav-links li {
        display: inline-block;
        padding: 24px 0px;

        display: flex;
        justify-content: center;
    }

    .navbar .socmed-links {
        width: 100%;
        padding: 16px 0px;
        border-top: 1px solid rgb(69, 69, 69);
        justify-content: center;
    }

    .socmed-link {
        margin: 0 20px;
    }
}

@media only screen and (max-width : 768px) {

}

@media only screen and (max-width : 480px) {

}
*/
