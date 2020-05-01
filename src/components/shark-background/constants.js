export const useParticlesParams = (prefersReducedMotion) => {
  return {
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
        enable: !prefersReducedMotion,
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
          enable: !prefersReducedMotion,
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
          distance: 20,
          duration: 1,
          speed: 0.2,
        },
      },
    },
  }
}
