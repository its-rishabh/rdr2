import React from 'react'
import './stylesheet.css'
import styled from "styled-components";

function Footer() {
  return (
    <Part4>
      <h2>Get the latest addition in Red Dead Redemption Series now.</h2>
    </Part4>
  );
};

 const Part4 = styled.div`
  color: #ffffff;
  display: flex;
  margin: 20px;
  padding: 20px;
  justify-content: center;
`;

export default Footer;