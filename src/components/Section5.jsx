import React from "react";
import "./section5.css";
import RightSideImage from "../assets/img/2251 2.png";

function Section5() {
  return (
    <>
      <div className="section_main">
        <div className="bg-Image-shadow d-flex justify-content-center">
          <div className="container section5 row ">
            <div className="section_data col-lg-6 ">
              <h1>Web3 & Blockchain</h1>
              <h5>
                web and will incorporate Blockchain technologies (various
                cryptocurrencies and (NFT’s) for end user.
              </h5>
              <p>
                MetaOneVerse is a HyperDeflationary Token with MetaVerse
                Development , Staking , MetaOneVerse Charity Programme and NFT
                Marketplace. MetaOneVerse Token works on an autonomous,
                frictionless, yield farming and liquidity generation protocol.
                Hold $M1Verse tokens in your wallet and earn passive income in
                Binance pegged USD ($BUSD) – a regulated stable-coin pegged 1-1
                to the US dollar. Contract{" "}
              </p>
            </div>
            <div className="section_img col-lg-6">
              <img src={RightSideImage}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5;
