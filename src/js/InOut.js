import MakeBase from './MakeBase'
import Box from './Box'
import AnimationInOut from './AnimationInOut'
import TimerInOut from './TimerInOut'
import MakeEdge from './MakeEdge'

export default class InOut{

	constructor(){
		this.makeBase = new MakeBase();			//MakeBaseインスタンスを作成
		this.makeBase.camera.position.x = 0;		//camera位置を戻す
		this.makeBase.camera.lookAt(new THREE.Vector3(0,0,0));		//cameraの向きを戻す
		// this.makeBase.camera.rotation.x = 0;
		console.log(this.makeBase.camera.rotation.z);
		// this.makeBase.camera.updateProjectionMatrix();
		this.box = new Box();					//Boxインスタンスを作成
		this.box.position.x = -700;
		this.box.scale.x = 3;
		this.box.scale.y = 3;
		this.makeBase.add(this.box);					//sceneにBoxを追加
		this.edge = new MakeEdge();
		this.makeBase.add(this.edge);
		this.animationInOut = new AnimationInOut();
		this.animationInOut.update(this.box);				//boxをTweenMaxで動かす
		// this.timerInOut = new TimerInOut();
	}

	getDomElement(){
		return this.makeBase.getDomElement();
	}

	render(){
		// this.animationInOut.update(this.box);
		this.makeBase.render();
	}

}