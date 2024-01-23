import Title from "./Title";
import logo from "../assets/investment-calculator-logo.png";

export default function Header({ children }) {
  return (
    <div id="header">
      <img src={logo}></img>
      <Title title={"Investment Calculator"} />
    </div>
  );
}
