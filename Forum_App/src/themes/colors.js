const baseColor = {
  black: '#1F1F1F',
  white: '#ffffff',
  gray: '#454545',
  red: '#ff0009',
  dove_gray: '#6D6D6D',
};

export const colors = {
  ...baseColor,
};

export const getColorOpacity = (color, opacity) => {
  if (opacity >= 0 && opacity <= 1 && color.includes('#')) {
    const hexValue = Math.round(opacity * 255).toString(16);
    return `${color.slice(0, 7)}${hexValue.padStart(2, '0').toUpperCase()}`;
  }
  return color;
};
