export default class TimerSquash {

	constructor(){
		this.moveCount = 0;
		this.bottomCount = 0;
		this.topCount = 0;
	}

	move(){
		this.moveCount++;
		if (this.moveCount <= 23){
			return 0;
		}else if(this.moveCount <= 33){
			return 1;
		}else if(this.moveCount <= 56){
			return 2;
		}else if(this.moveCount <= 66){
			return 3;
		}else{
			this.moveCount = 0;
		}
	}

	// bottomSurface(){
	// 	this.bottomCount++
	// 	if (this.bottomCount <= 50){
	// 		return 0;
	// 	}else if (this.bottomCount <= 80){
	// 		return 1;
	// 	}else if (this.bottomCount <= 130){
	// 		return 2;
	// 	}else if (this.bottomCount <= 160){
	// 		return 3;
	// 	}else{
	// 		this.bottomCount = 0;
	// 	}
	// }

	// topSurface(){
	// 	this.topCount++;
	// 	if (this.topCount <= 40){
	// 		return 0;
	// 	}else if(this.topCount <= 60){
	// 		return 1;
	// 	}else if(this.topCount <= 80){
	// 		return 2;
	// 	}else if(this.topCount <= 130){
	// 		return 3;
	// 	}else {
	// 		this.topCount = 0;
	// 	}
	// }
}