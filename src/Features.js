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
                <Img src={require("./images/illustration_image_1.png")} alt="Arthur Morgan" />
                <h4>Arthur Morgan</h4>
            </Image>
            <Image>
                <Img src={require("./images/illustration_image_2.png")} alt="Sadie Adler" />
                <h4>Sadie Adler</h4>
            </Image>
            <Image>
                <Img src={require("./images/illustration_image_3.png")} alt="John Marston" />
                <h4>John Marston</h4>
            </Image>
            <Image>
                <Img src={require("./images/illustration_image_4.png")} alt="Abigail Roberts" />
                <h4>Abigail Roberts</h4>
            </Image>
        </CharacterProfile>
    </Part5>
  )
}

const Part5 = styled.div`
    border: 5px;
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
    border: 5px;
    // border-color: aliceblue;
    margin: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Image = styled.div`
    padding: 5px;
    border: 5px solid #3882f6;
    border-radius: 20px;
    
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

export default Features;