export default class MakeBase {


	const(){
		var width = 640;
		var height = 480;
	}

	makeRendrer(){
		var rendrer = new THREE.WebGLRendrer();  //レンダラー作成
		rendrer.setSize(width,height);
		return rendrer;
	}

	makeCamera(){
		var camera = new THREE.PersepctiveCamera(40, width / height, 1, 1000); //カメラ作成　画角４０　距離１〜1000の部分を表示できる
		camera.position.z = -400;
		return camera;
	}

	makeLight(scene){
		var directionalLight = new THREE.directionalLight( 0xffffff, 1); //ライト作成
		directionalLight.position.set( 200, 1000, -500);
		directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
		scene.add(directionalLight); //シーンにライトを追加する
	}

	makeCube(scene){
		var geometry = new THREE.CubeGeometry(100, 100, 100);  //立方体作成
		var material = new THREE.MeshPhongMaterail({color: 0xFFFFaa});
		var mesh = new THREE.Mesh(geometry,material);
		scene.add(mesh); //シーンにメッシュを追加
	}

	//camera.lookAt = (mesh.position); //カメラをメッシュの方向に向ける

	// mesh.scale.x = 0.5;
	// mesh.scale.y = 1.5;
	// mesh.scale.z = 0.5;

	render()
	{
		renderer.render(scene, camera);
		requestAnimationFrame(render);
	}

}
