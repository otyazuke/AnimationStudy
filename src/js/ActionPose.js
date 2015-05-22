import MakeBase from './MakeBase'
import Box from './Box'

export default class ActionPose{

	constructor(){
		this.makeBase = new MakeBase();			//MakeBaseインスタンスを作成
		this.makeBase.camera.position.x = 0;		//camera位置を戻す
		this.makeBase.camera.lookAt(new THREE.Vector3(0,0,0));		//cameraの向きを戻す
		this.box = new Box();					//Boxインスタンスを作成
		this.makeBase.add(this.box);					//sceneにBoxを追加



		// var vs = document.getElementById("vs");
		// var vertexShader = createShader(vs);
		// // var fs = document.getElementById("fs");
		// // var fragmentSdader = createShader(fs);

		// function createShader(elem){
		// 	var shaderElem;
		// 	switch (elem.type){
		// 		case 'x-shader/x-vertex':
		// 		shaderElem = gl.createShader(gl.VERTEX_SHADER);
		// 		break;
		// 		case 'x-shader/x-fragment':
		// 		shaderElem = gl.createShader(gl.FRAGMENT_SHADER);
		// 		break;
		// 	}
		// 	return shaderElem;
		// }

		// gl.shaderSource(vertexShader, vs.text);
		// gl.compileShader(vertexShader);

		// if(gl.getSdaderParameter(vertexShader, gl.COMPILE_STATUS)){			//シェーダーがコンパイルできてるかチェック
		// 	return true;
		// }else{
		// 	throw new ERROR (gl.getShaderInfoLog(vertexShader));
		// }

		// var program = createProgram(vs, vf);		//シェーダソースをリンクしてプログラムを作る

		// 	function createProgram(vs, vf){				//両シェーダをもとにプログラムを作る関数
		// 		var program = gl.createProgram();
		// 		gl.attachShader(program, vs);
		// 		gl.attachShader(program, vf);
		// 		gl.lonkProgram(program);

		// 		if(gl.getProgramParameter(program, gl.LINK_STATUS)){		//シェーダがリンクできたかチェックする
		// 			gl.useProgram(program);
		// 			return program;
		// 		}else{
		// 			throw new Error (gl.getProgramInfoLog(program));
		// 		}
		// 	}

		// 	var attLocation = [];
		// 	//変数名を文字列で指定して取り出す
		// 	//0番目にposition,1番目にcolor
		// 	attLocation[0] = gl.getUniformLocation(program, 'position');
		// 	attLocation[1] = gl.getUniformLocation(program, 'color');
		// 	//変数名の順番と型の順番を合わせる(0:position, 1:color)
		// 	var attStride = [];
		// 	attStride[0] = 3;	//positionはvec3なので3
		// 	attStride[1] = 4;	//colorはvec4なので4

		// 	var position = [
		// 		-1.0, 1.0, 0.0,
		// 		 1.0, 1.0, 0.0,
		// 		-1.0,-1.0, 0.0,
		// 		 1.0,-1.0, 0.0
		// 	];
		// 	var positionVbo = gl.createBuffer();
		// 	gl.bindBuffer(gl.ARRAY_BUFFER, positionVbo);
		// 	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(position), gl.TATIC_DRAW);

		// 	var color = [];

		// 	var vbos = [positionVbo, colorVbo];

		// 	for(var i in vbos){
		// 		gl.bindBuffer(gl.ARRAY_BUFFER, vbos[i]);
		// 		gl.enableVertexAttribArray(attLocation[i]);
		// 		gl.enableVertexAttribPointer(attLocation[i], attStride[i], false, 0, 0);
		// 	}

		// 	var uniLocation = [];
		// 	uniLocation[0] = gl.getUniformLocation(program, 'matrix');

		// 	var matrix = [];

		// 	gl.getUniformMatrix4fv(uniLocation[0], false, matrix);

		// 	gl.drawArrays(gl.TRIANGLES, 0, 3);

		// 	gl.flush();






	}

	getDomElement(){
		return this.makeBase.getDomElement();
	}

	render(){
		this.makeBase.render();
	}
}