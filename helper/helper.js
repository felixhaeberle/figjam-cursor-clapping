const getRandomInRange = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

const getWindowSize = () => {
  return {x: window.innerWidth, y: window.innerHeight};
}

export const generateRandomMousePosition = () => {
  return {x: getRandomInRange(50, getWindowSize().x -50), y: getRandomInRange(50, getWindowSize().y -50)};
}