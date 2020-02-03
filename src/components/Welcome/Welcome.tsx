import React from "react";
import "./Welcome.css";

interface IWelcomeProps {
  firstname: string;
}

const WelcomeText = () => <span class="welcome_text">Willkommen</span>;

const Welcome: React.FC<IWelcomeProps> = ({ firstname, lastname }) => {
  return (
    <div className="welcome_wrapper">
      <WelcomeText />
      <span className="welcome_name">{firstname}</span>
    </div>
  );
};

export default Welcome;
