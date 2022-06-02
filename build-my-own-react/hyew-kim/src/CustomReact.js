const CustomReact = (function () {
  //1. createElement: type, props, children
  //createElement("div", null, ...props) => {"type": "div","props": { "children": props }}
  const createElement = function (type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children,
      },
    };
  };
  return { createElement };
})();
export default CustomReact;
