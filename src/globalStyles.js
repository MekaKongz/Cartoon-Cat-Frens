import styled from "styled-components";

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "stretched")};
  align-items: ${({ ai }) => (ai ? ai : "stretched")};
  flex-wrap: ${({ fw }) => (fw ? fw : "no-wrap")};
  width: 90%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CardWrapper = styled.div`
  flex: 1;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #161616;
  box-shadow: 8px 8px 10px rgb(0 0 0 / 0.5);
  overflow: hidden;
`;

export const TextHeader = styled.p`
  width: 90%;
  color: var(--${({ color }) => color ? color : "white"});
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  color: var(--${({ color }) => color ? color : "white"});
  font-size: 1.5rem;
  line-height: 1.5rem;
`

export const SubText = styled.p`
  color: var(--white);
  font-size: 16px;
  line-height: 1.6;
`;

export const SocialMedias = styled.div`
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 16px 0px;
    display: flex;
    justify-content: center;

    & > * {
        margin: 0 30px;
    }
  }
`;

export const SocialMedia = styled.div`
  width: ${({ size }) => size ? size : "0px"};
  height: ${({ size }) => size ? size : "0px"};
  margin: 0 10px;
  cursor: pointer;

  transition: all 0.3s ease 0s;

  ${({show}) => show && `filter: brightness(10%);`}


  &:hover {
    filter: brightness(70%);
  }
`;

export const SocialMediaLink = styled.a`
  margin: 0;
`





export const TextTitle = styled.p`
  color: var(--white);
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
`;

export const TextSubTitle = styled.p`
  color: var(--white);
  font-size: 18px;
  line-height: 1.6;
`;

export const TextDescription = styled.p`
  color: var(--white);
  font-size: 16px;
  line-height: 1.6;
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;
