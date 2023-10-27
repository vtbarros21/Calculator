import React, { useState } from "react";
import {
  Calculatorbg,
  Result,
  Historycalc,
  Centercalc,
  DisplayButton,
  ButtonResult,
  ButtonNumber,
  ButtonSignal,
  LetterGreen,
  LetterGreenRed,
  ButtonNumberGreen,
} from "./style";

const Home = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(display));
      } catch (error) {
        setResult("Erro");
      }
      setDisplay("");
    } else if (value === "C") {
      setDisplay("");
      setResult(0);
    } else if (value === "%") {
      if (/[\d.]$/.test(display)) {
        const numberBeforePercentage = display.match(/[\d.]+$/);

        if (numberBeforePercentage) {
          const percentageValue = parseFloat(numberBeforePercentage[0]) / 100;

          setDisplay(display.replace(/[\d.]+$/, percentageValue));
        }
      }
    } else if (value === "√") {
      const squareRoot = Math.sqrt(display);
      const formatResult =
        squareRoot % 1 === 0 ? squareRoot : squareRoot.toFixed(2);

      setResult(formatResult);
      setDisplay(formatResult);
    } else if (value === "AC") {
      if (display !== 0) {
        setDisplay(display.slice(0, -1));
      }
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <>
      <Centercalc>
        <Calculatorbg>
          <div>
            <Historycalc>{display === "" ? "0" : display}</Historycalc>
            <Result
              className="Result"
              id="disabledInput"
              type="number"
              value={result}
              disabled
            ></Result>
          </div>
          <DisplayButton>
            <LetterGreen onClick={() => handleButtonClick("AC")}>
              DEL
            </LetterGreen>
            <LetterGreenRed onClick={() => handleButtonClick("C")}>
              C
            </LetterGreenRed>
            <LetterGreen onClick={() => handleButtonClick("√")}>√</LetterGreen>
            <ButtonSignal onClick={() => handleButtonClick("/")}>
              ÷
            </ButtonSignal>
            <ButtonNumber onClick={() => handleButtonClick("7")}>
              7
            </ButtonNumber>
            <ButtonNumber onClick={() => handleButtonClick("8")}>
              8
            </ButtonNumber>
            <ButtonNumber onClick={() => handleButtonClick("9")}>
              9
            </ButtonNumber>
            <ButtonSignal onClick={() => handleButtonClick("*")}>
              ×
            </ButtonSignal>
            <ButtonNumber onClick={() => handleButtonClick("4")}>
              4
            </ButtonNumber>
            <ButtonNumber onClick={() => handleButtonClick("5")}>
              5
            </ButtonNumber>
            <ButtonNumber onClick={() => handleButtonClick("6")}>
              6
            </ButtonNumber>
            <ButtonSignal onClick={() => handleButtonClick("-")}>
              -
            </ButtonSignal>
            <ButtonNumber onClick={() => handleButtonClick("1")}>
              1
            </ButtonNumber>
            <ButtonNumber onClick={() => handleButtonClick("2")}>
              2
            </ButtonNumber>
            <ButtonNumber onClick={() => handleButtonClick("3")}>
              3
            </ButtonNumber>
            <ButtonSignal onClick={() => handleButtonClick("+")}>
              +
            </ButtonSignal>
            <ButtonNumberGreen onClick={() => handleButtonClick("%")}>
              %
            </ButtonNumberGreen>
            <ButtonNumber onClick={() => handleButtonClick("0")}>
              0
            </ButtonNumber>
            <ButtonNumber onClick={() => handleButtonClick(".")}>
              .
            </ButtonNumber>
            <ButtonResult onClick={() => handleButtonClick("=")}>
              =
            </ButtonResult>
          </DisplayButton>
        </Calculatorbg>
      </Centercalc>
    </>
  );
};

export default Home;
