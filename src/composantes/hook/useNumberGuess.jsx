import { useEffect, useState } from "react";

export const useGuessNumber = ({ mustChanged = false } = {}) => {
  const [guessNumber, setGuessNumber] = useState(Math.floor(Math.random() * 100) + 1);
    
  if (mustChanged) {
    setGuessNumber(Math.floor(Math.random() * 100) + 1);
  }

  return {
    guessNumber,
  };
};
