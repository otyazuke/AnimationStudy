export default class ShaderBox extends THREE.Mesh{

	constructor(){
		// var pyramidGeometry = new THREE.CylinderGeometry(0, 450, 450, 4, 100, true);	//四角錐作成
		var cubeGeometry = new THREE.CubeGeometry(200, 200, 200, 11, 11, 11);  //立方体作成
		var uniforms = {
			ratio: { type:'f', value: 0},
			ratio2: { type:'f', value: 0},
			ratio3: { type:'f', value: 0}
		};
		// var tmpPosition = pyramidGeometry.vertices;
		// console.log(tmpPosition);
		var attributes = {
			// pyramidPosition: { type: 'v3v', value: tmpPosition}
		};
		var shader_material = new THREE.ShaderMaterial({
			// wireframe: true,
			uniforms: uniforms,
			attributes: attributes,
			vertexShader: [
				"uniform float ratio;",
				"uniform float ratio2;",
				"uniform float ratio3;",
				"void main(void)",
				"{",
				"vec3 posSquare = position;",
				"vec3 posSphere = position;",
				"vec3 posPyramid = position;",
				"vec3 pos = position;",
				"posSphere = normalize(posSphere) * 150.0;",
				// "posSphere = (normalize(posSphere) * 150.0 - posSphere) * ratio + posSphere;",
				"posPyramid.x = (1.0 - ((100.0 + posPyramid.y) / 200.0)) * posPyramid.x;",
				"posPyramid.z = (1.0 - ((100.0 + posPyramid.y) / 200.0)) * posPyramid.z;",
				// "pos = 0.1;",
				// "posSquare.x = ratio2 * ((((1.0 - ((posSquare.y + 150.0) / 300.0))) * position.x ));",
				// "posSquare.z = ratio2 * ((((1.0 - ((posSquare.y + 150.0) / 300.0))) * position.z ));",
				// "pos.z = pos.z + ratio2 * (((100.0 * (1.0 - ((pos.y + 100.0) / 200.0))) * (abs(pos.z) / pos.z) - pos.z));",
				"pos = posSquare * ratio + posSphere * ratio2 + posPyramid * ratio3;",
				"gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);",
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
		super(cubeGeometry, shader_material);
	}

}




