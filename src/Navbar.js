import React from 'react'
import styled from 'styled-components';
import RgFontTTF from './fonts/RgFont.ttf'

function Navbar() {
  return (
    <Bar>
        NavBar
        <Purchase><NavLink href="/" target="_blank">BUY NOW</NavLink></Purchase>
    </Bar>
  )
}

const Bar = styled.div`
    display:flex;
    justify-content: space-between;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    height: 40px;
    background-color: black;
`;

const Purchase = styled.button`
    display: flex;
    align-items: center;
    color: black;
    margin: none;
    background-color: #ee0000;
    border: none;
    padding: 20px;
    margin: 1px;
    @font-face {
        font-family: 'RgFont';
        src: url(${RgFontTTF}) format('truetype');
    }
`;

const NavLink = styled.a`
    text-decoration: none;
    color: black;
    font-size: 25px;
    font-weight: bold;
    padding: 0 15px;
    &:hover {
        color: white;
        
    }
`;

export default Navbar;