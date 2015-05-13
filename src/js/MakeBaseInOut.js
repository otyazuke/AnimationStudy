export default class MakeBaseInOut extends MakeBase.js{

	setupCamera(){
		this.camera = new THREE.PerspectiveCamera(40, this.width / this.height, 1, 10000);
		this.camera.position.z = -1200;
		this.camera.position.y = 0;
		this.camera.position.x = 0;
		//this.camera.position.set(0,0,0);
		this.camera.lookAt(new THREE.Vector3(0,0,0));

	}

}