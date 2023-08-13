import React from 'react'
import './stylesheet.css'
import styled from "styled-components";

function Footer() {
  return (
    <Part4>
        <St>
            <h2>Get the latest addition in Red Dead Redemption Series now.</h2>
            <Purchase>
                <h5><b><a href="https://www.rockstargames.com/reddeadredemption2/order" target="_blank" rel="noreferrer noopener">BUY NOW</a></b></h5>
            </Purchase>
        </St>
    </Part4>
  );
};

 const Part4 = styled.div`
  color: aliceblue;
  background-color: #1f2937;
  // background-color: #ee0000;
  border-radius: 10px;
  /* display: flex; */
  margin: 50px;
  padding: 50px;
  justify-content: center;
`;

const St =styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Purchase =styled.div`
  border: 5px solid white;
  padding: 5px;
  border-radius: 10px;
`;

export default Footer;