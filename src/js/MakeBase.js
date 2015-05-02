export default class MakeBase {

	constructor(){
		this.width = 640;
		this.height = 480;
		this.setupRenderer();
		this.setupCamera();
		this.setupLight();
	}

	setupRenderer(){
		this.scene = new THREE.Scene();
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(this.width, this.height);
	}
	setupCamera(){
		this.camera = new THREE.PerspectiveCamera(40, this.width / this.height, 1, 1000);
		this.camera.position.z = -400;
		this.camera.position.y = 200;
		this.camera.lookAt(new THREE.Vector3(0,0,0));
	}

	setupLight(){
		var directionalLight = new THREE.DirectionalLight( 0xffffff, 1); //ライト作成
		directionalLight.position.set( 200, 1000, -500);
		directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
		this.scene.add(directionalLight); //シーンにライトを追加する
	}

	
	render()
	{
		this.renderer.render(this.scene, this.camera);
	}

	getDomElement(){
		return this.renderer.domElement;
	}

	add(mesh){
		if (mesh instanceof THREE.Object3D){
			this.scene.add(mesh);
		}else{
			console.log("not mesh")
		}
	}
}

