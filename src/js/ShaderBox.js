export default class ShaderBox extends THREE.Mesh{

	constructor(){
		var geometry = new THREE.CubeGeometry(450, 450, 450, 10, 10, 10);  //立方体作成
		// var geometry = new THREE.CylinderGeometry(0, 400, 450, 4, 150, false, 3);
		// geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, 25, 0));  //Geometoryを動かして上に伸びるようにする
		var uniforms = {
			fSinTime0_X: { type:'f', value: 0},
			ratio: { type:'f', value: 0}
		};
		var attributes = {
		};
		var shader_material = new THREE.ShaderMaterial({
			wireframe: true,
			uniforms: uniforms,
			attributes: attributes,
			vertexShader: [
				"uniform float fSinTime0_X;",
				"uniform float ratio;",
				"void main(void)",
				"{",
				"vec3 pos = position;",
				"pos = (normalize(pos) * 350.0 - pos) * ratio + pos;",
				// "pos = normalize(pos) * 400.0;",
				"gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);",
				"}" ].join("\n"),
			fragmentShader:["void main(void)",
				"{",
				"gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);",
				"}"
			].join("\n")
			// vertexShader: document.getElementByID('vertexAction').textContent,
			// fragmentShader: document.getElementByID('fragmentAction').textContent,
			// uniforms: uniforms,
			// attributes: attributes
		})

		// var material = new THREE.MeshPhongMaterial({color: 0xFFFFaa});
		super(geometry, shader_material);
	}

}




