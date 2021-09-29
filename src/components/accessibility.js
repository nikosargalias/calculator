// import handlerFunction from './App'
const addKeyboardEventListeners = (handleKeydown) => {
  window.addEventListener("keydown", handleKeydown);
};
const removeKeyboardEventListeners = (handleKeydown) => {
  window.removeEventListener("keydown", handleKeydown);
};

export { addKeyboardEventListeners, removeKeyboardEventListeners };
