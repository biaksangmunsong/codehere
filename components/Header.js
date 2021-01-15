import { useState, useEffect, useRef } from "react"
import Icon from "./Icon"
import HeaderWrapper from "../styles/HeaderWrapper"

const Header = ({ discordLink }) => {

    const header = useRef()
    const [ scrollTop, setScrollTop ] = useState(0)
    const [ headerVisible, setHeaderVisible ] = useState(true)

    useEffect(() => {
        document.onscroll = () => {
            if (header.current){
                const newScrollTop = window.scrollY
                const headerHeight = header.current.clientHeight

                if (newScrollTop > headerHeight){
                    if (newScrollTop < scrollTop){
                        setHeaderVisible(true)
                    }
                    else {
                        setHeaderVisible(false)
                    }

                    setScrollTop(newScrollTop)
                }
            }
        }

        return () => document.onscroll = null
    }, [ scrollTop ])
    
    return (
        <HeaderWrapper ref={ header } className={ headerVisible ? "visible" : "" }>
            <section>
                <a href="/" className="title">Code<em>here</em></a>
                <a href={ discordLink } className="discord_" tabIndex="-1"><Icon id="discord"/></a>
                <nav>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#discover-people">Discover People</a>
                    <a href="#get-help">Get help</a>
                </nav>
            </section>
        </HeaderWrapper>
    )

}

export default Header