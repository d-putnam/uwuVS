// Scaling function for sliders
export const scale = (inputY, xRange, yRange) => {
  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;
  const percent = (inputY - yMin) / (yMax - yMin);
  const outputX = Number(percent) * (xMax - xMin) + xMin;
  return outputX;
};

// Linear interp function (start, end, alpha 0-1)
export const lerp = (v0, v1, t) => {
  return v0*(1-t)+v1*t;
}

export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}