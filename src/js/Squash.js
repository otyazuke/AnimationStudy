import MakeBase from './MakeBase'
import Box from './Box'
import AnimationSquash from './AnimationSquash'
import TimerSquash from './TimerSquash'

export default class Squash{

	constructor(){
		this.makeBase = new MakeBase();  //makeBaseインスタンスを作成
		this.box = new Box();　　　　　　//Boxインスタンスを作成
		this.makeBase.add(this.box);
		this.box.position.y = 280;
		this.animation = new AnimationSquash();
		this.timer = new TimerSquash();  //Timerインスタンス作成
		// this.box.scale.set(1, 2, 1);
		// console.log(this.box.position);
	}

	getDomElement(){
		return this.makeBase.getDomElement();
	}

	// getGuiElement(){
	// 	return this.animation.getDomElement();
	// }

	render(){
		this.animation.updata(this.box, this.timer.move(), this.timer.stretch());
		this.makeBase.render();
	}

}

