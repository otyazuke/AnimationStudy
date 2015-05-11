export default class AnimationSqash{
	
	constructor(){
		// this.params = {x:0, y:0, z:0};
		// this.gui = new dat.GUI();
		// this.gui.add(this.params, 'x', -1, 1).listen();
		// this.gui.add(this.params, 'y', -1, 1).listen();
		// this.gui.add(this.params, 'z', -1, 1).listen();
		this.moveAy = 0;
		this.moveAy2= 0;
		this.moveCount = 0;
		this.stretchAy = 0;
		this.stretchCount = 0;
		this.stretchCount2 = 0;
		this.expandCount = 0;
	}

	// getDomElement(){
	// 	return this.gui.domElement;
	// }

	updata(box, moveFlag, stretchFlag, expandFlag, rotateFlag){

		if (moveFlag == 0){
			this.moveAy2 += 0.3;
			this.moveAy += (0.2 + this.moveAy2);
			box.position.y -= this.moveAy;
		}else if(moveFlag == 1){

		}else if(moveFlag == 2){
			// console.log(this.moveCount);
			box.position.y += 47.5 * Math.cos(this.moveCount * 90 / 21 * (Math.PI / 180));
			// console.log(Math.cos(this.moveCount * 90 / 21 * (Math.PI / 180)));
			this.moveCount++;
			if(this.moveCount == 22){
				// console.log(box.position.y);
				box.position.y = 280;
				this.moveCount = 0;
				this.moveAy = 0;
				this.moveAy2 = 0;
			}
		}

		if (stretchFlag == 0){
			this.stretchAy += 0.045;
			box.scale.y += this.stretchAy;
		}else if(stretchFlag == 1){
			box.scale.y -= 0.83;
		}else if (stretchFlag == 2){
			box.scale.y -= 0.04 * Math.cos(this.stretchCount * 180 / 15 * (Math.PI / 180));
			this.stretchCount++;
		}
		else if(stretchFlag == 3){
			box.scale.y += 1;
		}else if(stretchFlag == 4){
			// console.log(box.scale.y);
			box.scale.y -= 0.533 * Math.cos(this.stretchCount2 * 90 / 18 * (Math.PI / 180));
			this.stretchCount2++;
			if(this.stretchCount2 == 18){
				// console.log(box.scale.y);
				box.scale.y = 1;
				this.stretchAy = 0;
				this.stretchCount = 0;
				this.stretchCount2 = 0;
			}
		}

		if (expandFlag == 0){
			box.scale.x += 0.3 * Math.cos(this.expandCount * 180 / 21 * (Math.PI / 180));
			console.log(Math.cos(this.expandCount * 180 / 21 * (Math.PI / 180)));
			box.scale.z += 0.3 * Math.cos(this.expandCount * 180 / 21 * (Math.PI / 180));

			console.log(this.expandCount);

			this.expandCount++;

			if(this.expandCount == 22){
				this.expandCount = 0;
			}
		}

		if(rotateFlag == 0){
			box.rotation.y -= 180 / 19 * (Math.PI / 180);
		}


		// box.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(this.params.x, this.params.y, this.params.z) );
		//Math.absで絶対値表示　toFixedで小数点以下切捨て
		// box.scale.y = Math.abs(Math.sin(new Date().getTime() / 500) * 2); 
		// box.translateY(-0.5);
		// box.geometry.applyMatrix( new THREEMatrix4().setTranslation(0, 10, 0) );
		
		// if (bottomFlag == 0){
		// 	box.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -40, 0) );  //Boxの中心を移動する
		// 	box.scale.y += 0.05;
		// 	box.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, 40, 0) );  //Boxの中心を移動する
		// }else if (bottomFlag == 2){
		// 	box.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -40, 0) );  //Boxの中心を移動する
		// 	box.scale.y -= 0.05;
		// 	box.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, 40, 0) );  //Boxの中心を移動する
		// }else{

		// }

		// if (topFlag == 1){
		// 	box.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, 40, 0) );  //Boxの中心を移動する
		// 	box.scale.y -= 0.125;
		// 	box.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -40, 0) );  //Boxの中心を移動する
		// }else if (topFlag == 3){
		// 	box.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, 40, 0) );  //Boxの中心を移動する
		// 	box.scale.y += 0.05;
		// 	box.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -40, 0) );  //Boxの中心を移動する
		// }else{

		// }
	}
}