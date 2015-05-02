import MakeBase from './MakeBase'
import Box from './Box'

export default class Squash{

	constructor(){
		this.makeBase = new MakeBase();  //makeBaseインスタンスを作成
		this.box = new Box();
		this.makeBase.add(this.box);
		this.jump = new jump(this.box);
	}

	getDomElement(){
		return this.makeBase.getDomElement();
	}

	render(){
		this.jump.updata();
		this.makeBase.render();

	}

}

