/**
 * Much of this code deals with dark mode. It's ripped straight from:
 * @see https://joshwcomeau.com/gatsby/dark-mode/
 *
 * Huge thanks to Josh for outlining how to do this
 */
import React from "react";
import Terser from "terser";

import {
  COLOR_MODE_KEY,
  theme,
  INITIAL_COLOR_MODE_CSS_PROP
} from "./src/constants";
import rawFocusVisible from 'raw-loader!./node_modules/focus-visible/dist/focus-visible.min.js';

/**
 * DARK MODE CODE
 *
 * Prevents the "flash" of light mode
 */
/**
 * Trust me, I know that it looks like we're reading entries from an emoji
 * but what's really happening is that this function is being converted to a
 * string, then mutated by "MagicScriptTag" in order to add in dynamic code
 * into that string. This way, we're able to avoid duplicating
 */
function setColorsByTheme() {
  const colors = "🌈";
  const colorModeKey = "🔑";
  const colorModeCssProp = "⚡️";

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDarkFromMQ = mql.matches;
  const prefersDarkFromLocalStorage = localStorage.getItem(colorModeKey);

  let colorMode = "light";

  const hasUsedToggle = typeof prefersDarkFromLocalStorage === "string";

  if (hasUsedToggle) {
    colorMode = prefersDarkFromLocalStorage;
  } else {
    colorMode = prefersDarkFromMQ ? "dark" : "light";
  }

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--${name}`;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace('"🌈"', JSON.stringify(theme.colors))
    .replace("🔑", COLOR_MODE_KEY)
    .replace("⚡️", INITIAL_COLOR_MODE_CSS_PROP);

  let calledFunction = `(${boundFn})()`;

  calledFunction = Terser.minify(calledFunction).code;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export const onRenderBody = ({
                               setPreBodyComponents,
                               setPostBodyComponents,
                               setHeadComponents
                             }) => {
  // Set the dark mode script
  setPreBodyComponents(<MagicScriptTag />);

  // This must be set for ConvertKit to work properly
  setPostBodyComponents([
    <script src="https://f.convertkit.com/ckjs/ck.5.js" />
  ]);

  setHeadComponents([
    React.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: rawFocusVisible.default || rawFocusVisible
      }
    })
  ]);
};
