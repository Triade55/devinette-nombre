import { useState } from "react";
import { Countdown } from "./countdown";

export default function GuessNumberInput({numberValue,
  setNumberValue}) {
 
  
 
  return (
    <>
      <div className="mt-2">
        <input
          id="numberInput"
          name="numberInput"
          type="number"
          required
          className=" text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e)=>{setNumberValue(e.target.value)}}
          value={numberValue}
          
        />
      </div>
    </>
  );
}
