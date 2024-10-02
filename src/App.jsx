import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="#f5f5f7">
      <Navbar/>
      <Card />
    </div>
  );
}

export default App;
