export default class Box extends THREE.Mesh{

	constructor(){
		var geometry = new THREE.BoxGeometry(50, 50, 50);  //立方体作成
		geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, 25, 0));  //Geometoryを動かして上に伸びるようにする
		var material = new THREE.MeshPhongMaterial({color: 0xFFFFaa});
		super(geometry, material);
	}

}
