export default class ShaderBox extends THREE.Mesh{

	constructor(){
		// var pyramidGeometry = new THREE.CylinderGeometry(0, 450, 450, 4, 100, true);	//四角錐作成
		var cubeGeometry = new THREE.CubeGeometry(150, 150, 150, 10, 10, 10);  //立方体作成
		var uniforms = {
			ratio: { type:'f', value: 0},
			ratio2: { type:'f', value: 0}
		};
		// var tmpPosition = pyramidGeometry.vertices;
		// console.log(tmpPosition);
		var attributes = {
			// pyramidPosition: { type: 'v3v', value: tmpPosition}
		};
		var shader_material = new THREE.ShaderMaterial({
			wireframe: true,
			uniforms: uniforms,
			attributes: attributes,
			vertexShader: [
				"uniform float ratio;",
				"uniform float ratio2;",
				"void main(void)",
				"{",
				"vec3 pos = position;",
				"pos = (normalize(pos) * 100.0 - pos) * ratio + pos;",
				// "pos = 0.1;",
				"pos.x = pos.x + ratio2 * ((100.0 * (1.0 - ((pos.y + 100.0) / 200.0))) * (abs(pos.x) / pos.x) - pos.x);",
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




