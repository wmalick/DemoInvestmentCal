import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

const USER_INPUT_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(USER_INPUT_VALUES);

  const isInputValid = userInput.duration >= 1;

  function changeUserInput(key, newValue) {
    setUserInput((prevData) => {
      return {
        ...prevData,
        [key]: +newValue,
      };
    });
  }

  return (
    <>
      <Header>Investment Calculator</Header>
      <UserInput
        userInput={userInput}
        onValueChange={changeUserInput}
      ></UserInput>
      {!isInputValid && (
        <h2 className="center">PLEASE ENTER A DURATION GREATER THAN 0</h2>
      )}
      {isInputValid && <Results userInput={userInput}></Results>}
    </>
  );
}

export default App;
