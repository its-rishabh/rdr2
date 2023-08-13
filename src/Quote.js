import React from 'react'
import { styled } from 'styled-components';


function Quote() {
  return (
    <Part3>
        <Catchphrase>        
            <h1>OUTLAWS FOR LIFE</h1>
        </Catchphrase>
    </Part3>
  )
}

const Part3 = styled.div`
  background-color: #ee0000;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Catchphrase = styled.div`
  // display: flex;
  // justify-content: center;
  color: #ffffff;
  font-size: 60px;
  padding-right: 45px;
  padding-left: 45px;
`;

export default Quote;