const React = (function () {
  let states = [];
  let setters = [];
  let renderId = -1;
  let cursor = 0;

  function createSetter(cursor) {
    return function setterWithCursor(newVal) {
      states[cursor] = newVal;
      console.log(states[cursor]);
    };
  }

  // This is the pseudocode for the useState helper
  function useState(initVal) {
    if (renderId === 0) {
      console.log('> this is first render: init array');
      states.push(initVal);
      setters.push(createSetter(cursor));
    }

    const setter = setters[cursor];
    const value = states[cursor];

    cursor++;
    console.log("now setters length is => " + setters.length);
    console.log("now states : => [" + states +"]");
    console.log("now cursor point => " + cursor);
    return [value, setter];
  }

  function increaseRenderId() {
    renderId++;
    console.log("current render id: " + renderId);
  }

  function initCursor() {
    cursor = 0;
  }

  return { useState, increaseRenderId, initCursor };
})();

export default React;