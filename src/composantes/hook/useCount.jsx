import { useEffect, useState } from "react";
import { useCountdown } from "../../hook/useCountdown";

export const useTentative = () => {
  
  const [tentative, setTentative] = useState(1);
  const [guessNumber, setGuessNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const { countdown, setCountdown} = useCountdown();

  const push = () => {
    setCountdown(countdown + 15);
  };

  const funcIsGood = () => {
    setTentative(1);
    setGuessNumber(Math.floor(Math.random() * 100) + 1);
  };
  const countTentative = () => {
    if (tentative >= 5) {
      setTentative(1);
      setGuessNumber(Math.floor(Math.random() * 100) + 1);
      return;
    }
    setTentative(tentative + 1);
  };
  return {
    countTentative,
    tentative,
    guessNumber,
    funcIsGood,
    countdown,
    push,
  };
};
