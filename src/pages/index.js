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
        <h1 className="displayHeader">
          Surf through your repos, <br />
          wherever you go. 🦈
        </h1>
        <p className="body2Text">
          GitShark is a mobile git client that allows you to manage
          repositories, checkout branches, write and commit changes and much
          more, right from your mobile device.
        </p>
        <hr />
        <p className="body2Text">
          Desktop and iOS versions are coming soon!
          <br />
          You can sign up to receive alerts when we have something to share.
        </p>
      </div>
    </div>
  </ThemeProvider>
)

export default IndexPage
