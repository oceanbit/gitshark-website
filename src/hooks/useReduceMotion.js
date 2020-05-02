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
    mq.addEventListener("change", handleChange)
    return () => {
      mq.removeEventListener("change", handleChange)
    }
  }, [])
  return matches
}
