import Icon from "./Icon"
import SectionWrapper from "../styles/SectionWrapper"
import parseText from "../lib/parseText"
import imageSrc from "../lib/imageSrc"

const Help = ({ content }) => {

    return (
        <SectionWrapper id="get-help" className="section">
            <div className="sub-container">
                <div className="content left">
                    <h1><Icon id="info"/><span dangerouslySetInnerHTML={ parseText(content.heading) }></span></h1>
                    <p dangerouslySetInnerHTML={ parseText(content.paragraph) }></p>
                    <a href={ content.call_to_action.link } className="call-to-action"><Icon id="discord"/><span dangerouslySetInnerHTML={ parseText(content.call_to_action.text) }></span></a>
                </div>
                <img
                    src={ imageSrc(content.illustration.src) }
                    alt={ content.illustration.alt }
                    title={ content.illustration.title }
                    className="illustration"
                />
            </div>
        </SectionWrapper>
    )

}

export const getStaticProps = () => {

    let content = fs.readFileSync(path.join(process.cwd(), "_content", "help.json"))
    content = JSON.parse(content)

    return {
        props: {
            content
        }
    }

}

export default Help