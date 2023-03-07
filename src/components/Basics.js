import Imports from "../images/imports.png"
import Variables from "../images/variables.png"
import IceHonky from "../images/ice-honky.png"
import FS1 from "../images/FS-1.png"
import FS2 from "../images/FS-2.png"
import FS3 from "../images/FS-3.png"


function Basics() {
    return (
        <div>
            <section id="BasicsFlex">
                <div>
                    <h3 className="border">import useSound and audio assets</h3>
                    <img className="code" src={Imports} alt="imports for useSound" id="imports" />
                </div>
                <div>
                    <h3 className="border">declare variables with array destructuring</h3>
                    <img className="code" src={Variables} alt="variables for useSound" id="variables" />
                </div>
            </section>
            <section>
                <div>
                    <div id="MasonExamples">
                        <div>
                            <h3 className="border">In this example, [soundHorn] is a variable which plays a goal horn we've passed down as a prop - then that variable is accessed inside an onClick event handler to play the goal horn. </h3>
                            <img className="code" src={IceHonky} alt="IceHonky code bit" id="IceHonky" />
                        </div>
                        <div>
                            <h3 className="border">In my sumo website, sound variables are defined on the App level, then passed down as props to various components that use them. When a user submits a team they drafted, tachiai() plays the [tachiai] sound.</h3>
                            <img className="code" src={FS1} alt="FS code bit" id="FS1" />
                            <img className="code" src={FS2} alt="FS code bit" id="FS2" />
                            <img className="code" src={FS3} alt="FS code bit" id="FS3" />
                        </div>
                    </div>
                    <h3 id="checkitout" className="border">check it out for yourself at icehonky.net & fantasysumo.net</h3>
                </div>
            </section>
        </div>
    )
}

export default Basics