import React from "react"
import SEO from "../components/seo"
import { SharkBackground } from "../components/shark-background"
import { ThemeProvider } from "../constants/theme-context"
import "./styles.scss"
import { DarkLightSelector } from "../components/dark-light-selector"
import Button from "@material-ui/core/Button"
import { OneToOneRatio } from "../components/one-to-one-ratio"

import RepoSVG from "../assets/repository_list.svg"
import BranchSVG from "../assets/branch_dropdown.svg"
import DarkModeSVG from "../assets/settings_dark_mode.svg"
import { SeperateToOverlapImages } from "../components/seperate-to-overlap-images/seperate-to-overlap-images"

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
        <div className="signupInputContainer">
          <input placeholder={"Email address"} className={"signupInput"} />
          <Button className="signupBtn">Sign up</Button>
        </div>
        <div className="screenshotRow">
          <div className="repositories">
            <OneToOneRatio>
              <div className="greyBox">
                <RepoSVG className="imagePreview svgShadow" />
              </div>
            </OneToOneRatio>
            <div className={"featureDescribeContainer"}>
              <h2 className={"featureTitle"}>Repositories</h2>
              <p className="featureBody">
                Create, clone, add and manage all of your repositories
              </p>
            </div>
          </div>
          <div className="branches">
            <OneToOneRatio>
              <div className="greyBox">
                <BranchSVG className="imagePreview svgShadow" />
              </div>
            </OneToOneRatio>
            <div className={"featureDescribeContainer"}>
              <h2 className={"featureTitle"}>Branches</h2>
              <p className="featureBody">
                View local branches' status, check their history and add new
                ones
              </p>
            </div>
          </div>
        </div>
        <SeperateToOverlapImages />
        <div className={"featureDescribeContainer featureMargin"}>
          <h2 className={"featureTitle"}>Tree & Commits</h2>
          <p className="featureBody">Description</p>
        </div>
        <div className="greyBox">
          <OneToOneRatio className={"darkSelectorOneToOne"}>
            <DarkLightSelector className={"darkSelector"} />
            <DarkModeSVG className={"imagePreview svgShadow darkSelectorImage"} />
          </OneToOneRatio>
        </div>
        <div className={"featureDescribeContainer featureMargin"}>
          <h2 className={"featureTitle"}>Dark mode</h2>
          <p className="featureBody">Go ahead. Try it.</p>
        </div>
      </div>
    </div>
  </ThemeProvider>
)

export default IndexPage
