import React from "react"
import SEO from "../components/seo"
import { SharkBackground } from "../components/shark-background"
import { ThemeProvider } from "../constants/theme-context"
import "./styles.scss"
import { DarkLightSelector } from "../components/dark-light-selector"
import { OneToOneRatio } from "../components/one-to-one-ratio"

import RepoSVG from "../assets/repository_list.svg"
import BranchSVG from "../assets/branch_dropdown.svg"
import DarkModeSVG from "../assets/settings_dark_mode.svg"
import NoAccountSVG from "../assets/settings_no_account.svg"
import GitHubLinkedSVG from "../assets/settings_github_linked.svg"
import GitHubSVG from "../assets/github.svg"
import { SeperateToOverlapImages } from "../components/seperate-to-overlap-images/seperate-to-overlap-images"
import { AnimatedLine } from "../components/animated-line/animated-line"
import { MailingList } from "../components/mailing-list/mailing-list"
import { PlayPauseBackground } from "../components/play-pause-background"

const IndexPage = () => {
  // A manual overwrite, applied _after_ prefers-reduced-motion
  const [isBGPaused, setIsBGPaused] = React.useState(false)

  return (
    <ThemeProvider>
      <div style={{ minHeight: "100vh" }}>
        <SEO title="Home"/>
        <div className={"sharkBackground"}>
          <SharkBackground isBGPaused={isBGPaused}/>
        </div>
        <div className={"sharkHeader"}>
          <img src="/shark_header.png" alt={"GitShark"}/>
          <PlayPauseBackground isPaused={isBGPaused} toggle={() =>
            setIsBGPaused(v => !v)
          }/>
        </div>
        <div className="bodySheet">
          <h1 className="displayHeader">
            Surf through your repos, <br/>
            wherever you go. 🦈
          </h1>
          <p className="body2Text">
            GitShark is a mobile git client that allows you to manage
            repositories, checkout branches, write and commit changes and much
            more, right from your mobile device.
          </p>
          <hr/>
          <p className="body2Text">
            Android and Desktop versions are coming soon!
            <br/>
            You can sign up to receive alerts when we have something to share.
          </p>
          <MailingList/>
          <p className="dontWorry">Don’t worry, we hate spam more than you do.</p>
          <div className="screenshotRow">
            <div className="repositories">
              <OneToOneRatio>
                <div className="greyBox">
                  <RepoSVG className="imagePreview svgShadow"/>
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
                  <BranchSVG className="imagePreview svgShadow"/>
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
          <SeperateToOverlapImages/>
          <div className={"featureDescribeContainer featureMargin"}>
            <h2 className={"featureTitle"}>Tree & Commits</h2>
            <p className="featureBody">Track the progress of your repo over time. Complete with a visual representation
              of where your branches and remotes are at present. Further introspection for commits including individual
              file diffs</p>
          </div>
          <div className="greyBox githubContainer">
            <NoAccountSVG
              className={"gitHubImages noGHAccountImg imagePreview svgShadow"}
            />
            <AnimatedLine className={"leftLine"}/>
            <GitHubSVG className={"githubLogo"}/>
            <AnimatedLine className={"rightLine"}/>
            <GitHubLinkedSVG
              className={"gitHubImages ghAccountImg imagePreview svgShadow"}
            />
          </div>
          <div className={"featureDescribeContainer featureMargin"}>
            <h2 className={"featureTitle"}>GitHub integration</h2>
            <p className="featureBody">Single-button GitHub sign-in enables you to quickly login for rapid repository
              access</p>
          </div>
          <div className="greyBox">
            <OneToOneRatio className={"darkSelectorOneToOne"}>
              <DarkLightSelector className={"darkSelector"}/>
              <DarkModeSVG
                className={"imagePreview svgShadow darkSelectorImage"}
              />
            </OneToOneRatio>
          </div>
          <div className={"featureDescribeContainer featureMargin"}>
            <h2 className={"featureTitle"}>Dark mode</h2>
            <p className="featureBody">Go ahead. Try it. Really, press the button 😉</p>
          </div>
          <hr/>
          <MailingList className="bottomMailing"/>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default IndexPage
