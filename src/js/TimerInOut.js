export default class TimerInOut{
	constructor(){
		this.moveCount = 0;
		this.moveResetCount = 0;
	}

	move(){
		this.moveCount++;
		if(this.moveCount >= 1 && this.moveCount <= 105){
			return 0;
		}else if(this.moveCount >= 106 && this.moveCount <= 210){
			this.moveResetCount++;
			if(this.moveResetCount == 105){
				this.moveCount = 0;
				this.moveResetCount = 0;
			}
			return 1;
		}
	}
}