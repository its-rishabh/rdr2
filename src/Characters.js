import React from 'react'
import { styled } from 'styled-components';
import SVG from 'react-inlinesvg';

function Characters() {
  return (
    <Part2>
        <Container>
            <Image src={require("./images/ArthurMorgan.jpg")} alt="Arthur Morgan" />
            <SvgFrame src='./images/ArthurBg.svg' />
            {/* <Name><h2>PC RELEASE</h2></Name> */}
        </Container>
        <Container>
            <Image src={require('./images/Dutch.jpg')} alt="Reviews" />
            <SvgFrame src='./images/ReviewBg.svg' />
            {/* <Name><h2>REVIEWS</h2></Name> */}
        </Container>
        <Container>
            <Image src='./images/RDO.jpg' alt="Red Dead Online" />
            <SvgFrame src='./images/RDOBg.svg' />
            {/* <Name><h2>RED DEAD ONLINE</h2></Name> */}
        </Container>
        <Container>
            <Image src='./images/Weaponary.jpg' alt="Weaponary" />
            <SvgFrame src='./images/WeaponaryBg.svg' />
            {/* <Name><h2>WEAPONRY</h2></Name> */}
        </Container>
        <Container>
            <Image src={require('./images/SE.jpg')} alt="SPECIAL & ULTIMATE EDITIONS" />
            <SvgFrame src='./images/SEBg.svg' />
            {/* <Name><h2>SPECIAL & ULTIMATE EDITIONS</h2></Name> */}
        </Container>
        <Container href="https://youtu.be/eaW0tYpxyp0" target="_blank">
            <Image src="./images/GameplayVideo.jpg" alt="Gameplay Video" />
            <SvgFrame src='./images/GameplayBg.svg' />
            {/* <Name><h2>GAMEPLAY VIDEO PART 2</h2></Name> */}
        </Container>
        <Container><div>
            <Image src={require("./images/VanDerGang.jpg")} alt="THE VAN DER LINDE GANG" />
            <SvgFrame src='./images/GangBg.svg' /></div>
            <Name><h2>THE VAN DER LINDE GANG</h2></Name>
        </Container>
        <Container>
            <Image src="./images/Wildlife.jpg" alt="Wildlife" />
            <SvgFrame src='./images/WildlifeBg.svg' />
            <Name><h2>WILDLIFE</h2></Name>
        </Container>
        <Container>
            <Image src={require("./images/SoundTrack.jpg")} alt="SOUNDTRACK" />
            <SvgFrame src='./images/SoundTrackBg.svg' />
            <Name><h2>SOUNDTRACK</h2></Name>
        </Container>    
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

const Container = styled.a`
    position: relative;
    
    text-decoration: none;
    color: #ffffff;

    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    transition: transform 450ms;
    &:hover {
        color: #ee0000;
        img{
            transform: scale(1.08);
        }
    }
    Overflow: hidden;

    @media only screen and (max-width: 768px) {
        &:hover {
            img {transform: scale(1.02);}
        }
    }
`;

const Image =styled.img`
    display: block;    
    width: auto;
    max-height: 570px;
    transition: transform 450ms;
`;

const SvgFrame = styled(SVG)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Name = styled.span`
    margin-top: 25px;
    font-size: 22px;
`;

export default Characters;