import * as React from 'react';
import Button from "@material-ui/core/Button"
import { Checkbox } from "../checkbox"
import { useId } from "@reach/auto-id";
import './mailing-list.scss';


export const MailingList = ({className = ''}) => {
  const idNum = useId();

  return (
  <form
    action="https://app.convertkit.com/forms/1340347/subscriptions"
    method="post"
    data-sv-form="1340347"
    data-uid="f0cde5565a"
    data-version="5"
    data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
    className={className}
  >
    <p id={"interestedPlatforms"} className={"checkboxTitle"}>
      Platforms you’re interested in:
    </p>
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
        aria-describedby={idNum}
        placeholder={""}
        required=""
        type="email"
        className={"signupInput"}
      />
      <span id={idNum} className={"inputDescribe"}>Email address</span>
      <Button className="signupBtn" data-element="submit" type={"submit"}>
        Sign up
      </Button>
    </div>
  </form>
  )
}
