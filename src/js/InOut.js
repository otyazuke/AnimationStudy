import MakeBase from './MakeBase'
import Box from './Box'
import AnimationInOut from './AnimationInOut'
import TimerInOut from './TimerInOut'
import MakeEdge from './MakeEdge'

export default class InOut{

	constructor(){
		this.makeBase = new MakeBase();			//MakeBaseインスタンスを作成
		this.makeBase.camera.position.x = 0;		//camera位置を戻す
		this.makeBase.camera.lookAt(new THREE.Vector3(0,0,0));		//cameraの向きを戻す
		// this.makeBase.camera.rotation.x = 0;
		// console.log(this.makeBase.camera.rotation.z);
		// this.makeBase.camera.updateProjectionMatrix();
		this.box = new Box();					//Boxインスタンスを作成
		this.box.position.x = -700;
		this.box.scale.x = 3;
		this.box.scale.y = 3;
		this.box.scale.z = 3;
		this.makeBase.add(this.box);					//sceneにBoxを追加
		// this.edge = new MakeEdge();						//Edgeインスタンスを作成
		// this.makeBase.add(this.edge);					//Edgeインスタンスを追加
		this.animationInOut = new AnimationInOut();
		this.animationInOut.update(this.box);				//boxをTweenMaxで動かす
		// this.timerInOut = new TimerInOut();
		





		var timeLine = new TimelineMax({repeat:-1});

		timeLine.to(this.box.position, 2.6, {x: 700, ease: Power3.easeInOut// repeat: -1, yoyo: true,
		})
		.to(this.box.position, 2.6, {x: -700, ease: Power3.easeInOut});

		var tmpMakeBase = this.makeBase;
		var tmpBox = this.box;
		var count = 0;
		var opacityCount = 1;

		TweenMax.to(this.box, 2.6,{
			repeat: -1,
			onUpdate: function() {
				count++;
				opacityCount -= 0.01;
				if(count == 1){
					var box = new MakeEdge();		//edge用のboxを作成
					var edge = new THREE.EdgesHelper(box, "#ffff00");		//boxのedgeを作成
					edge.material.linewidth = 1;
					box.position.x = tmpBox.position.x;
					box.position.z = tmpBox.position.z + 3;
					box.material.opacity = 0;					//boxを透明に
					tmpMakeBase.add(box);
					tmpMakeBase.add(edge);
					edge.material.transparent = true;   //opacityを変更してedgeを透明に変更できるようにする
					edge.material.opacity = 1;
					TweenMax.to(edge.material, 2,{					//edgeのアニメーション　透明にする
						opacity:0, 
						onComplete: function(){				//アニメーション終了時に実行
							tmpMakeBase.remove(box);
							tmpMakeBase.remove(edge);
					}
				});

				}
				if(count == 7){
					count = 0;
				}
			}
		});



	}

	getDomElement(){
		return this.makeBase.getDomElement();
	}

	render(){
		// this.animationInOut.update(this.box);
		this.makeBase.render();
	}

}