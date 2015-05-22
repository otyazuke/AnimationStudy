import Squash from './Squash'
import InOut from './InOut'
import ActionPose from './ActionPose'

var squash;
var inOut;
var actionPose;

window.onload = function(){  //レンダラーを作成して、最初のレンダリング
	var container=document.getElementById('container');
	squash = new Squash();
	container.appendChild(squash.getDomElement()); //レンダラーをDOM上に設置
	var container2 = document.getElementById('container2');
	inOut = new InOut();
	container2.appendChild(inOut.getDomElement()); //レンダラーをDOM上に設置
	var container3 = document.getElementById('container3');
	actionPose = new ActionPose();
	container3.appendChild(actionPose.getDomElement()); //レンダラーをDOM上に設置
	render();

	var c = document.getElementById('canvas');
	c.width = 840;
	c.height = 398;
	var gl = c.getContext('webgl');
	gl.clearColor(0.0, 0.0, 0.5, 0.5);
	gl.clear(gl.COLOR_BUFFER_BIT);

}

function render()
{
	squash.render();
	inOut.render();
	actionPose.render();
	requestAnimationFrame(render);
	// console.log(new Date().getTime() / 100000);
}


