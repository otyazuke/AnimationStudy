require("../../src/js/MakeBase.js");

class Squash{

	var container=document.getElementById('container');
	console.log(container);

	var scene = new THREE.Scene(); //シーン作成

	var makeBase = new MakeBase;

	var rendrer =  makeBase.makeRender();

	var camera = makeBase.makeCamera();

	makeBase.makeLight(scene);

	makeBase.makeCube(scene);

	window.onload = function(){  //レンダラーを作成して、最初のレンダリング
			container.appendChild(rendrer.domElement); //レンダラーをDOM上に設置
			rendrer.render(scene, camera); //sceneをcameraでうつす（表示）　　レンダリング
		}

		function render()
	{
		renderer.render(scene, camera);
		requestAnimationFrame(render);
	}

	render();

}