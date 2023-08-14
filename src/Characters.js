import React from 'react'
import { styled } from 'styled-components';

function Characters() {
  return (
    <Part2>
        <Image>
            <Img src={require("./images/ArthurMorgan.jpg")} alt="Arthur Morgan" />
            <Name><h2>PC RELEASE</h2></Name>
        </Image>
        <Image>
            <Img src={require('./images/Dutch.jpg')} alt="Reviews" />
            <Name><h2>REVIEWS</h2></Name>
        </Image>
        <Image>
            <Img src='./images/RDO.jpg' alt="Red Dead Online" />
            <Name><h2>RED DEAD ONLINE</h2></Name>
        </Image>
        <Image>
            <Img src='./images/Weaponary.jpg' alt="Weaponary" />
            <Name><h2>WEAPONRY</h2></Name>
        </Image>
        <Image>
            <Img src={require('./images/SE.jpg')} alt="SPECIAL & ULTIMATE EDITIONS" />
            <Name><h2>SPECIAL & ULTIMATE EDITIONS</h2></Name>
        </Image>
        <Image1 href="https://youtu.be/eaW0tYpxyp0" target="_blank">
            <Img src="./images/GameplayVideo.jpg" alt="Gameplay Video" />
            <Name><h2>GAMEPLAY VIDEO PART 2</h2></Name>
        </Image1>
        <Image>
            <Img src={require("./images/VanDerGang.jpg")} alt="THE VAN DER LINDE GANG" />
            <Name><h2>THE VAN DER LINDE GANG</h2></Name>
        </Image>
        <Image>
            <Img src="./images/Wildlife.jpg" alt="Wildlife" />
            <Name><h2>WILDLIFE</h2></Name>
        </Image>
        <Image>
            <Img src={require("./images/SoundTrack.jpg")} alt="SOUNDTRACK" />
            <Name><h2>SOUNDTRACK</h2></Name>
        </Image>    
    </Part2>
  )
}

const Part2 = styled.section`
    padding: 15px;
    color: #ffffff;
    flex-wrap: wrap;
    margin: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
`;

const Image = styled.div`
    padding: 5px;
    
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    transition: 450ms;
    &:hover {
        color: #ee0000;
    }
    Overflow: hidden;
`;

const Image1 = styled.a`
    text-decoration: none;
    color: #ffffff;
    padding: 5px;
    
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    transition: 450ms;
    &:hover {
        color: #ee0000;
    }
    overflow: hidden;
`;

const Img =styled.img`
    border: 5px;
    
    width: auto;
    max-height: 570px;
    transition: transform 450ms;

    @media only screen and (min-width: 768px) {
        &:hover {
            transform: scale(1.08);
        }
    }

    @media only screen and (max-width: 768px) {
        height: 300px;
        width: auto;
        &:hover {
            transform: scale(1.02);
        }
    }
`;

const Name = styled.div`
    margin-top: 25px;
    font-size: 22px;
`;

export default Characters;