import Squash from './Squash'
import InOut from './InOut'

var squash;
var inOut;

window.onload = function(){  //レンダラーを作成して、最初のレンダリング
	var container=document.getElementById('container');
	squash = new Squash();
	container.appendChild(squash.getDomElement()); //レンダラーをDOM上に設置
	var container2 = document.getElementById('container2');
	inOut = new InOut();
	container2.appendChild(inOut.getDomElement()); //レンダラーをDOM上に設置
	render();
}

function render()
{
	squash.render();
	inOut.render();
	requestAnimationFrame(render);
	// console.log(new Date().getTime() / 100000);
}


