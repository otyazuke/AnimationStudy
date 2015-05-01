import MakeBase from './MakeBase'

export default class Squash{

	const(){
		this.scene = new THREE.Scene(); //シーン作成
		this.makeBase = new MakeBase;  //makeBaseインスタンスを作成
	}

	getRendrer(){
		var rendrer = this.makeBase.makeRendrer();
	}

	getCamera(){
		var camera = this.makeBase.makeCamera();
	}

	getScene(){
		this.makeBase.makeLight(scene);
		this.makeBase.makeCube(scene);
	}
}