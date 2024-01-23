import Input from "./Input";

export default function UserInput({ userInput, onValueChange }) {
  function onDataChange(key, value) {
    onValueChange(key, value);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label={"Initial Investment"}
          value={userInput.initialInvestment}
          keyValue={"initialInvestment"}
          handleChange={onDataChange}
        />
        <Input
          label={"Annual Investment"}
          value={userInput.annualInvestment}
          keyValue={"annualInvestment"}
          handleChange={onDataChange}
        />
      </div>
      <div className="input-group">
        <Input
          label={"Expected Return"}
          value={userInput.expectedReturn}
          keyValue={"expectedReturn"}
          handleChange={onDataChange}
        />
        <Input
          label={"Duration"}
          value={userInput.duration}
          keyValue={"duration"}
          handleChange={onDataChange}
        />
      </div>
    </section>
  );
}
