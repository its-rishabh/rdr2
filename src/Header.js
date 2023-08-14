import React from 'react'
import './stylesheet.css';
import styled from 'styled-components';

function Header() {
  return (
    <>
    <BgImage />
    <ParaBg>
        <Div>
        <Paragraph>
            <p>America, 1899.<br />
            Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and
            the best bounty hunters in the nation massing on their heels, the gang must rob, steal and
            fight their way across the rugged heartland of America in order to survive. As deepening
            internal divisions threaten to tear the gang apart, Arthur must make a choice between his
            own ideals and loyalty to the gang who raised him.</p>
        </Paragraph>
        </Div>
    </ParaBg>
    </>
  )
}

const BgImage = styled.div`
    margin-top: 40px;

    position: relative;
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/BgImg.jpg");
    
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media only screen and (max-width: 768px) {
        position: relative;
        width: 100vw;
        height: 100vh;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/BgImgM.jpg");
    }
`;

const ParaBg = styled.div`
    position: relative;
    width: 100vw;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/ParaBg.jpg");
    
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;

    display: flex;
    text-align: center;
    justify-content: center;
    padding: 1.25rem;
`;

const Div = styled.div`
    width: 83.333333%;
    display: block;
`;

const Paragraph =styled.p`
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    display: flex;
    line-height: 25px;
    font-weight: 400;
    font-size: 21px;
    text-align: center;
    margin: 0;
`;

export default Header;