import Squash from './Squash'

var squash;

window.onload = function(){  //レンダラーを作成して、最初のレンダリング
	var container=document.getElementById('container');
	squash = new Squash();
	container.appendChild(squash.getDomElement()); //レンダラーをDOM上に設置
	render();
}

function render()
{
	squash.render();
	requestAnimationFrame(render);
}


