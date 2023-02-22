import React from "react";
import { Helmet } from "react-helmet";

function HelmetComponent() {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style type="text/css">
        {`
        @font-face {
            font-family: 'Pretendard';
            font-weight: 200;
            src: url(./assets/font/Pretendard/Pretendard-ExtraLight.woff2);
            src: url(./assets/font/Pretendard/Pretendard-ExtraLight.woff2) format('font-woff2');    
            unicode-range: U+AC00-D7A3;
        }
        
        @font-face {
            font-family: 'Pretendard';
            font-weight: 400;
            src: url(./assets/font/Pretendard/Pretendard-Regular.woff2);
            src: url(./assets/font/Pretendard/Pretendard-Regular.woff2) format('font-woff2');    
            unicode-range: U+AC00-D7A3;
        }

        @font-face {
            font-family: 'Pretendard';
            font-weight: 700;
            src: url(./assets/font/Pretendard/Pretendard-Bold.woff2);
            src: url(./assets/font/Pretendard/Pretendard-Bold.woff2) format('font-woff2');    
            unicode-range: U+AC00-D7A3;
        }

        @font-face {
            font-family: 'Pretendard';
            font-weight: 800;
            src: url(./assets/font/Pretendard/Pretendard-ExtraBold.woff2);
            src: url(./assets/font/Pretendard/Pretendard-ExtraBold.woff2) format('font-woff2');    
            unicode-range: U+AC00-D7A3;
        }
        `}
      </style>
    </Helmet>
  );
}

export default HelmetComponent;
