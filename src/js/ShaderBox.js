export default class ShaderBox extends THREE.Mesh{

	constructor(){
		var geometry = new THREE.CubeGeometry(50, 50, 50);  //立方体作成
		geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, 25, 0));  //Geometoryを動かして上に伸びるようにする
		var uniforms = {
			fSinTime0_x:{ type:'f', valule: 0},
		};
		var attributes = {
		};
		var shader_material = new THREE.ShaderMaterial({
			// vertexShader: ["uniform float fSinTime0_x",
			// 	"void main(void)",
			// 	"{",
			// 	"gl_position = projectMatrix * viewMatrix * vec4(pos, 1.0);",
			// 	"}"].join("\n"),
			// fragmentShader:["void main(void)",
			// 	"{",
			// 	"gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);",
			// 	"}"
			// ].join("\n"),
			// uniforms: uniforms,
			// attributes: attributes

			// vertexShader: document.getElementByID('vertexAction').textContent,
			// fragmentShader: document.getElementByID('fragmentAction').textContent,
			uniforms: uniforms,
			attributes: attributes
		})

		// var material = new THREE.MeshPhongMaterial({color: 0xFFFFaa});
		super(geometry, shader_material);
	}

}