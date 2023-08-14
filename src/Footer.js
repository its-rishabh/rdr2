import React from 'react'
// import './stylesheet.css'
import styled from "styled-components";

function Footer() {
  return (
    <BgImage />
  );
};

const BgImage = styled.div`
    height: 18rem;
    background-position: top;
    background-size: cover;
    background-image: url("/images/Footer.png");
    z-index: 20;
`;

export default Footer;