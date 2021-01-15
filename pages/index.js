import { useEffect } from "react"
import Head from "next/head"
import fs from "fs"
import path from "path"
import Header from "../components/Header"
import Intro from "../components/Intro"
import About from "../components/About"
import Projects from "../components/Projects"
import Discover from "../components/Discover"
import Help from "../components/Help"
import Footer from "../components/Footer"

const Home = ({
  metaData,
  intro,
  about,
  projects,
  discover,
  help
}) => {

  useEffect(()=>{
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user){
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/"
          })
        }
      })
    }
  }, [])

  return (
    <>
      <Head>
        <title>{ metaData.title }</title>
        <meta name="description" content={ metaData.description } key="description"/>
      </Head>
      <div>
        <Header discordLink={ metaData.discord_link }/>
        <Intro content={ intro }/>
        <About content={ about }/>
        <Projects content={ projects }/>
        <Discover content={ discover }/>
        <Help content={ help }/>
        <Footer discordLink={ metaData.discord_link }/>
      </div>
    </>
  )

}

export const getStaticProps = () => {

  const metaData = JSON.parse(fs.readFileSync(path.join(process.cwd(), "_content", "metaData.json")))
  const intro = JSON.parse(fs.readFileSync(path.join(process.cwd(), "_content", "intro.json")))
  const about = JSON.parse(fs.readFileSync(path.join(process.cwd(), "_content", "about.json")))
  const projects = JSON.parse(fs.readFileSync(path.join(process.cwd(), "_content", "projects.json")))
  const discover = JSON.parse(fs.readFileSync(path.join(process.cwd(), "_content", "discover.json")))
  const help = JSON.parse(fs.readFileSync(path.join(process.cwd(), "_content", "help.json")))

  return {
    props: {
      metaData,
      about,
      intro,
      projects,
      discover,
      help
    }
  }

}

export default Home