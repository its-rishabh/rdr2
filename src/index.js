import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createGlobalStyle } from 'styled-components';
import RgFontTTF from './fonts/RgFont.ttf';
import UniversCondensedTTF from './fonts/UniversCondensed.ttf'
import Header from './Header';
import Characters from './Characters';
import Quote from './Quote';
import Footer from './Footer';
import Navbar from './Navbar';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'RgFont';
    src: url(${RgFontTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
    }
    * {
      font-family: 'RgFont';
      font-weight: bold;
    }

    @font-face {
      font-family: 'PText';
      src: url(${UniversCondensedTTF}) format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: auto;
    }
    p {
      font-family: 'PText';
      font-weight: normal;
    }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <GlobalStyle />

    <Navbar />
    <Header />
    <Characters />
    <Quote />
    <Footer />
  </React.StrictMode>
);