import * as React from "react";
import "./styles.css";
import Welcome from "./components/Welcome/Welcome";

export default function App() {
  return (
    <div className="App">
      <Welcome firstname="Jack" lastname="Daniel" />
    </div>
  );
}
