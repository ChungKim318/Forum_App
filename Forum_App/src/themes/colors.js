const baseColor = {
  GrayOpacity01: 'rgba(255, 255, 255, 0.1)',
  GrayOpacity02: 'rgba(255, 255, 255, 0.2)',
  black: '#1F1F1F',
  white: '#FFFFFF',
  gray: '#454545',
  red: '#FF0009',
  dove_gray: '#6D6D6D',
  silver_chalice: '#AFAFAF',
  light_silver: '#D7DFE2',
  white_sand: '#F6F6F6',
  denim: '#1976D2',
  orange: '#FF7C42',
}

export const colors = {
  ...baseColor,
}

export const getColorOpacity = (color, opacity) => {
  if (opacity >= 0 && opacity <= 1 && color.includes('#')) {
    const hexValue = Math.round(opacity * 255).toString(16)
    return `${color.slice(0, 7)}${hexValue.padStart(2, '0').toUpperCase()}`
  }
  return color
}
