class DynamicValue {
  constructor(light, dark) {
    this.light = light;
    this.dark = dark;
  }
}

export const colors = {
  tinted_surface_dark: '#182339', // Navy Black
  tinted_surface_light: '#F7F9FD', // Navy 50
  change_addition_dark: '#91EFD8', // Light Green
  change_addition_light: '#00B286', // Green
  change_mixed_dark: '#FFDC99', // Light Gold
  change_mixed_light: '#E39600', // Gold
  change_refactored_dark: '#CF8FEF', // Light Purple
  change_refactored_light: '#8800CC', // Purple
  change_removal_dark: '#FFA8BE', // Light Red
  change_removal_light: '#E50039', // Red
  divider_dark: 'rgba(153, 187, 255, 0.3)', // Electric Blue 200 0.3 alpha
  divider_light: 'rgba(0, 51, 153, 0.2)', // Electric Blue 700 0.2 alpha
  divider_no_alpha_dark: 'rgb(153, 187, 255)', // Electric Blue 200
  divider_no_alpha_light: 'rgb(0, 51, 153)', // Electric Blue 700
  error_bubble_dark: 'rgba(217, 166, 140, 0.2)', // Light Brown 0.2 opacity
  error_bubble_light: 'rgba(153, 77, 0, 0.1)', // Brown 0.1 alpha
  error_dark: '#D9A68C', // Light Brown
  error_light: '#994D00', // Brown
  floating_surface_dark: '#182339', // Navy 900
  floating_surface_light: '#FFFFFF', // White
  on_change_dark: '#000000', // Black
  on_change_light: '#FFFFFF', // White
  on_error_dark: '#000000', // Black
  on_error_light: '#FFFFFF', // White
  on_primary_dark: '#00081A', // Navy Black
  on_primary_light: '#FFFFFF', // White
  on_surface_dark: '#E5EEFF', // Navy 100
  on_surface_light: '#132A58', // Navy 800
  on_surface_secondary_dark: 'rgba(229,238,255, 0.6)', // Navy 100 0.6 alpha
  on_surface_secondary_light: 'rgba(19, 42, 88, 0.6)', // Navy 800 0.6 alpha=
  // Please don't use these unless you really really don't have to
  on_surface_secondary_dark_no_opacity: '#8f97a8', // Navy 100 "0.6 alpha"
  on_surface_secondary_light_no_opacity: '#717f9b', // Navy 800 "0.6 alpha"
  primary_dark: '#99BBFF', // Electric Blue 200
  primary_light: '#002BFF', // Electric Blue 500
  ripple_primary_dark: 'rgba(153, 187, 255, 0.2)', // Electric Blue 200 0.2 alpha
  ripple_primary_light: 'rgba(0, 43, 255, 0.2)', // Electric Blue 500 0.2 alpha
  ripple_surface_dark: 'rgba(230, 238, 255, 0.15)', // Navy 100 0.15 alpha
  ripple_surface_light: 'rgba(0, 51, 153, 0.12)', // Electric Blue 700 0.12 alpha
  surface_dark: '#0D1526', // Navy 1000
  surface_light: '#FFFFFF', // White,
  svg_shadow_light: `drop-shadow(0px 3px 3px rgba(19, 42, 88, 0.0196802))
    drop-shadow(0px 7px 6px rgba(19, 42, 88, 0.03))
    drop-shadow(0px 13px 10px rgba(19, 42, 88, 0.04))
    drop-shadow(0px 23px 18px rgba(19, 42, 88, 0.05))
    drop-shadow(0px 42px 34px rgba(19, 42, 88, 0.06))`,
  svg_shadow_dark: `drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.0196802))
    drop-shadow(0px 7px 6px rgba(0, 0, 0, 0.03))
    drop-shadow(0px 13px 10px rgba(0, 0, 0, 0.04))
    drop-shadow(0px 23px 18px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 42px 34px rgba(0, 0, 0, 0.06))`
};

export const theme = {
  colors: {
    tinted_surface: new DynamicValue(
      colors.tinted_surface_light,
      colors.tinted_surface_dark,
    ),
    change_addition: new DynamicValue(
      colors.change_addition_light,
      colors.change_addition_dark,
    ),
    change_mixed: new DynamicValue(
      colors.change_mixed_light,
      colors.change_mixed_dark,
    ),
    change_refactored: new DynamicValue(
      colors.change_refactored_light,
      colors.change_refactored_dark,
    ),
    change_removal: new DynamicValue(
      colors.change_removal_light,
      colors.change_removal_dark,
    ),
    divider: new DynamicValue(colors.divider_light, colors.divider_dark),
    divider_no_alpha: new DynamicValue(colors.divider_no_alpha_light, colors.divider_no_alpha_dark),
    error: new DynamicValue(colors.error_light, colors.error_dark),
    error_bubble: new DynamicValue(
      colors.error_bubble_light,
      colors.error_bubble_dark,
    ),
    floating_surface: new DynamicValue(
      colors.floating_surface_light,
      colors.floating_surface_dark,
    ),
    on_change: new DynamicValue(colors.on_change_light, colors.on_change_dark),
    on_error: new DynamicValue(colors.on_error_light, colors.on_error_dark),
    on_primary: new DynamicValue(
      colors.on_primary_light,
      colors.on_primary_dark,
    ),
    on_surface: new DynamicValue(
      colors.on_surface_light,
      colors.on_surface_dark,
    ),
    on_surface_secondary: new DynamicValue(
      colors.on_surface_secondary_light,
      colors.on_surface_secondary_dark,
    ),
    // Please don't use this unless you ABSOLUTELY have to
    on_surface_secondary_no_opacity: new DynamicValue(
      colors.on_surface_secondary_light_no_opacity,
      colors.on_surface_secondary_dark_no_opacity,
    ),
    primary: new DynamicValue(colors.primary_light, colors.primary_dark),
    ripple_primary: new DynamicValue(
      colors.ripple_primary_light,
      colors.ripple_primary_dark,
    ),
    ripple_surface: new DynamicValue(
      colors.ripple_surface_light,
      colors.ripple_surface_dark,
    ),
    surface: new DynamicValue(colors.surface_light, colors.surface_dark),
    svg_shadow: new DynamicValue(colors.svg_shadow_light, colors.svg_shadow_dark)
  },
};

export const COLOR_MODE_KEY = "currentTheme";
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";
