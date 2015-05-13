export default class AnimationInOut{

	constructor(){
		this.moveCount = 0;
	}

	update(box, moveFlag){

		if(moveFlag == 0){
			box.position.x += 30 * Math.sin(this.moveCount * 180 / 104 * (Math.PI / 180));
			this.moveCount++;
			if(this.moveCount == 105){
				this.moveCount = 0;
			}
		}else if(moveFlag == 1){
			box.position.x -= 30 * Math.sin(this.moveCount * 180 / 104 * (Math.PI / 180));
			this.moveCount++
			if(this.moveCount == 105){
				this.moveCount = 0;
			}
		}
	}
}