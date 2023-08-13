import React from 'react'
import './stylesheet.css';
import styled from 'styled-components';

function Header() {
  return (
    <Part1>
    <Heading>
        <Img src={require("./images/logo.png")} alt="RDR2 logo" />
        <Links>
            <div className="login"><a href="login.html">Login</a></div>
            <Signup><a href="signup.html">SignUp</a></Signup>
        </Links>
    </Heading>
    <Content>
        <div>
            {/* <h1>RED DEAD REDEMPTION 2</h1> */}
            <p>America, 1899.<br />
                Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and<br />
                the best bounty hunters in the nation massing on their heels, the gang must rob, steal and<br />
                fight their way across the rugged heartland of America in order to survive. As deepening<br />
                internal divisions threaten to tear the gang apart, Arthur must make a choice between his<br />
                own ideals and loyalty to the gang who raised him.</p>
        </div>
        <div>
            <Img src={require("./images/placeholder.png")} alt="placeholder" />
        </div>
    </Content>
</Part1>
  )
}

const Part1 = styled.div`
    margin-top: 40px;
    background-color: #1f2937;
`;

const Heading = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Links = styled.div`
    color: antiquewhite;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Content =styled.div`
    display: flex;
    color: aliceblue;
    justify-content: space-around;
    align-items: center;
    image-resolution: 800px*auto;
`;

const Signup = styled.div`
    margin-left: 25px;
`;

const Img =styled.img`
    border: 5px;
    border-color: white;
    width: 200px;
    height: auto;
`;

export default Header;