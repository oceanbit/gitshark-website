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
import NoAccountSVG from "../assets/settings_no_account.svg"
import GitHubLinkedSVG from "../assets/settings_github_linked.svg"
import GitHubSVG from "../assets/github.svg"
import { SeperateToOverlapImages } from "../components/seperate-to-overlap-images/seperate-to-overlap-images"
import { AnimatedLine } from "../components/animated-line/animated-line"
import { Checkbox } from "../components/checkbox"

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
          Android and Desktop versions are coming soon!
          <br />
          You can sign up to receive alerts when we have something to share.
        </p>
        <p id={"interestedPlatforms"} className={"checkboxTitle"}>
          Platforms you’re interested in:
        </p>
        <form
          action="https://app.convertkit.com/forms/1340347/subscriptions"
          method="post"
          data-sv-form="1340347"
          data-uid="f0cde5565a"
          data-version="5"
          data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        >
          <fieldset
            data-group="checkboxes"
            className="formkit-7770"
            group="field"
            type="Custom"
            order="1"
            save_as="Tag"
          >
            <ul
              className={"checkboxContainer"}
              role={"list"}
              aria-describedby={"interestedPlatforms"}
            >
              <li>
                <Checkbox
                  label={"Android"}
                  inputProps={{
                    id: "tag-7770-1409722",
                    type: "checkbox",
                    name: "tags[]",
                    value: "1409722",
                  }}
                />
              </li>
              <li>
                <Checkbox
                  label={"iOS"}
                  inputProps={{
                    id: "tag-7770-1409721",
                    type: "checkbox",
                    name: "tags[]",
                    value: "1409721",
                  }}
                />
              </li>
              <li>
                <Checkbox
                  label={"Windows"}
                  inputProps={{
                    id: "tag-7770-1409723",
                    type: "checkbox",
                    name: "tags[]",
                    value: "1409723",
                  }}
                />
              </li>
              <li>
                <Checkbox
                  label={"macOS"}
                  inputProps={{
                    id: "tag-7770-1409725",
                    type: "checkbox",
                    name: "tags[]",
                    value: "1409725",
                  }}
                />
              </li>
            </ul>
          </fieldset>
          <div className="signupInputContainer">
            <input
              name="email_address"
              placeholder={"Email address"}
              required=""
              type="email"
              className={"signupInput"}
            />
            <Button className="signupBtn" data-element="submit" type={"submit"}>
              Sign up
            </Button>
          </div>
        </form>
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
        <div className="greyBox githubContainer">
          <NoAccountSVG
            className={"gitHubImages noGHAccountImg imagePreview svgShadow"}
          />
          <AnimatedLine className={"leftLine"} />
          <GitHubSVG className={"githubLogo"} />
          <AnimatedLine className={"rightLine"} />
          <GitHubLinkedSVG
            className={"gitHubImages ghAccountImg imagePreview svgShadow"}
          />
        </div>
        <div className={"featureDescribeContainer featureMargin"}>
          <h2 className={"featureTitle"}>GitHub integration</h2>
          <p className="featureBody">Description</p>
        </div>
        <div className="greyBox">
          <OneToOneRatio className={"darkSelectorOneToOne"}>
            <DarkLightSelector className={"darkSelector"} />
            <DarkModeSVG
              className={"imagePreview svgShadow darkSelectorImage"}
            />
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
