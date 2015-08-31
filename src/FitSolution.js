(function(_G){
	var resolutionSize = null;
	var	screen_designed_width_rate = null;
	var	screen_designed_height_rate = null;

	function init(designWidth, designHeight){
		var screenSize = cc.view.getFrameSize();
		cc.view.setDesignResolutionSize(screenSize.width, screenSize.height, cc.ResolutionPolicy.SHOW_ALL);

		setScreen_designed_rate(screenSize, new cc.size(designWidth, designHeight));
	};
	function setScreen_designed_rate(screenSize, designedSize){
		screen_designed_width_rate = screenSize.width / designedSize.width;
		screen_designed_height_rate = screenSize.height / designedSize.height;
	};

	function scaleRateShowAll() {
		return 	screen_designed_width_rate <
				screen_designed_height_rate ?
				screen_designed_width_rate :
				screen_designed_height_rate;
	};
	//全现实 背景用此适配模式
	function scaleRateNoBoard() {
		return 	screen_designed_width_rate >
				screen_designed_height_rate ?
				screen_designed_width_rate :
				screen_designed_height_rate;
	};
	//高适配， 宽拉伸
	function scaleRateByHeight() {
		return screen_designed_height_rate;
	};
	//宽适配， 高拉伸
	function scaleRateByWidth() {
		return screen_designed_width_rate;
	};
	_G.FitSolution = {
		UIFitType : {
			UnKown:"UnKown",
			ShowAll:"ShowAll",
			NoBoard:"NoBoard",
			ByHeight:"ByHeight",
			ByWidth:"ByWidth"
		},
		init:init,
		scaleRateShowAll:scaleRateShowAll,
		scaleRateNoBoard:scaleRateNoBoard,
		scaleRateByHeight:scaleRateByHeight,
		scaleRateByWidth:scaleRateByWidth,
	}
})(this)




//var FitSolution = {
//	resolutionSize : null,
//	screen_designed_width_rate : null,
//	screen_designed_height_rate : null,
//
//	init:function(designWidth, designHeight){
//		var screenSize = cc.view.getFrameSize();
//		cc.view.setDesignResolutionSize(screenSize.width, screenSize.height, cc.ResolutionPolicy.SHOW_ALL);
//
//		this.setScreen_designed_rate(screenSize, new cc.size(designWidth, designHeight));
//	},
//
//	setScreen_designed_rate:function(screenSize, designedSize){
//        this.screen_designed_width_rate = screenSize.width / designedSize.width;
//    	this.screen_designed_height_rate = screenSize.height / designedSize.height;
//    },
//	//刘黑边 控件用该适配模式
//	scaleRateShowAll:function () {
//		return 	this.screen_designed_width_rate <
//				this.screen_designed_height_rate ?
//				this.screen_designed_width_rate :
//				this.screen_designed_height_rate;
//	},
//	//全现实 背景用此适配模式
//	scaleRateNoBoard:function () {
//		return 	this.screen_designed_width_rate >
//				this.screen_designed_height_rate ?
//				this.screen_designed_width_rate :
//				this.screen_designed_height_rate;
//	},
//	//高适配， 宽拉伸
//	scaleRateByHeight:function () {
//		return this.screen_designed_height_rate;
//	},
//	//宽适配， 高拉伸
//	scaleRateByWidth:function () {
//		return this.screen_designed_width_rate;
//	}
//
//
//
//}