export default class AnimationInOut{

	constructor(){
		// this.moveCount = 0;
	}

	update(box){

		var timeLine = new TimelineMax({repeat:-1});

		timeLine.to(box.position, 2.5, {x: 700, ease: Power3.easeInOut// repeat: -1, yoyo: true,
		})
		.to(box.position, 2.5, {x: -700, ease: Power3.easeInOut});

		// if(moveFlag == 0){
		// 	// box.position.x += 30 * Math.sin(this.moveCount * 180 / 104 * (Math.PI / 180));
		// 	TweenMax.to(container, 10, {backgroundColor: '#00ff00'});
		// 	var obj = {left:0};
		// 	TweenMax.to(box.position, 1, {x:100});
		// 	this.moveCount++;
		// 	if(this.moveCount == 105){
		// 		this.moveCount = 0;
		// 	}
		// }else if(moveFlag == 1){
		// 	// box.position.x -= 30 * Math.sin(this.moveCount * 180 / 104 * (Math.PI / 180));
		// 	this.moveCount++
		// 	if(this.moveCount == 105){
		// 		this.moveCount = 0;
		// 	}
		// }
	}
}