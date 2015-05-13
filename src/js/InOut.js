import MakeBase from './MakeBase'
import Box from './Box'
import AnimationInOut from './AnimationInOut'
import TimerInOut from './TimerInOut'

export default class InOut{

	constructor(){
		this.makeBase = new MakeBase();			//MakeBaseインスタンスを作成
		this.box = new Box()					//Boxインスタンスを作成
		this.box.position.x = -500;
		this.box.scale.x = 3;
		this.box.scale.y = 3;
		this.makeBase.add(this.box);					//sceneにBoxを追加
		this.animationInOut = new AnimationInOut();
		this.timerInOut = new TimerInOut();
	}

	getDomElement(){
		return this.makeBase.getDomElement();
	}

	render(){
		this.animationInOut.update(this.box, this.timerInOut.move());
		this.makeBase.render();
	}

}