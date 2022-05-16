// 즉시실행함수
const React = (function () {
  let value; // 선언(private value)
  const useState = (initValue) => {
    const state = () => value || initValue;
    const setState = (newValue) => {
      value = newValue;
      console.log("set: " + value);
    };
    return [state, setState];
  };
  return { useState };
})();

export default React;
