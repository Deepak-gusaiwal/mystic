import React from "react";
import styled from "styled-components";
import { Button } from "./GlobalStyle";
import {FaWhatsapp} from 'react-icons/fa'
import playerImg from '../images/Hero/player1.png';
const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroFlex>
        <div className="flexLeft">
          <h2>Legends</h2>
          <h3>Never</h3>
          <h4>Give Up</h4>
          <Button whatsaap as="a" href="/">Whatsapp Us <FaWhatsapp/></Button>
        </div>

        <div className="flexright">
          <div className="imgBox">
           <img src={playerImg} alt="heroImg" />
          </div>
        </div>
      </HeroFlex>
    </HeroWrapper>
  );
};
const HeroWrapper = styled.section`
  padding: 1rem;
  position: relative;
  isolation: isolate;

  ::before{
    content:'';
    position: absolute;
    top:-100px;
    left:0;
    width:100%;
    height:100%;
    background-color: ${({ theme }) => theme.color.bg};
    z-index: -1;
    transform: skewY(-12deg);
  }

`;
const HeroFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .flexLeft {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: max(40vw,300px);
    color: white;

    h2 {
      font-size: max(8vw, 4rem);
    }

    h3 {
      font-size: max(6vw, 3rem);
    }

    h4 {
      font-size: max(4vw, 2rem);
    }
    a {
      margin-top: 1rem;
    }

    @media (max-width:500px){
        text-align: center;
        justify-content: center;
        align-items: center;
    }
  }
  .flexright {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: max(40vw,300px);
   
  }
  .flexright .imgBox {
    width: 100%;
    height: 100%;
    max-height: 600px;
  }
 
  .flexright .imgBox img{
width: 100%;
height: 100%;
object-fit: contain ;
transform: scaleX(-1);
  }
`;
export default HeroSection;
