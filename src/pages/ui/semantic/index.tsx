import { Segment } from "semantic-ui-react"
import SemanticMenu from "./menu"
import SemanticIntro from "./intro"
import SemanticSection1 from "./section1"
import SemanticSection2 from "./section2"
import SemanticSection3 from "./section3"

function SemanticUIPage() {
    return (
        // semantic-ui page
        <div>
            <Segment basic inverted vertical textAlign="center">
                {/* menu */}
                <SemanticMenu />

                {/* intro */}
                <SemanticIntro />
            </Segment>

            {/* section 1 */}
            <SemanticSection1 />

            {/* section 2 */}
            <SemanticSection2 />

            {/* section 3 */}
            <SemanticSection3 />
        </div>
    )
}

export default SemanticUIPage
