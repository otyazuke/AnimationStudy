export default class AnimationSqash{
	
	constructor(){
		// this.params = {x:0, y:0, z:0};
		// this.gui = new dat.GUI();
		// this.gui.add(this.params, 'x', -1, 1).listen();
		// this.gui.add(this.params, 'y', -1, 1).listen();
		// this.gui.add(this.params, 'z', -1, 1).listen();
	}

	// getDomElement(){
	// 	return this.gui.domElement;
	// }

	updata(box, moveFlag){

		if (moveFlag == 0){
			box.position.y -= 17;
		}else if(moveFlag == 2){
			box.position.y += 17;
		}else{

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