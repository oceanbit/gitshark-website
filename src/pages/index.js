import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { SharkBackground } from "../components/shark-background"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SharkBackground/>
  </Layout>
)

export default IndexPage
