export default class AnimationSqash{
	
	// constructor(){

	// }

	updata(box){
		//Math.absで絶対値表示　toFixedで小数点以下切捨て
		box.scale.y = Math.abs(Math.sin(new Date().getTime() / 500) * 2); 
		box.translateY(-0.5);
	}
}