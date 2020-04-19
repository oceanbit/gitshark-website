import * as React from "react"
import Particles from "react-particles-js"
import Wave from "react-wavify"
import hexToRgba from "hex-to-rgba"
import { colors } from "../../constants"
import "./shark-background.css"

const dark20 = hexToRgba(colors.primary_dark, 0.2)
const dark0 = hexToRgba(colors.primary_dark, 0.0)

export const SharkBackground = () => {
  return (
    <div className="sharkBGContainer">
      <div className="lighting" />
      <div
        className="sharkBG"
        style={{ backgroundColor: colors.primary_light }}
      >
        <Wave
          fill="url(#topGradient)"
          paused={false}
          style={{
            height: "50%",
            position: "absolute",
            top: 0,
            transform: "rotate(180deg) scaleX(-1)",
          }}
          options={{
            height: 200,
            amplitude: 300,
            speed: 0.06,
            points: 2,
          }}
        >
          <defs>
            <linearGradient
              id="topGradient"
              gradientTransform="rotate(-20)"
              x1="0"
              x2="1"
              y1="0.2"
              y2="0.4"
            >
              <stop offset="0%" stopColor={dark20} />
              <stop offset="70%" stopColor={dark0} />
            </linearGradient>
          </defs>
        </Wave>
        <Wave
          fill="url(#midGradient)"
          paused={false}
          style={{ height: "70%", position: "absolute", bottom: 0 }}
          options={{
            height: 100,
            amplitude: 250,
            speed: 0.08,
            points: 3,
          }}
        >
          <defs>
            <linearGradient id="midGradient" gradientTransform="rotate(-30)">
              <stop offset="0%" stopColor={dark0} />
              <stop offset="40%" stopColor={dark20} />
            </linearGradient>
          </defs>
        </Wave>
        <Wave
          fill="url(#lowerGradient)"
          paused={false}
          style={{
            minHeight: "200px",
            height: "40%",
            position: "absolute",
            bottom: 0,
          }}
          options={{
            height: 100,
            amplitude: 200,
            speed: 0.12,
            points: 3,
          }}
        >
          <defs>
            <linearGradient id="lowerGradient" gradientTransform="rotate(90)">
              <stop offset="20%" stopColor={dark20} />
              <stop offset="100%" stopColor={dark0} />
            </linearGradient>
          </defs>
        </Wave>
        <Particles
          height={"100vh"}
          width={"100vw"}
          className="particlesContainer"
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#000",
              },
              opacity: {
                value: 0,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              shape: {
                type: "image",
                image: {
                  src: "/bubble.png",
                  width: 64,
                  height: 64,
                },
              },
              size: {
                value: 20,
                random: true,
                anim: {
                  enable: false,
                  speed: 10,
                  size_min: 10,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 1,
                random: true,
                direction: "top",
                out_mode: "out",
                bounce: false,
              },
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 600,
                  size: 30,
                  duration: 0.1,
                  opacity: 1,
                  speed: 300,
                },
                repulse: {
                  distance: 100,
                  duration: 1,
                },
              },
            },
          }}
        />
      </div>
    </div>
  )
}
