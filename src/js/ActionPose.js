import ShaderBase from './ShaderBase'
import ShaderBox from './ShaderBox'

export default class ActionPose{

	constructor(){
		this.shaderBase = new ShaderBase();			//MakeBaseインスタンスを作成
		this.shaderBase.camera.position.x = -300;		//camera位置を戻す
		this.shaderBase.camera.position.y = 1000;		//camera位置を戻す
		this.shaderBase.camera.lookAt(new THREE.Vector3(0,0,0));		//cameraの向きを戻す
		this.shaderBox = new ShaderBox();					//Boxインスタンスを作成
		this.shaderBase.add(this.shaderBox);					//sceneにBoxを追加
		this.shaderBox.scale.x = 3;
		this.shaderBox.scale.y = 3;
		this.shaderBox.scale.z = 3;

		// var myshaderUniforms;
		// myshaderUniforms= {};

		// var shader = new THREE.ShaderMaterial({
		// 	vertexShader: document.getElementByID('vertexAction').textContent;
		// 	fragmentShader: document.getElementByID('fragmentAction').textContent;
		// 	uniforms:{

		// 	}
		// })


	}

	getDomElement(){
		return this.shaderBase.getDomElement();
	}

	render(){
		this.shaderBase.render();
		if(this.shaderBox.material.__webglShader.uniforms.ratio.value < 1){
			this.shaderBox.material.__webglShader.uniforms.ratio.value += 0.015;
		}
		console.log(this.shaderBox.material.__webglShader.uniforms.ratio.value);
		// debugger;
	}
}

