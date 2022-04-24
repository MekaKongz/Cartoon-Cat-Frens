import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { connect } from "../redux/actions/blockchain";
import { fetchData } from "../redux/actions/data";

import "./MintingDapp.css";
import * as gs from "../globalStyles";

import NFT from "../assets/nft.png";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--white);
  padding: 10px;
  font-family: 'Coiny';
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--black);
  width: 200px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--white);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--black);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 768px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--white);
  text-decoration: none;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 992px) {
    width: 250px;
  }
  @media (min-width: 1200px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

const MintingDapp = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <gs.Screen>
      <gs.Container
        flex={1}
        ai={"center"}
        style={{ padding: 24 }}
        bgcolor="#1c1c1c"
        image={null}
      >
        <StyledLogo alt={"logo"} src={"/config/images/logo.png"} />
        <gs.SpacerLarge/>
        <ResponsiveWrapper>
          <gs.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg
              alt={"example"}
              src={NFT}
              style={{ transform: "scaleX(-1)" }}
            />
          </gs.Container>
          <gs.SpacerLarge/>
          <gs.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            bgcolor={"#141414"}
            style={{
              padding: 24,
              borderRadius: 24,
              border: "2px solid #222222",
              boxShadow: "8px 8px 10px #111111",
            }}
          >
            <gs.TextHeader
              style={{
                textAlign: "center",
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--white)",
              }}
            >
              0 / {CONFIG.MAX_SUPPLY}
            </gs.TextHeader>
            <gs.Text
              style={{
                textAlign: "center",
                color: "var(--white)",
              }}
            >
              <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
              </StyledLink>
            </gs.Text>

            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <gs.TextHeader
                  style={{ textAlign: "center", color: "var(--white)" }}
                >
                  The sale has ended.
                </gs.TextHeader>
                <gs.Text
                  style={{ textAlign: "center", color: "var(--white)" }}
                >
                  You can still find {CONFIG.NFT_NAME} on
                </gs.Text>
                <gs.SpacerSmall />
                <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </StyledLink>
              </>
            ) : (
              <>
                <gs.TextHeader
                  style={{ textAlign: "center", color: "var(--white)" }}
                >
                  1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                  {CONFIG.NETWORK.SYMBOL}.
                </gs.TextHeader>
                <gs.SpacerXSmall />
                <gs.Text
                  style={{ textAlign: "center", color: "var(--white)" }}
                >
                  Excluding gas fees.
                </gs.Text>
                <gs.SpacerSmall />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <gs.Container ai={"center"} jc={"center"}>
                    <gs.Text
                      style={{
                        textAlign: "center",
                        color: "var(--white)",
                      }}
                    >
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </gs.Text>
                    <gs.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <gs.SpacerSmall />
                        <gs.Text
                          style={{
                            textAlign: "center",
                            color: "var(--white)",
                          }}
                        >
                          {blockchain.errorMsg}
                        </gs.Text>
                      </>
                    ) : null}
                  </gs.Container>
                ) : (
                  <>
                    <gs.Text
                      style={{
                        textAlign: "center",
                        color: "var(--white)",
                      }}
                    >
                      {feedback}
                    </gs.Text>
                    <gs.SpacerMedium />
                    <gs.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </StyledRoundButton>
                      <gs.SpacerMedium />
                      <gs.Text
                        style={{
                          textAlign: "center",
                          color: "var(--white)",
                        }}
                      >
                        {mintAmount}
                      </gs.Text>
                      <gs.SpacerMedium />
                      <StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </StyledRoundButton>
                    </gs.Container>
                    <gs.SpacerSmall />
                    <gs.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "BUSY" : "BUY"}
                      </StyledButton>
                    </gs.Container>
                  </>
                )}
              </>
            )}
          </gs.Container>
          <gs.SpacerLarge/>
          <gs.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg alt={"example"} src={NFT} />
          </gs.Container>
        </ResponsiveWrapper>
        <gs.SpacerMedium/>
        <gs.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
          <gs.SubText
            style={{
              textAlign: "center",
              color: "var(--white)",
            }}
          >
            Please make sure you are connected to the right network {CONFIG.NETWORK.NAME} and the correct address. Please note: Once you make the
            purchase, you cannot undo this action.
          </gs.SubText>
          <gs.SubText
            style={{
              textAlign: "center",
              color: "var(--white)",
            }}
          >
            We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract to successfully
            mint your NFT. We recommend that you don't lower the gas limit.
          </gs.SubText>
        </gs.Container>
      </gs.Container>
    </gs.Screen>
  );
};

export default MintingDapp;
