import React from "react"
import SEO from "../components/seo"
import { SharkBackground } from "../components/shark-background"
import { ThemeProvider } from "../constants/theme-context"
import "./styles.scss"

const IndexPage = () => (
  <ThemeProvider>
    <div style={{ minHeight: "100vh" }}>
      <SEO title="Home" />
      <div className={"sharkBackground"}>
        <SharkBackground />
      </div>
      <div className={"sharkHeader"}>
        <img src="/shark_header.png" alt={"GitShark"} />
      </div>
      <div className="bodySheet">
        <h1 className="displayHeader">Surf through your repos, <br/>wherever you go. 🦈</h1>
      </div>
    </div>
  </ThemeProvider>
)

export default IndexPage
