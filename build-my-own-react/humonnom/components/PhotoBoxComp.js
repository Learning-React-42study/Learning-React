export default function PhotoBoxComp({ $element, onRerender, src }) {
	
	// ** jsx **
	// <div id="apple-img">
	//   <img src="" width="300"/>
	// </div>

	// ** with React.createElement **
	// const imgDiv = React.createElement(
	// 	"div",
	// 	{id: 'apple-img'},
	// 	React.createElement('img', { src:src, width:'300'})
	// )
	// React.render(imgDiv, $element);

	// ** with myReact.createElement **
this.render = () => {
	const $imgDiv = document.createElement('div');
	$imgDiv.innerHTML = `
		<img src=${src} width="300"/>
	`;
	// const $imgDivUsingMyReact = React.createElement(
	// 	"div",
	// 	{id: 'apple-img'},
	// 	React.createElement('img', { src:src })
	// )
	// $element.append($imgDiv, $imgDivUsingMyReact);
	$element.append($imgDiv);
}

	this.render();
}