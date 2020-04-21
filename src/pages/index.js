import React from "react"
import SEO from "../components/seo"
import { SharkBackground } from "../components/shark-background"
import "../styles.css"
import { ThemeProvider } from "../constants/theme-context"

const IndexPage = () => (
  <ThemeProvider>
    <div style={{ minHeight: "100vh" }}>
      <SEO title="Home" />
      <div
        style={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
        }}
      >
        <SharkBackground />
      </div>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/gitshark-glyph.png" height={600} />
      </div>
    </div>
  </ThemeProvider>
)

export default IndexPage
