var container=document.getElementById('container');
console.log(container);


var width = 640;
var height = 480;

var renderer = new THREE.WebGLRenderer(); // レンダラ作成
renderer.setSize(width, height);

var camera   = new THREE.PerspectiveCamera(40, width / height, 1, 1000); // カメラ作成。画角40、距離1〜1000の部分を表示できる。
camera.position.z = -400; // カメラの位置はz軸の-400

var scene    = new THREE.Scene(); // シーン作成

var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.set( 200, 1000, -500 );
directionalLight.lookAt(new THREE.Vector3(0,0,0));
scene.add( directionalLight );

var geometry = new THREE.CubeGeometry(100, 100, 100); // 立方体作成
var material = new THREE.MeshPhongMaterial({color: 0xFFFFaa}); // 材質作成
var mesh     = new THREE.Mesh(geometry, material); // 立方体と材質を結びつけてメッシュ作成
scene.add(mesh); // シーンにメッシュ追加

mesh.scale.x = 0.5;
mesh.scale.y = 1.5;
mesh.scale.z = 0.5;

// TweenMax.to(mesh.scale, 2.0, {x:1,y:1,z:1,ease:Cubic.easeOut});
var obj = {x:0, y:0};
var starttime = Date.now();
// TweenMax.to(obj, 0.5, {x:2, ease:Linear.easeOut, onUpdate:onValueUpdate});

function onValueUpdate()
{
	var time = Date.now() - starttime;
	var t = time / 500;
	if (t > 1) t = 1;

	t = t*t;
	obj.y = t * 2;
	mesh.scale.x = (1-0.5)*t+0.5;
	mesh.scale.y = (1-1.5)*t+1.5;
	mesh.scale.z = (1-0.5)*t+0.5;
}

camera.lookAt(mesh.position); // メッシュの位置にカメラを向ける。

window.onload = function(){
  container.appendChild(renderer.domElement);
  renderer.render(scene, camera); // sceneをcameraで映す（表示）
}

function updata()
{
	onValueUpdate();
	mesh.rotation.y += 0.01;
}

function render()
{
	updata();
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}

render();

