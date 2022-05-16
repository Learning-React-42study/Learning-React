const React = (function(){

let state = [];
let setters = [];
let renderId = -1;
let cursor = 0;

function createSetter(cursor) {
  return function setterWithCursor(newVal) {
    state[cursor] = newVal;
  };
}

// This is the pseudocode for the useState helper
export function useState(initVal) {
  if (renderId === 0) {
    state.push(initVal);
    setters.push(createSetter(cursor));
  } //체크 해보고 없으면 만드는 방법은?

  const setter = setters[cursor];
  const value = state[cursor];

  cursor++;
  return [value, setter];
}

export function increaseRenderId() {
  renderId++;
}
})();
