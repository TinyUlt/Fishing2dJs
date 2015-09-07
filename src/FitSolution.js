(function(_G){
	var resolutionSize = cc.size(0,0);
	var design_width_height_rate = 1.0;
	var	screen_designed_width_rate = 1;
	var	screen_designed_height_rate = 1;
	var UIFitType = {
			UnKown:0,
			ShowAll:1,
			NoBoard:2,
			ByHeight:3,
			ByWidth:4,
			AllFit:5
	};

	function init(designWidth, designHeight){
		resolutionSize = cc.size(designWidth, designHeight);
		cc.log(resolutionSize);
		design_width_height_rate = designWidth / designHeight;
		var screenSize = cc.view.getFrameSize();
		var rate = 2;
		if(screenSize.width / screenSize.height > design_width_height_rate * rate){
			screenSize.width = design_width_height_rate * rate * screenSize.height;
		}
		if(screenSize.width / screenSize.height < design_width_height_rate / rate){
			screenSize.height = screenSize.width / design_width_height_rate * rate ;
		}
		cc.view.setDesignResolutionSize(screenSize.width, screenSize.height, cc.ResolutionPolicy.SHOW_ALL);

		setScreen_designed_rate(screenSize, new cc.size(designWidth, designHeight));
	};
	function getResolutionSize(){
		return resolutionSize;
	}
	function fitUI(node, config){

		var screenSize = cc.director.getWinSize();
		node.setContentSize(screenSize);
		ccui.helper.doLayout(node);

		for(var i = 0; i < config.length; i++){

			ccui.helper.seekWidgetByName(node, config[i].name).scale = getRateByUIFitType(config[i].type);
		}

	}
	function setScreen_designed_rate(screenSize, designedSize){
		screen_designed_width_rate = screenSize.width / designedSize.width;
		screen_designed_height_rate = screenSize.height / designedSize.height;
	};
	function getRateByUIFitType(type){
		switch (type){
			case UIFitType.UnKown:
			{
				break;
			}
			case UIFitType.ShowAll:
			{
				return scaleRateShowAll();
				break;
			}
			case UIFitType.NoBoard:
			{
				return scaleRateNoBoard();
				break;
			}
			case UIFitType.ByHeight:
			{
				return scaleRateByHeight();
				break;
			}
			case UIFitType.ByWidth:
			{
				return scaleRateByWidth();
				break;
			}
		}
	}
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
	//设计尺寸转屏幕尺寸
	function designedToScreen(point){
		return cc.p(point.x * screen_designed_width_rate, point.y * screen_designed_height_rate);
	}
	function screenToDesigned(point){
		return cc.p(point.x / screen_designed_width_rate, point.y / screen_designed_height_rate)
	};
	function setCSBPosition(layout, position){
		var cloneComponent = ccui.LayoutComponent.bindLayoutComponent(layout);
		cloneComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.LEFT);
		cloneComponent.setPositionPercentXEnabled(true);
		cloneComponent.setPositionPercentYEnabled(true);
		var p = designedPointToPercent(position);
		cloneComponent.setPositionPercentX(p.x);
		cloneComponent.setPositionPercentY(p.y);
	};
	function designedPointToPercent(point){
		var x = point.x / resolutionSize.width;
		var y = point.y / resolutionSize.height;
		return cc.p(x,y);
	}

	_G.FitSolution = {

		UIFitType:UIFitType,
		init:init,
		fitUI:fitUI,
		scaleRateShowAll:scaleRateShowAll,
		scaleRateNoBoard:scaleRateNoBoard,
		scaleRateByHeight:scaleRateByHeight,
		scaleRateByWidth:scaleRateByWidth,
		designedToScreen:designedToScreen,
		screenToDesigned:screenToDesigned,
		getResolutionSize:getResolutionSize,
		setCSBPosition:setCSBPosition,
		designedPointToPercent:designedPointToPercent
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