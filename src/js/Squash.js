import MakeBase from './MakeBase'
import Box from './Box'
import AnimationSquash from './AnimationSquash'
import TimerSquash from './TimerSquash'
import ActionBox from './ActionBox'

export default class Squash{

	constructor(){
		this.makeBase = new MakeBase();  //makeBaseインスタンスを作成
		this.box = new Box();　　　　　　//Boxインスタンスを作成
		this.makeBase.add(this.box);
		this.box.position.y = 280;
		this.animation = new AnimationSquash();
		this.timer = new TimerSquash();  //Timerインスタンス作成
		this.actionBox1 = new ActionBox();  //ActionBoxインスタンスを作成
		this.makeBase.add(this.actionBox1);
		this.actionBox1.position.x = -20;
		this.actionBox1.position.y = 375;
		this.actionBox1.position.z = 20;
		this.actionBox2 = new ActionBox();  //ActionBoxインスタンスを作成
		this.makeBase.add(this.actionBox2);
		this.actionBox2.position.x = -15;
		this.actionBox2.position.y = 385;
		this.actionBox2.position.z = -20;
		this.actionBox3 = new ActionBox();  //ActionBoxインスタンスを作成
		this.makeBase.add(this.actionBox3);
		this.actionBox3.position.x = 25;
		this.actionBox3.position.y = 375;
		this.actionBox3.position.z = -20;
	}

	getDomElement(){
		return this.makeBase.getDomElement();
	}

	// getGuiElement(){
	// 	return this.animation.getDomElement();
	// }

	render(){
		this.animation.updata(this.box, this.timer.move(), this.timer.stretch(), this.timer.expand(), this.timer.rotate(),this.actionBox1, this.actionBox2, this.actionBox3, this.timer.actionBox());
		this.makeBase.render();
	}

}

