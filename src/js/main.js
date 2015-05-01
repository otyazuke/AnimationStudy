import Squash from './Squash'

var container=document.getElementById('container');
console.log(Squash);

var squash = new Squash;

var rendrer = squash.getRendrer();

var camera = squash.getCamera();

var scene = squash.getScene();


window.onload = function(){  //レンダラーを作成して、最初のレンダリング
	container.appendChild(rendrer.domElement); //レンダラーをDOM上に設置
	rendrer.render(scene, camera); //sceneをcameraでうつす（表示）　　レンダリング
}

function render()
{
	rendrer.render(scene, camera);
	requestAnimationFrame(render);
}

render();
