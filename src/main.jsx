import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import { mainStore } from "./redux/store";
import App from "./App";

const BodyStyles = createGlobalStyle`
  body{
    background-color: #FBFBFB;
  }
`;
const FontFamily = createGlobalStyle`
  @font-face {
      font-family: 'TT-interfaces';
      src: url(/src/assets/fonts/TTInterfaces-ExtraLight.woff) format(woff);
      font-display: swap;
      font-weight:200;
  }
  @font-face {
      font-family: 'TT-interfaces';
      src: url(/src/assets/fonts/TTInterfaces-Light.woff) format(woff);
      font-display: swap;
      font-weight: 300;
  }
  @font-face {
      font-family: 'TT-interfaces';
      src: url(/src/assets/fonts/TTInterfaces-Regular.woff) format(woff);
      font-display: swap;
      font-weight: 400;
  }
  @font-face {
      font-family: 'TT-interfaces';
      src: url(/src/assets/fonts/TTInterfaces-Medium.woff) format(woff);
      font-display: swap;
      font-weight: 500;
  }
  @font-face {
      font-family: 'TT-interfaces';
      src: url(/src/assets/fonts/TTInterfaces-SemiBold.woff) format(woff);
      font-display: swap;
      font-weight:600;
  }
  @font-face {
      font-family: 'TT-interfaces';
      src: url(/src/assets/fonts/TTInterfaces-Bold.woff) format(woff);
      font-display: swap;
      font-weight: 700;
  }
  @font-face {
      font-family: 'TT-interfaces';
      src: url(/src/assets/fonts/TTInterfaces-ExtraBold.woff) format(woff);
      font-display: auto;
      font-weight: 800;
  }
`;
const ResetCss = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ul,
  ol {
    padding: 0;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: 'TT-interfaces', sans-serif;
    font-weight: 400;
    overflow-x: hidden;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    max-width: 100%;
    display: block;
  }
  article>*+* {
    margin-top: 1em;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  button {
    cursor: pointer;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <BrowserRouter>
        <FontFamily />
        <BodyStyles />
        <ResetCss />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
