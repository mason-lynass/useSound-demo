import JoshComeau from "../images/josh-comeau.png"
import Howler from "../images/howler.png"

function UseSoundAbout() {

    return (
        <div id="useSoundAbout">
            <h2>useSound is a custom React Hook developed by Josh Comeau.</h2>
            <div id="USAFlex">
                <img id="JoshComeau" src={JoshComeau} alt="useSound docs" />
                <div >
                    <p>Josh says "I defer most of the hard audio work to <a href="https://github.com/goldfire/howler.js#documentation">Howler</a>".</p>
                    <img src={Howler} alt="Howler" id="Howler" />
                </div>
            </div>
        </div>
    )
}

export default UseSoundAbout