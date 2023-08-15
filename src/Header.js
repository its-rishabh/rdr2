import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <>
    <BgImage />
    <ParaBg>
        <Paragraph>
            America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in 
            the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. 
            With federal agents and the best bounty hunters in the nation massing on their heels, 
            the gang must rob, steal and fight their way across the rugged heartland of America 
            in order to survive. As deepening internal divisions threaten to tear the gang apart, 
            Arthur must make a choice between his own ideals and loyalty to the gang who raised him.
        </Paragraph>
    </ParaBg>
    </>
  )
}

const BgImage = styled.section`
    margin-top: 40px;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-size: contain;
    background-origin: content-box;
    background-repeat: no-repeat;
    background-image: url("/images/BgImg.jpg");

    @media (min-width: 480px) and (max-width: 767px) {
        dispaly: none!important;
        background-image: url("/images/BgImgM.jpg");
        position: relative;    
        overflow: hidden;
        background-size: contain;
        background-origin: content-box;
        background-repeat: no-repeat;
    }

    @media (max-width: 479px) {
        dispaly: none!important;
        background-image: url("/images/BgImgM.jpg");
    }
`;

const ParaBg = styled.section`
    width: 100vw;
    background-size: cover;
    background-image: url("/images/ParaBg.jpg");
    background-origin: content-box;
    display: flex;
    flex-flow: row wrap;

    @media (max-width: 768px) {
        padding: 37px 50px;
        max-width: 100%;
        background-size: cover;
    }
`;

const Paragraph =styled.p`
    color: #ffffff;

    margin: auto;
    text-align: center;
    padding-top: 20px;
    padding: bottom: 30px;
    width:665px;
    font-size: 19px;

    @media (max-width: 768px) {
        font-size: 21px;
        width: 100%;
        padding: 0;
    }
`;

export default Header;