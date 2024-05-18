import { useEffect, useState } from "react";
import GuessNumberInput from "./champ";
import { ProgressBar } from "./progress-bar";
import { useTentative } from "./hook/useCount";
import clsx from "clsx";
import logo from "../images/logo.png"
export const GuessNumberView = () => {
  const {
    tentative,
    countTentative,
    guessNumber,
    funcIsGood,
    countdown,
    push,
  } = useTentative();
  const [numberValue, setNumberValue] = useState();
  const [resultat, setResultat] = useState(
    "Le nombre mystère est entre 0 et 100"
  );
  const [max,setMax] = useState(100)
  const [min,setMin] = useState(0)
  const verifResult = (e) => {
    e.preventDefault();
    countTentative();
    if (numberValue == guessNumber) {
      setResultat("bravooooo");
      push();
      funcIsGood();
      setMax(100)
      setMin(0)
    }
    if (guessNumber > numberValue) {
      setResultat("Le nombre mystère est plus grand");
      setMin(numberValue)
    }
    if (guessNumber < numberValue) {
      setResultat("Le nombre mystère est plus petit");
      setMax(numberValue)
    }
    setNumberValue(" ");
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src={logo}
            alt="Guess Number by Huro "
          />
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            
            <div
              className={clsx(
                countdown < 5 && "bg-red-600 border-red-600",
                "border-2 inline-block py-3 px-5 rounded-full cursor-not-allowed"
              )}
            >
              {countdown ==0 ? guessNumber : countdown}

            </div>

          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            method=""
            onSubmit={(e) => verifResult(e)}
          >
            <div>
              {countdown > 0 && (
                <>
                  <div className="flex items-center justify-between">
                    <div className="block text-sm font-medium leading-6 text-gray-900">
                      {resultat}
                    </div>
                    <div className="text-sm max-w-xl">
                      <ProgressBar tentative={tentative} />
                    </div>
                  </div>

                  <GuessNumberInput
                    numberValue={numberValue}
                    setNumberValue={setNumberValue}
                  />
                  <div className="flex justify-between mt-5">
                    <span className="inline-flex items-center rounded-md bg-blue-300 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                      {min}
                    </span>
                    ------------------------
                    <span className="inline-flex items-center rounded-md bg-blue-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                      {max}
                    </span>
                  </div>
                </>
              )}
            </div>

            <div>
              {countdown > 0 ? (
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Valider {guessNumber}
                </button>
              ) : (
                <a
                  href="/"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  rejour la partir
                </a>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
