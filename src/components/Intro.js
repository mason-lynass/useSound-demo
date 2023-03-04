import meOutside from "../images/me-outside.JPG"
import ableton from "../images/ableton-midi.png"

function Intro () {

    return (
        <div id="intro">
            <h2>a little bit about me...</h2>
            <div id="aboutMeFlex">
                
                <img id="meOutside" src={meOutside} alt="me playing music on the computer"/>
                <img id="ableton" src={ableton} alt="ableton generative music" />
                <p id="MIDI">MIDI devices above are sort of like MIDI effects pedals, essentially scripting rules through a musician-friendly UI</p>
            </div>
            
            
        </div>
    )
}

export default Intro