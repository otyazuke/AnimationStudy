export default class MakeEdge extends THREE.Mesh{

	constructor(){
		var geometry = new THREE.CubeGeometry(150, 150, 150);  //立方体作成
		geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, 75, 0));  //Geometoryを動かして上に伸びるようにする
		var material = new THREE.MeshPhongMaterial({color: 0xFFFFaa});  //, wireframe: true, wireframeLinewidth: 1
		material.transparent = true;    //opavityを変更して透明にできるようにする
		super(geometry, material);
	}
}