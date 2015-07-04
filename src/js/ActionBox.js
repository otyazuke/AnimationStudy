export default class ActionBox extends THREE.Mesh{

	constructor(){
		var geometry = new THREE.BoxGeometry(3,3,3);
		geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0,-1.5,0));
		var material = new THREE.MeshPhongMaterial({color: 0xffffff});
		super(geometry,material);
	}
}
