import React from "react"

export function useReduceMotion() {
  const [matches, setMatch] = React.useState(
    typeof window !== `undefined` ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  )
  React.useEffect(() => {
    if (!window) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = () => {
      setMatch(mq.matches)
    }
    handleChange()
    // https://github.com/mdn/sprints/issues/858
    try {
      mq.addEventListener("change", handleChange)
    } catch (_) {
      mq.addListener(handleChange)
    }
    return () => {
      try {
      mq.removeEventListener("change", handleChange)
      } catch (_) {
        try {
          mq.removeListener(handleChange)
        } catch (_) {}
      }
    }
  }, [])
  return matches
}
