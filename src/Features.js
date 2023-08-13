import React from 'react'
import styled from 'styled-components';

function Features() {
  return (
    <Part5>
        <Heading>
            <h1><b>Features</b></h1>
        </Heading>
        <CharacterProfile>
            <Image>
                <Img src={require("./images/Wildlife.jpg")} alt="Arthur Morgan" />
                <H4><h2>WILDLIFE</h2></H4>
            </Image>
            <Image>
                <Img src={require("./images/illustration_image_2.png")} alt="Sadie Adler" />
                <H4><h2>WEAPONRY</h2></H4>
            </Image>
            <Image>
                <Img src={require("./images/illustration_image_3.png")} alt="John Marston" />
                <H4><h2>RED DEAD ONLINE</h2></H4>
            </Image>
            <Image1 href="https://youtu.be/eaW0tYpxyp0" target="_blank">
                <Img src={require("./images/GameplayVideo.jpg")} alt="Abigail Roberts" />
                <H4><h2>GAMEPLAY VIDEO</h2></H4>
            </Image1>
        </CharacterProfile>
    </Part5>
  )
}

const Part5 = styled.div`
    // border: 5px;
    color: #ffffff;
    padding: 15px;
`;

const Heading = styled.header`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CharacterProfile = styled.div`
    flex-wrap: wrap;
    margin: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Image = styled.div`
    padding: 5px;
    // border: 5px solid #3882f6;
    border-radius: 20px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;    
`;

const Image1 = styled.a`
    text-decoration: none;
    color: #ffffff;
    padding: 5px;
    // border: 5px solid #3882f6;
    border-radius: 20px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;    
`;

const Img =styled.img`
    border: 5px;
    // border-color: white;
    width: auto;
    height: 250px;
    transition: transform 450ms;
    &:hover {
        transform: scale(1.18);
    }
`;

const H4 = styled.div`
    margin-top: 25px;
`;

export default Features;