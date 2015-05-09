export default class TimerSquash {

	constructor(){
		this.moveCount = 0;
		this.stretchCount = 0;
	}

	move(){
		this.moveCount++;
		if (this.moveCount <= 22){
			return 0;
		}else if(this.moveCount <= 44){
			return 1;
		}else if(this.moveCount <= 65){
			return 2;
		}else if(this.moveCount == 66){
			this.moveCount = 0;
			return 2;
		}
	}

	stretch(){
		this.stretchCount++;
		if(this.stretchCount <= 17){
			return 0;
		}else if(this.stretchCount <= 26){
			return 1;
		}else if(this.stretchCount <= 41){
			return 2;
		}else if(this.stretchCount <= 48){
			return 3;
		}else if(this.stretchCount <= 65){
			return 4;
		}else if(this.stretchCount == 66){
			this.stretchCount = 0;
			return 4;
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