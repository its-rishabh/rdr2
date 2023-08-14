import React from 'react'
import { styled } from 'styled-components';


function Quote() {
  return (
    <Part3>
      <Qtop />
      <Container />
    </Part3>
  )
}

const Part3 = styled.section`
  background-image: url("/images/QBimg.jpg");
  height: 310px;
  margin-bottom: -70px;
  justify-content: center;
  display: flex;
  flex-flow: row wrap;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const Qtop = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/images/QTop.png");
  width: 100%;
  height: 108px;
`;

const Container = styled.div`
  background-image: url("/images/OFL2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  max-width: 800px;
  width: 90%;
  margin-top: -70px;

  @media (max-width: 768px) {
    background-image: url("/images/OFL.svg");
    width: 58%;
    margin-top: -18%;
  }
`;

export default Quote;