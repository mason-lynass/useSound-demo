import RandomNotesAudio from "../sounds/random-note-audio.mp3"

import RandomFunctions from "../images/random-functions.png"
import RandomPlayStop from "../images/random-play-stop.png"
import RandomSprites from "../images/random-sprites.png"
import RandomTiming from "../images/random-timing.png"
import RandomVariables from "../images/random-variables.png"

import useSound from "use-sound"

function RandomNotes() {

  // the sprite map that all instruments use

  const theSprites = {
    C: [0, 2000],
    D: [2000, 2000],
    E: [4000, 2000],
    F: [6000, 2000],
    G: [8000, 2000],
    A: [10000, 2000],
    B: [12000, 2000],
    c: [14000, 2000]
  }

  // defining instrument variables, using the same audio file for each instrument
  // but changing the playbackRate to get different octaves and changing the volume for a nicer mix

  const [newBass] = useSound(RandomNotesAudio, { playbackRate: .25, volume: .3, sprite: theSprites })
  const [newLow] = useSound(RandomNotesAudio, { playbackRate: .5, volume: .5, sprite: theSprites })
  const [newMid] = useSound(RandomNotesAudio, { playbackRate: 1, volume: .4, sprite: theSprites })
  const [newHigh] = useSound(RandomNotesAudio, { playbackRate: 2, volume: .25, sprite: theSprites })

  // each of these functions generates a random integer when called -
  // if the integer === a defined integer, one sprite is played

  function bass() {
    let x = Math.floor(Math.random() * 8)
    if (x === 0) { newBass({ id: 'C' }) }
    if (x === 3) { newBass({ id: 'F' }) }
    if (x === 4) { newBass({ id: 'G' }) }
    if (x === 7) { newBass({ id: 'c' }) }
  }

  function low() {
    let x = Math.floor(Math.random() * 16)
    if (x === 0) { newLow({ id: 'C' }) }
    if (x === 1) { newLow({ id: 'D' }) }
    if (x === 2) { newLow({ id: 'E' }) }
    if (x === 3) { newLow({ id: 'F' }) }
    if (x === 4) { newLow({ id: 'G' }) }
    if (x === 5) { newLow({ id: 'A' }) }
    if (x === 6) { newLow({ id: 'B' }) }
    if (x === 7) { newLow({ id: 'c' }) }
  }

  function middle() {
    let x = Math.floor(Math.random() * 10)
    if (x === 0) { newMid({ id: 'C' }) }
    if (x === 1) { newMid({ id: 'D' }) }
    if (x === 2) { newMid({ id: 'E' }) }
    if (x === 3) { newMid({ id: 'F' }) }
    if (x === 4) { newMid({ id: 'G' }) }
    if (x === 5) { newMid({ id: 'A' }) }
    if (x === 6) { newMid({ id: 'B' }) }
    if (x === 7) { newMid({ id: 'c' }) }
  }

  function high() {
    let x = Math.floor(Math.random() * 12)
    if (x === 0) { newHigh({ id: 'C' }) }
    if (x === 1) { newHigh({ id: 'D' }) }
    if (x === 2) { newHigh({ id: 'E' }) }
    if (x === 3) { newHigh({ id: 'F' }) }
    if (x === 4) { newHigh({ id: 'G' }) }
    if (x === 5) { newHigh({ id: 'A' }) }
    if (x === 6) { newHigh({ id: 'B' }) }
    if (x === 7) { newHigh({ id: 'c' }) }
  }

  // playing notes from instrument functions at an interval (ms)

  let bpm = 60
  let bpmToMS = (bpm / 60) * 1000

  let twoTimer;
  function startTwoTimer() {
    if (!twoTimer) { twoTimer = setInterval(bass, (bpmToMS * 2)) }
  }

  let fourTimer;
  function startFourTimer() {
    if (!fourTimer) { fourTimer = setInterval(low, (bpmToMS)) }
  }

  let eightTimer;
  function startEightTimer() {
    if (!eightTimer) { eightTimer = setInterval(middle, (bpmToMS / 2)) }
  }

  let sixteenTimer;
  function start16Timer() {
    if (!sixteenTimer) { sixteenTimer = setInterval(high, (bpmToMS / 4)) }
  }


  // stop button

  function stop() {
    console.log("stoppppp")
    clearInterval(twoTimer)
    clearInterval(eightTimer)
    clearInterval(fourTimer)
    clearInterval(sixteenTimer)
    fourTimer = null
    twoTimer = null
    eightTimer = null
    sixteenTimer = null;
  }

  // play button

  function arpeggiator() {
    start16Timer()
    startEightTimer()
    startFourTimer()
    startTwoTimer()
  }

  return (
    <div>
      <div id="RNTitle" className="border">
        <h1>Random note generator</h1>
        <div id="RandomNoteGenerator">
          <button onClick={arpeggiator}>START</button>
          <button onClick={stop}>STOP</button>
        </div>
      </div>

      <div>
        <h2 className="border">When calling useSound, you can pass options like "playbackRate," "volume," "interrupt," and "sprite" as a second argument:</h2>
        <div id="RandomTopFlex">
          <img className="code" src={RandomSprites} alt="sprites code" id="RandomSprites"></img>
          <img className="code" src={RandomVariables} alt="variables code" id="RandomVariables"></img>
        </div>
        <div id="RandomBottomFlex">
          <div id="RandomExtraFlex">
            <img className="code" src={RandomFunctions} alt="sprites code" id="RandomFunctions"></img>
            <img className="code" src={RandomTiming} alt="sprites code" id="RandomTiming"></img>
          </div>

          <img className="code" src={RandomPlayStop} alt="sprites code" id="RandomPlayStop"></img>
        </div>
      </div>

    </div>

  )
}

export default RandomNotes