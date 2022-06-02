import React from "../miniReact.js";
export default function PhotoBoxComp({ $element, onRerender, src }) {
  /* with miniReact.createElement */
  this.render = () => {
    const $imgDiv = document.createElement("div");
    $imgDiv.innerHTML = `
		<img src=${src} width="300"/>
	`;
    const $imgDivUsingminiReact = React.createElement(
      "div",
      { id: "apple-img" },
      React.createElement("img", { src: src, width: "300px" })
    );
    console.log($imgDivUsingminiReact);
    $element.append($imgDiv);
    // ReactDOM.render();
  };

  this.render();
}

/*
		** with jsx **
		<div id="apple-img">
			<img src="" width="300"/>
		</div>
	*/

/*
	** with React.createElement **
	const imgDiv = React.createElement(
		"div",
		{id: 'apple-img'},
		React.createElement('img', { src:src, width:'300'})
	)
	React.render(imgDiv, $element);
	*/
