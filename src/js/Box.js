export default class Box extends THREE.Mesh{

	constructor(){
		var geometry = new THREE.CubeGeometry(80, 80, 80);  //立方体作成
		geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -50, 0) );  //Boxの中心を移動する
		var material = new THREE.MeshPhongMaterial({color: 0xFFFFaa});
		super(geometry, material);
	}

}