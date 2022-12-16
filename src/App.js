import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import useKeypress from 'react-use-keypress'
import useSound from "use-sound"

import PluckLow from "./sounds/pluck-pcm8.wav"
import PluckMid from "./sounds/pluck-1.wav"
import PluckHigh from "./sounds/pluck-2.wav"

import HH from "./sounds/hihat.wav"
import Kick from "./sounds/kick.wav"
import SnareClap from "./sounds/clap.wav"
import Crash from "./sounds/crash.wav"
import FloorTom from "./sounds/floor-tom.wav"
import RackTom from "./sounds/rack-tom.wav"
import Ride from "./sounds/ride.wav"
import Snare from "./sounds/snare.wav"

function App() {

  const [crash] = useSound(Crash)
  const [hihat] = useSound(HH)
  const [kick] = useSound(Kick)
  const [clap] = useSound(SnareClap)
  const [ride] = useSound(Ride)
  const [snare] = useSound(Snare)
  const [ft] = useSound(FloorTom)
  const [rt] = useSound(RackTom)

  useKeypress(["1", "2", "3", "4", ";", "q", "w", "e", "r"], (e) => {
    if (e.key === "1") {
      clap()
    } else if (e.key === "2") {
      rt()
    } else if (e.key === "3") {
      ft()
    } else if (e.key === "4") {
      hihat()
    } else if (e.key === ";") {
      middle()
    } else if (e.key === "q") {
      kick()
    } else if (e.key === "w") {
      snare()
    } else if (e.key === "e") {
      ride()
    } else if (e.key === "r") {
      crash()
    }
  })

  //

  const [LplaybackRate, setLPlaybackRate] = useState(1)
  const [MplaybackRate, setMPlaybackRate] = useState(1)
  const [HplaybackRate, setHPlaybackRate] = useState(1)

  const [pluckLow] = useSound(PluckLow, { LplaybackRate, interrupt: true, volume: .7 })
  const [pluckMid] = useSound(PluckMid, { MplaybackRate, interrupt: true, volume: .6 })
  const [pluckHigh] = useSound(PluckHigh, { HplaybackRate, interrupt: true, volume: .5 })

  // instrument functions, making one note

  function low() {
    const scale = [1, 1.122, 1.26, 1.335, 1.498, 1.682, 1.888, 2]
    const pitchMod = scale[Math.floor(Math.random() * scale.length)] / 2
    setLPlaybackRate(pitchMod)
    pluckLow()
  }

  function middle() {
    const scale = [1, 1.122, 1.26, 1.335, 1.498, 1.682, 1.888, 2]
    const pitchMod = scale[Math.floor(Math.random() * scale.length)]
    // let pitchMod = Math.round(Math.random()*100) / 100 + .5
    console.log(pitchMod)
    setMPlaybackRate(pitchMod)
    pluckMid()
  }

  function high() {
    const scale = [1, 1.122, 1.26, 1.335, 1.498, 1.682, 1.888, 2]
    const pitchMod = scale[Math.floor(Math.random() * scale.length)] * 2
    // let pitchMod = Math.round(Math.random()*100) / 100 + .5
    console.log(pitchMod)
    setHPlaybackRate(pitchMod)
    pluckHigh()
  }

  // playing notes from instrument functions at an interval (ms)

  let fourTimer;
  function startFourTimer() {
    if (!fourTimer) {
      fourTimer = setInterval(low, 1000)
    }
  }

  let eightTimer;
  function startEightTimer() {
    if (!eightTimer) {
      eightTimer = setInterval(middle, 500)
    }
  }

  let sixteenTimer;
  function start16Timer() {
    if (!sixteenTimer) {
      sixteenTimer = setInterval(high, 250)
    }
  }

  // a feeble attempt at a STOP button

  function stopFourTimer() {
    console.log("stoppppp")
    clearInterval(fourTimer)
    fourTimer = null;
  }

  // play button

  function arpeggiator() {
    start16Timer()
    startEightTimer()
    startFourTimer()
  }

  return (
    <div className="App">
      <div>
        <h1>8 voice Drum Machine</h1>
        <h2>click on the buttons to hear each sound</h2>
        <h3>then use "1, 2, 3, 4, q, w, e, & r" keys on the keyboard to finger drum!</h3>
        <div id="DMTitles">
          <h2>clap</h2>
          <h2>rack tom</h2>
          <h2>floor tom</h2>
          <h2>hi hat</h2>
        </div>
        <div id="DMButtons">
          <button className="button" onClick={clap}>1</button>
          <button className="button" onClick={rt}>2</button>
          <button className="button" onClick={ft}>3</button>
          <button className="button" onClick={hihat}>4</button>
          <button className="button" onClick={kick}>q</button>
          <button className="button" onClick={snare}>w</button>
          <button className="button" onClick={ride}>e</button>
          <button className="button" onClick={crash}>r</button>
        </div>
        <div id="DMTitles">
          <h2>kick</h2>
          <h2>snare</h2>
          <h2>ride</h2>
          <h2>crash</h2>
        </div>
        <hr></hr>
        <div>
          <h1>Random note generator</h1>
          <button onClick={arpeggiator}>START</button>
        </div>
      </div>

    </div>
  );
}

export default App;
