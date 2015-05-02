export default class Box extends THREE.Mesh{

	constructor(){
		var geometry = new THREE.CubeGeometry(100, 100, 100);  //立方体作成
		var material = new THREE.MeshPhongMaterial({color: 0xFFFFaa});
		super(geometry, material);
	}

}