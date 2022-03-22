const getRandomInRange = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

const getWindowSize = () => {
  return {x: window.innerWidth, y: window.innerHeight};
}

export const generateRandomMousePosition = () => {
  return {x: getRandomInRange(0, getWindowSize().x), y: getRandomInRange(0, getWindowSize().y)};
}