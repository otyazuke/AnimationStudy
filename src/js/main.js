import Squash from './Squash'
import InOut from './InOut'
import ActionPose from './ActionPose'


var squash;
var inOut;
var actionPose;

window.onload = function(){  //レンダラーを作成して、最初のレンダリング
	var container=document.getElementById('container');
	squash = new Squash();
	container.appendChild(squash.getDomElement()); //レンダラーをDOM上に設置

	var container2 = document.getElementById('container2');
	inOut = new InOut();
	container2.appendChild(inOut.getDomElement()); //レンダラーをDOM上に設置

	var container3 = document.getElementById('container3');
	actionPose = new ActionPose();
	container3.appendChild(actionPose.getDomElement()); //レンダラーをDOM上に設置

	render();

	var c = document.getElementById('canvas');		//canvasエレメントを取得
	c.width = 840;
	c.height = 398;
	var gl = c.getContext('webgl');			//webGLコンテキストを取得

	var v_shader = create_shader('vs');		//頂点シェーダの生成
	var f_shader = create_shader('fs');		//フラグメントシェーダの生成

	var prg = create_program(v_shader, f_shader);		//プログラムオブジェクトの生成とリンク

	var attLocation = new Array(2);			//attributeLocationを配列に取得
	attLocation[0] = gl.getAttribLocation(prg, 'position');		//attributeLocationの取得
	attLocation[1] = gl.getAttribLocation(prg, 'color');		//attributeLocationの取得

	var attStride = new Array(2);			//attribute要素数を配列に取得
	attStride[0] = 3;		//attributeの要素数（この場合はxyzの３種類）
	attStride[1] = 4;

	var vertex_position = [			//モデル（頂点）データ
		//x,   y,   z
		0.0, 1.0, 0.0,
		1.0, 0.0, 0.0,
		-1.0, 0.0, 0.0,
		0.0, -1.0, 0.0
	];

	var vertex_color = [			//頂点の色情報を格納する配列
		1.0, 0.0, 0.0, 1.0,
		0.0, 1.0, 0.0, 1.0,
		0.0, 0.0, 1.0, 1.0,
		1.0, 1.0, 1.0, 1.0
	];

	var index = [		//頂点インデックスを格納する配列
		0, 1, 2,
		1, 2, 3
	]

	var position_vbo = create_vbo(vertex_position);		//VBOの生成
	var color_vbo = create_vbo(vertex_color);		//VBOの生成
	
	set_attribute([position_vbo, color_vbo], attLocation, attStride);		//VBOを登録

	var ibo = create_ibo(index);		//IBOnの生成

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);		//iboをバインドして登録する

	var uniLocation = gl.getUniformLocation(prg, 'mvpMatrix');		//uniFormLocationの取得

	var m = new matIV();		//matIVオブジェクトを生成

	var mMatrix = m.identity(m.create());		//モデル変換行列
	var vMatrix = m.identity(m.create());		//ビュー変換行列
	var pMatrix = m.identity(m.create());		//プロジェクション変換行列
	var tmpMatrix = m.identity(m.create());		//
	var mvpMatrix = m.identity(m.create());		//最終変換行列

	m.lookAt([0.0, 0.0, 5.0], [0, 0, 0], [0, 1, 0], vMatrix);		//ビュー座標変換行列
	m.perspective(45, c.width/c.height, 0.1, 100, pMatrix);		//プロジェクション変換行列
	m.multiply(pMatrix, vMatrix, tmpMatrix);		//tmpを作る

	var count = 0;		//カウンタの宣言

	roop();

	function roop(){
		gl.clearColor(0.0, 0.0, 0.0, 1.0);      //canvasを初期化する色を設定
		gl.clearDepth(1.0);		//canvasを初期化する際の深度を設定
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);		//canvasを初期化

		count++;		//カウンタをインクリメント

		var rad = (count % 360) * Math.PI / 180;		//カウンタをもとにラジアンを算出

		m.identity(mMatrix);
		m.rotate(mMatrix, rad, [0, 1, 0], mMatrix);
		m.multiply(tmpMatrix, mMatrix, mvpMatrix);
		gl.uniformMatrix4fv(uniLocation, false, mvpMatrix);

		gl.drawElements(gl.TRIANGLES, index.length, gl.UNSIGNED_SHORT, 0);		//インデックスを用いた描画
		gl.flush();

		console.log(11111111);

		setTimeout(roop, 1000 / 30);
	};

	function create_shader(id){		//シェーダを生成、コンパイルする関数
		var shader;		//シェーダを格納する変数

		var scriptElement = document.getElementById(id);		//HTMLからscriptタグへの参照を取得

		if(!scriptElement){return;}		//sxriptタグが存在しない場合は抜ける

		switch(scriptElement.type){
			case 'x-shader/x-vertex':
				shader = gl.createShader(gl.VERTEX_SHADER);
				break;

			case 'x-shader/x-fragment':
				shader = gl.createShader(gl.FRAGMENT_SHADER);
				break;

			default :
				return;
		}

		gl.shaderSource(shader, scriptElement.text);		//生成されたシェーダにソースを割り当てる
		gl.compileShader(shader);		//シェーダをコンパイルする

		if(gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
			return shader;		//成功していたらシェーダを返して終了
		}else{
			alert(gl.getShaderInfoLog(shader));		//失敗していたらエラーログをアラート
		}
	}

	function create_program(vs, fs){
		var program = gl.createProgram();		//プログラムオブジェクトの生成

		gl.attachShader(program, vs);		//プログラムオブジェクトにシェーダを割り当てる
		gl.attachShader(program, fs);		//プログラムオブジェクトにシェーダを割り当てる

		gl.linkProgram(program);		//シェーダをリンク

		if(gl.getProgramParameter(program, gl.LINK_STATUS)){		//シェーダのリンクが正しく行われたかをチェック
			gl.useProgram(program);		//成功していたらプログラムオブジェクトを有効
			return program;		//プログラムオブジェクトを返して終了
		}else{
			alert(gl.getProgramInfoLog(program));		//失敗していたらエラーログをアラートする
		}
	}

	function create_vbo(data){		//VBOを生成する関数
		var vbo = gl.createBuffer();		//バッファオブジェクトの生成

		gl.bindBuffer(gl.ARRAY_BUFFER, vbo);		//バッファをバインド

		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);		//バッファにデータをセット

		gl.bindBuffer(gl.ARRAY_BUFFER, null);		//バッファのバインドを無効化

		return vbo;		//生成したVBOを返す
	}

	function set_attribute(vbo, attL, attS){		//VBOをバインドし登録する関数
		//引数として受け取った配列を処理する
		for(var i in vbo){
			gl.bindBuffer(gl.ARRAY_BUFFER, vbo[i]);		//バッファをバインドする
			gl.enableVertexAttribArray(attL[i]);		//attributeLocationを有効にする
			gl.vertexAttribPointer(attL[i], attS[i], gl.FLOAT, false, 0, 0);		//attributeLncationを通知し登録する
		}

	}

	function create_ibo(data){
		var ibo = gl.createBuffer();		//バッフォオブジェクトの生成

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);		//バッファをバインドする

		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Int16Array(data), gl.STATIC_DRAW);		//バッファにデータをセット

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);		//バッファのバインドを無効化

		return ibo;		//生成したIBOを返して終了
	}
}

function render()
{
	squash.render();
	inOut.render();
	actionPose.render();
	requestAnimationFrame(render);
	// console.log(new Date().getTime() / 100000);
}




























