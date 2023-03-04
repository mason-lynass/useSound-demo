import { useState } from "react"
import useKeypress from 'react-use-keypress'
import useSound from "use-sound"

import './App.css';

import Title from "./components/Title.js"
import Intro from "./components/Intro.js"
import UseSoundAbout from "./components/UseSoundAbout.js"
import Basics from "./components/Basics.js"
import AmenPlayer from "./components/AmenPlayer.js"
import DrumMachine from "./components/DrumMachine.js"
import RandomNotes from "./components/RandomNotes.js"

function App() {

  return (
    <div className="App">
      <Title />
      <Intro />
      <UseSoundAbout />
      <Basics />
      <AmenPlayer />
      <DrumMachine />
      <RandomNotes />
    </div>

  );
}

export default App;
