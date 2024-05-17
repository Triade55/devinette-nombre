import { useEffect, useState } from "react";

export const useCountdown = () => {
  const [countdown, setCountdown] = useState(30);
    
  useEffect(() => {
    const timer = setTimeout(() => {
      countdown > 0 ? setCountdown(countdown - 1) : setCountdown(0);
    }, [1000]);

    return () => clearTimeout(timer);
  }, [countdown]);

  return {
    countdown,
    setCountdown,
  };
};
