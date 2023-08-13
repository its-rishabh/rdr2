import React from 'react'
import styled from 'styled-components';

function Navbar() {
  return (
    <Bar>
        <Title>RED DEAD REDEMPTION 2</Title>
        <Purchase href="/" target="_blank"><NavLink>BUY NOW</NavLink></Purchase>
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
    z-index: 1;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    color: #ffffff;
    margin: none;
    border: none;
    padding: 20px;
    font-size: 25px;
    transition: 450ms;
    &:hover {
        color: #ee0000;
        cursor: pointer;
    }
`;

const Purchase = styled.a`
    display: flex;
    align-items: center;
    color: black;
    background-color: #ee0000;
    // background: url{require('./images/order_btn_background.png')} no-repeat;
    
    border: none;
    padding: 0 20px;
    margin: 1px;

    text-decoration: none;
    color: black;
    font-size: 25px;
    font-weight: bold;

    transition: 450ms;
    &:hover {
        color: white;
        cursor: pointer;
    }
`;

const NavLink = styled.div`
    padding: 0 15px;
`;

export default Navbar;