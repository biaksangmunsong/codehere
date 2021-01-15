import Icon from "./Icon"
import Coffee from "./Coffee"
import IntroWrapper from "../styles/IntroWrapper"
import parseText from "../lib/parseText"

const Intro = ({ content }) => {
    
    return (
        <IntroWrapper id="intro">
            <div className="sub-container">
                <Coffee/>
                <h1 dangerouslySetInnerHTML={ parseText(content.heading) }></h1>
                <p dangerouslySetInnerHTML={ parseText(content.paragraph) }></p>
                <a href={ content.call_to_action.link } className="call-to-action"><Icon id="discord"/><span dangerouslySetInnerHTML={ parseText(content.call_to_action.text) }></span></a>
            </div>
        </IntroWrapper>
    )

}

export default Intro