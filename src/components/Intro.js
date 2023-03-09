import meOutside from "../images/me-outside.JPG"
import ableton from "../images/ableton-midi.png"

function Intro() {

    return (
        <div id="intro">
            <a id="aboutMe" href="https://www.masonlynass.com/about">a little bit about me...</a>
            <div id="moreAboutFlex">
                <div id="aboutMeFlex">

                    <img id="meOutside" src={meOutside} alt="me playing music on the computer" />
                    <img id="ableton" src={ableton} alt="ableton generative music" />
                </div>
                <div id="moreAboutMe">
                    <p>I like making generative music - writing rules & procedures to determine musical elements, instead of writing them explicitly - in <a href="https://www.ableton.com">Ableton Live</a>, a powerful and creative digital audio workstation.</p>
                    <p>In Ableton Live, I can use "MIDI Devices" to modify a static, one-note input MIDI signal into melodies, rhythmic patterns, chords, arpeggios, and more. These MIDI devices control musical elements like pitch, rhythm, scale, velocity, note length, delay, and chance, with a musician-friendly UI more similar to a physical effects pedal than a scripting terminal.</p>
                    <p>Check out the generative music I make at <a href="https://masonlynass.bandcamp.com">masonlynass.bandcamp.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Intro