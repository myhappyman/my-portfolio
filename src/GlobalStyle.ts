import { createGlobalStyle } from "styled-components";
import PretendardExtraLight from "./assets/fonts/Pretendard/PretendardExtraLight.woff2";
import PretendardRegular from "./assets/fonts/Pretendard/PretendardRegular.woff2";
import PretendardBold from "./assets/fonts/Pretendard/PretendardBold.woff2";
import PretendardExtraBold from "./assets/fonts/Pretendard/PretendardExtraBold.woff2";

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
  
  @font-face {
      font-family: 'Pretendard';
      font-weight: 200;
      src: url(${PretendardExtraLight}) format('woff2');    
      unicode-range: U+AC00-D7A3;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Pretendard';
      font-weight: 400;
      src: url(${PretendardRegular}) format('woff2');    
      unicode-range: U+AC00-D7A3;
      font-display: swap;
  }

  @font-face {
      font-family: 'Pretendard';
      font-weight: 700;
      src: url(${PretendardBold}) format('woff2');    
      unicode-range: U+AC00-D7A3;
      font-display: swap;
  }

  @font-face {
      font-family: 'Pretendard';
      font-weight: 800;
      src: url(${PretendardExtraBold}) format('woff2');    
      unicode-range: U+AC00-D7A3;
      font-display: swap;
  }

  /* REM rules */
  html{font-size:3px !important;}
  @media screen and (min-width:216px){html{font-size:3.5px !important;}}
  @media screen and (min-width:229px){html{font-size:3.8px !important;}}
  @media screen and (min-width:250px){html{font-size:4.2px !important;}}
  @media screen and (min-width:252px){html{font-size:4.5px !important;}}
  @media screen and (min-width:288px){html{font-size:4.8px !important;}}
  @media screen and (min-width:300px){html{font-size:5px !important;}}
  /* iphone 5 */
  @media screen and (min-width:320px){html{font-size:6px !important;}}
  @media screen and (min-width:360px){html{font-size:7px !important;}}
  @media screen and (min-width:396px){html{font-size:8px !important;}}
  @media screen and (min-width:432px){html{font-size:8.4px !important;}}
  @media screen and (min-width:460px){html{font-size:8.8px !important;}}
  @media screen and (min-width:504px){html{font-size:9.2px !important;}}
  @media screen and (min-width:540px){html{font-size:9.5px !important;}}
  @media screen and (min-width:576px){html{font-size:9.8px !important;}}
  @media screen and (min-width:600px){html{font-size:10px !important;}}
  @media screen and (min-width:820px){html{font-size:10px !important;}}

  body {font-size:1rem !important;}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;    
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }  
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }  
  body {
    font-family: 'Poppins', 'Pretendard', sans-serif;    
    font-weight: 300;
    font-display: swap;
    /* iphone 갑자기 폰트 크게 터지는 현상 방지용 */
    -webkit-text-size-adjust: 100%;
    color: ${(props) => props.theme.textColor};    
    background-color: ${(props) => props.theme.bgRGBAColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  /* input */
  input,textarea{font-size:1rem; border:0.05rem solid #000; background-color:#fff; transition:border .15s; box-sizing:border-box; vertical-align:middle; outline:none;}
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
    -webkit-text-fill-color: #000 !important;
  }

  html::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  html::-webkit-scrollbar-thumb {
    background-color: #4e4e4e;
    border-radius: 100px;
  }
  html::-webkit-scrollbar-track {
    background-color: #4e4e4e;
    border-radius: 100px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
`;

export default GlobalStyle;
