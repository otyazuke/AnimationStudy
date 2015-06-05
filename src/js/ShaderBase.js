export default class ShaderBase {

	constructor(){
		this.width = 840;
		this.height = 398;
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
		this.camera = new THREE.PerspectiveCamera(40, this.width / this.height, 1, 10000);
		this.camera.position.z = -1300;
		this.camera.position.y = 500;
		this.camera.position.x = -300;
		//this.camera.position.set(0,0,0);
		this.camera.lookAt(new THREE.Vector3(0,0,0));
	}

	setupLight(){
		var directionalLight = new THREE.DirectionalLight( 0xffffff, 1); //ライト作成
		directionalLight.position.set( -300, 1000, -500);
		directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
		this.scene.add(directionalLight); //シーンにライトを追加する
	}

	
	render()
	{
		this.renderer.render(this.scene, this.camera);  //レンダリング
	}

	getDomElement(){
		return this.renderer.domElement;
	}

	add(mesh){						//meshをシーンに追加
		this.scene.add(mesh);
		//AxisHelperを追加
		// var axis = new THREE.AxisHelper(1000);
		// axis.position.set(0,0,0);
		// this.scene.add(axis);
	}

	remove(mesh){						//meshをシーンから削除
		this.scene.remove(mesh);
	}
}
