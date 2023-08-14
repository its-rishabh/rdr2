import React from 'react'
import { styled } from 'styled-components';


function Quote() {
  return (
    <Part3>
      <Qtop />
      <Container>
          <Catchphrase>        
            <img src="./images/OFL2.svg" alt="Outlaws for Life"/>
          </Catchphrase> 
        </Container>
    </Part3>
  )
}

const Part3 = styled.div`
  padding-bottom: 1rem;
  margin-bottom: -35px;
  z-index: -10;
  position: relative;
  background-image: url("/images/QBimg.jpg");
`;

const Qtop = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/images/QTop.png");
  height: 8rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Catchphrase = styled.span`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 75%;
`;

export default Quote;