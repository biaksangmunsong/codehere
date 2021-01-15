import Icon from "./Icon"
import FooterWrapper from "../styles/FooterWrapper"

const Footer = ({ discordLink }) => {

    return (
        <FooterWrapper>
            <section>
                <p className="designer">Designed by <a href="https://github.com/biaksangmunsong" target="_blank" rel="noopener noreferrer">Biaksang Munsong</a></p>
                <a href={ discordLink } className="discord_"><Icon id="discord" /></a>
                <button type="button" className="back-to-top" onClick={ () => window.scrollTo(0, 0) }><Icon id="up" /></button>
            </section>
        </FooterWrapper>
    )

}

export default Footer