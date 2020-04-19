import React from "react"
import SEO from "../components/seo"
import { SharkBackground } from "../components/shark-background"
import '../styles.css';

const IndexPage = () => (
  <div style={{minHeight: '100vh'}}>
    <SEO title="Home" />
    <SharkBackground/>
    <div style={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img src="/gitshark-glyph.png" height={600}/>
    </div>
  </div>
)

export default IndexPage
