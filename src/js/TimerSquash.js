export default class TimerSquash {

	constructor(){
		this.moveCount = 0;
		this.stretchCount = 0;
		this.expandCount = 0;
		this.rotateCount= 0;
	}

	move(){
		this.moveCount++;
		if (this.moveCount <= 15){
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
		if(this.stretchCount <= 14){
			return 0;
		}else if(this.stretchCount <= 15){
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

	expand(){
		this.expandCount++;
		if(this.expandCount >= 15 && this.expandCount <= 16){
			return 0;
		}else if(this.expandCount >= 17 && this.expandCount <= 52){
			return 1;
		}else if (this.expandCount == 66){
			this.expandCount = 0;
			return 2;
		}else{
			return 2;
		}
	}

	rotate(){
		this.rotateCount++;
		if(this.rotateCount >= 114 && this.rotateCount <= 132){
			if(this.rotateCount == 132){
				this.rotateCount = 0;
			}
			return 0;
		}else{
			return 1;
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