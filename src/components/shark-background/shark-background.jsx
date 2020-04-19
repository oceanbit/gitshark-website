import * as React from "react"
import Wave from "react-wavify"
import hexToRgba from 'hex-to-rgba';
import { colors } from "../../constants"
import './shark-background.css';

const dark20 = hexToRgba(colors.primary_dark, 0.2);
const dark0 = hexToRgba(colors.primary_dark, 0.0);

export const SharkBackground = () => {
  return (
    <div className="sharkBG" style={{backgroundColor: colors.primary_light}}>
      <Wave
        fill="url(#midGradient)"
        paused={false}
        style={{height: '82%', position: 'absolute', bottom: 0}}
        options={{
          height: 120,
          amplitude: 120,
          speed: 0.15,
          points: 2,
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
        style={{minHeight: '200px', height: '40%', position: 'absolute', bottom: 0}}
        options={{
          height: 80,
          amplitude: 80,
          speed: 0.15,
          points: 2,
        }}
      >
        <defs>
          <linearGradient id="lowerGradient" gradientTransform="rotate(90)">
            <stop offset="20%" stopColor={dark20} />
            <stop offset="100%" stopColor={dark0} />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  )
}
