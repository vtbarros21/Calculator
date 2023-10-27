import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Barlow", sans-serif;
    input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    -moz-appearance: textfield;
  }
};

body {
    background-image: linear-gradient(to left, #181725, #372071, #4F1453, #540026);
    background-size: 500% 100%;
    animation: gradient-animation 10s infinite alternate;
}
@keyframes gradient-animation {
  0%{
    background-position: 0%;
  } 100%{
    background-position: 100%;
  }
}
`;
