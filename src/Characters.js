import React from 'react'
import "./stylesheet.css"
import { styled } from 'styled-components';

function Characters() {
  return (
    <Part2>
        <Heading>
            <h1><b>Characters</b></h1>
        </Heading>
        <CharacterProfile>
            <Image><Img src={require("./images/ArthurMorgan.jpg")} alt="Arthur Morgan" />
                    <Name><h2>ARTHUR MORGAN</h2></Name>
            </Image>
            <Image><Img src={require("./images/illustration_image_2.png")} alt="Sadie Adler" />
                     <Name><h2>SADIE ADLER</h2></Name>
            </Image>
            <Image><Img src={require("./images/illustration_image_3.png")} alt="John Marston" />
                     <Name><h2>JOHN MARSTON</h2></Name>
            </Image>
            <Image><Img src={require("./images/illustration_image_4.png")} alt="Abigail Roberts" />
                    <Name><h2>ABIGAIL ROBERTS</h2></Name>
            </Image>
        </CharacterProfile>
    </Part2>
  )
}

const Part2 = styled.div`
    border: 5px;
    padding: 15px;
`;

const Heading = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
`;

const CharacterProfile = styled.div`
    flex-wrap: wrap;
    
    // border: 5px;
    // border-color: aliceblue;

    margin: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`;

const Image = styled.div`
    padding: 5px;
    // border: 5px solid #3882f6;
    // border-radius: 20px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    color: #ffffff;
    transition: 450ms;
    &:hover {
        color: #ee0000;
    }    
`;

const Img =styled.img`
    border: 5px;
    border-color: white;
    width: auto;
    height: 250px;
    transition: transform 450ms;
    &:hover {
        transform: scale(1.18);
    }
`;

const Name = styled.div`
    margin-top: 25px;
`;

export default Characters;