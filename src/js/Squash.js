import MakeBase from './MakeBase'
import Box from './Box'
import AnimationSquash from './AnimationSquash'

export default class Squash{

	constructor(){
		this.makeBase = new MakeBase();  //makeBaseインスタンスを作成
		this.box = new Box();　　　　　　//Boxインスタンスを作成
		this.makeBase.add(this.box);
		this.box.position.y = 200;
		this.animation = new AnimationSquash();
	}

	getDomElement(){
		return this.makeBase.getDomElement();
	}

	render(){
		this.animation.updata(this.box);
		this.makeBase.render();

	}

}

