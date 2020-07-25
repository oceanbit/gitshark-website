import React from "react"
import SEO from "../components/seo"
import { SharkBackground } from "../components/shark-background"
import { ThemeContext, ThemeProvider } from "../constants/theme-context"
import "./styles.scss"
import { DarkLightSelector } from "../components/dark-light-selector"
import { OneToOneRatio } from "../components/one-to-one-ratio"

import RepoSVG from "../assets/repository_list.svg"
import BranchSVG from "../assets/branch_dropdown.svg"
import DarkModeSVG from "../assets/settings_dark_mode.svg"
import TwitterSVG from "../assets/twitter.svg"
import NoAccountSVG from "../assets/settings_no_account.svg"
import GitHubLinkedSVG from "../assets/settings_github_linked.svg"
import GitHubSVG from "../assets/github.svg"
import { SeperateToOverlapImages } from "../components/seperate-to-overlap-images/seperate-to-overlap-images"
import { AnimatedLine } from "../components/animated-line"
import { MailingList } from "../components/mailing-list"
import { PlayPauseBackground } from "../components/play-pause-background"
import { SixteenToNineRatio } from "../components/sixteen-to-nine-ratio"
import { HeaderSheet } from "../components/header-sheet/header-sheet"

const githubLink = "https://github.com/crutchcorn/GitShark"

const IndexPageBase = () => {
  // A manual overwrite, applied _after_ prefers-reduced-motion
  const [isBGPaused, setIsBGPaused] = React.useState(false)
  const { colorMode } = React.useContext(ThemeContext)

  return (
    <HeaderSheet isBGPaused={isBGPaused}
                 setIsBGPaused={setIsBGPaused}>
      <SEO title="GitShark"/>
        <h1 className="displayHeader">
          Surf through your repos, <br/>
          wherever you go. 🦈
        </h1>
        <p className="body2Text">
          GitShark is a mobile git client (or, as I like to call them, "Git GUIs") that allows you to manage
          repositories, checkout branches, write and commit changes and much
          more, right from your mobile device.
        </p>
        <a className="body2Text twitterButton" href="https://twitter.com/GitShark">
          <p>Keep up-to-date with our development on Twitter!</p>
          <TwitterSVG aria-hidden={true}/>
        </a>
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
                <RepoSVG className="imagePreview svgShadow" role={"img"}/>
              </div>
            </OneToOneRatio>
            <div className={"featureDescribeContainer"}>
              <h2 className={"featureTitle"}>Repositories</h2>
              <p className="featureBody">
                Create, clone, add and manage all of your repositories right from your mobile device!
              </p>
            </div>
          </div>
          <div className="branches">
            <OneToOneRatio>
              <div className="greyBox">
                <BranchSVG className="imagePreview svgShadow" role={"img"}/>
              </div>
            </OneToOneRatio>
            <div className={"featureDescribeContainer"}>
              <h2 className={"featureTitle"}>Branches</h2>
              <p className="featureBody">
                View local branches' status, check their history and add new
                ones. Even track remote branches, right from GitShark
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
            aria-hidden={true}
          />
          <AnimatedLine className={"leftLine"} isBGPaused={isBGPaused}/>
          <GitHubSVG className={"githubLogo"} aria-hidden={true} />
          <AnimatedLine className={"rightLine"} isBGPaused={isBGPaused}/>
          <GitHubLinkedSVG
            className={"gitHubImages ghAccountImg imagePreview svgShadow"}
            role={"img"}
          />
        </div>
        <div className={"featureDescribeContainer featureMargin"}>
          <h2 className={"featureTitle"} id={"github-integration-header"}>GitHub integration</h2>
          <p className="featureBody"  id={"github-integration-body"}>GitShark's single-button GitHub sign-in enables you to quickly login for rapid repository
            access</p>
        </div>
        <div className="greyBox">
          <OneToOneRatio className={"darkSelectorOneToOne"}>
            <DarkLightSelector className={"darkSelector"}/>
            <DarkModeSVG
              className={"imagePreview svgShadow darkSelectorImage"}
              aria-hidden={true}
            />
          </OneToOneRatio>
        </div>
        <div className={"featureDescribeContainer featureMargin"}>
          <h2 className={"featureTitle"}>Dark mode</h2>
          <p className="featureBody">Go ahead. Try it. Really, press the button <span role={'img'} aria-label={"The dark mode buttons really change the website colors!"}>😉</span></p>
        </div>
        <div className="greyBox">
          <SixteenToNineRatio>
            <a
              className={"gitHubImage"}
              href={githubLink}
              aria-label={"The GitShark GitHub page"}
              style={colorMode === "dark" ? { filter: "invert() hue-rotate(150deg)" } : {}}
            />
          </SixteenToNineRatio>
        </div>
        <div className={"featureDescribeContainer featureMargin"}>
          <h2 className={"featureTitle"}>Fully open-source</h2>
          <p className="featureBody">Programs made <i>for</i> developers should be accessible <i>to</i> developers, no?
            We think so, anyway. That's why GitShark is <a href={githubLink}>100% open source</a>, ready to compile. We
            welcome all kinds of contributions as well! Want to see a new feature in the app? PR it and we'll get it
            mainlined!</p>
        </div>
        <hr/>
        <MailingList className="bottomMailing"/>
    </HeaderSheet>
  )
}

const IndexPage = () => {
  return (
    <ThemeProvider>
      <IndexPageBase/>
    </ThemeProvider>
  )
}

export default IndexPage
