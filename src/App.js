import "./App.css";
import { GuessNumberView } from "./composantes/guess-number.view";
// import {Countdown} from "./composantes/countdown";
// import { GuestNumberGame } from "./composantes/guess-number-game";

function App() {
  return (
    <div className="max-w-full flex justify-center ">
      <GuessNumberView/>
    </div>
  );
}

export default App;
