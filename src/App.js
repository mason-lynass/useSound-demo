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
import Sprites from "./components/Sprites";

function App() {

  return (
    <div className="App">
      <section id="sTitle"><Title /></section>
      <section><Intro /></section>
      <section className="sUSA"><UseSoundAbout /></section>
      <Basics />
      <section id="AP"><AmenPlayer /></section>
      <section id="DMFlex">
        <Sprites />
        <DrumMachine />
      </section>
      <section id="RandomNotes"><RandomNotes /></section>
      
    </div>

  );
}

export default App;
