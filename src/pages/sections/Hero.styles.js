import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: ${({ fw }) => (fw ? fw : "no-wrap")};
  justify-content: center;
  align-items: stretched;
  width: 100%;
  & > * > * {
    margin-right: 0px !important;
    margin: 5px 10px !important;
  }
  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
    & > * > *{
      margin-right: 15px !important;
    }
  }
`;

export const StyledName = styled.p`
  flex: 1;
  width: 100%;
  font-family: "LucyTheCat";
  font-size: 5rem;
  line-height: 4.5rem;
  color: #57ddff;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const StyledIntroduction = styled.p`
  flex: 1;
  width: 100%;
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: #ffffff;
  text-align: center;
  margin: 25px 0px;
  @media (min-width: 768px) {
    text-align: left;
    margin: 0xp;
  }
`;

export const StyledButton = styled.button`
  font-size: 20px;
  font-family: "Coiny", cursive;
  font-weight: 900;
  line-height: 20px;
  color: #57ddff;
  width: 160px;
  height: 48px;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  background: none;
  outline: 5px solid #57ddff;
  outline-offset: -4px;
  transition: 0.5s;

  &:hover {
    background-color: var(--blue);
    color: var(--black);
  }
`;

export const Breaker = styled.div`
  margin: -5px 0px;
  @media (max-width: 992px) {
    height: 0;
    margin-right: -15px !important;
    flex-basis: 100%;
  }
`;

export const NFTContainer = styled.div`
  position: relative;
  flex: 1;
  min-height: 350px;
  @media (min-width: 992px) {
    min-height: 500px;
  }
  @media (min-width: 1200px) {
    min-height: 600px;
  }
`;

export const StyledNFT = styled.img`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transform: translate(
    ${({ ttx }) => (ttx ? ttx : "0%")},
    ${({ tty }) => (tty ? tty : "0%")}
  );
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.8);
  width: 200px;
  @media (min-width: 992px) {
    width: 250px;
  }
  @media (min-width: 1200px) {
    width: 300px;
  }
  transition: width 0.5s;
`;