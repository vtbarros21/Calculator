import styled, { css } from "styled-components";

export const Centercalc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Calculatorbg = styled.div`
  background: linear-gradient(#394253, #232936);
  height: 750px;
  width: 428px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 1px 0px 48px 2px rgba(0,0,0,0.46);
-webkit-box-shadow: 1px 0px 48px 2px rgba(0,0,0,0.46);
-moz-box-shadow: 1px 0px 48px 2px rgba(0,0,0,0.46);
`;

export const Historycalc = styled.p`
  display: flex;
  justify-content: end;
  font-weight: 400;
  font-size: 1.2em;
  letter-spacing: 0.2em;
  color: #fff;
  padding: 140px 10px 20px 0px;
`;

export const Result = styled.input`
  font-weight: 600;
  color: #00b0a4;
  font-size: 6em;
  background-color: transparent;
  border: none;
  width: 428px;
  outline: none;
  border-bottom: 3px solid #0f8a86;
  text-align: end;
  padding-right: 10px;
`;

export const ButtonStyle = css`
  border: none;
  font-size: 1.5em;
  font-weight: 600;
  background: transparent;
  cursor: pointer;
  &:hover{
    transition: 0.5s;
    background-color: #23424d;
  }
`;

export const DisplayButton = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  height: 450px;
  width: 100%;
`;

export const LetterGreen = styled.button`
  ${ButtonStyle}
  color:  #00b0a4;
  
`;

export const LetterGreenRed = styled.button`
  ${ButtonStyle}
  color:  #00b0a4;
  &:hover{
    background-color: #7B0008;
    transition: 0.5s;
    border-radius: 3px;
  }
`;

export const ButtonNumber = styled.button`
  ${ButtonStyle}
  color: #fff;
`;

export const ButtonNumberGreen = styled.button`
  ${ButtonStyle}
  border-radius: 0px 0px 0px 50px;
  color: #fff;
`;

export const ButtonResult = styled.button`
  ${ButtonStyle}
  color: #fff;
  background-color: #23424d;
  border-radius: 0px 0px 50px 0px;
  &:hover {
    background-color: #00b0a4;
  }
`;
export const ButtonSignal = styled.button`
  ${ButtonStyle}
  color: #00B0A4;
  background-color: #23424d;
  &:hover {
    background-color: #00b0a4;
    color: #fff;
  }
`;
