import React from "react";
import "./Welcome.css";

interface IWelcomeProps {
  firstname: string;
  lastname: string;
}

const WelcomeText = () => <span className="welcome_text">Willkommen</span>;

const Welcome: React.FC<IWelcomeProps> = ({ firstname, lastname }) => {
  return (
    <div className="welcome_wrapper">
      <WelcomeText />
      <span className="welcome_name">{`${firstname} ${lastname}`}</span>
    </div>
  );
};

export default Welcome;
