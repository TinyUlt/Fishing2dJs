/**
 * Created by wanght on 15/8/31.
 * @Author wanght
 * @Email whtoo@qq.com
 */


//var LoadingLayer = cc.Layer.extend({
//    //loadingsceneNode : null,
//    //onEnter:function(){
//    //    this._super();
//    //    var armatureDataManager = ccs.armatureDataManager;
//    //    cc.log("123");
//    //    cc.log(GlobalVariables.fishConfig);
//    //    for(var i = 0 ; i < GlobalVariables.fishConfig.length; i++){
//    //        var fishObj = GlobalVariables.fishConfig[i];
//    //        cc.log(fishObj.filePath);
//    //        armatureDataManager.addArmatureFileInfoAsync(fishObj.filePath, this.dataLoaded,  this);
//    //    }
//    //
//    //},
//    ctor: function () {
//        this._super();
//
//
//        //var armatureDataManager = ccs.armatureDataManager;
//        cc.log("123");
//
//
//
//        //cc.loader.load("Resources/res/LoadingScene.json",function(){cc.log("ok1")},function(){cc.log("ok")});
//        this.scheduleUpdate();
//        cc.log("111");
//        //for(var i = 0 ; i < GlobalVariables.fishConfig.length; i++){
//        //    var fishObj = GlobalVariables.fishConfig[i];
//        //    //cc.log(fishObj.filePath);
//        //    cc.loader.load(fishObj.ExportJsonPath);
//        //    armatureDataManager.addArmatureFileInfoAsync(fishObj.ExportJsonPath, this.dataLoaded,  this);
//        //}
//
//    },
//    update:function(dt){
//        //var loadingscene = ccs.load(res.LoadingScene_json);
//        //this.addChild(loadingscene.node);
//        //
//        //FitSolution.init(GlobalVariables.designWidth, GlobalVariables.designHeight);
//        //FitSolution.fitUI(loadingscene.node,GlobalVariables.loadingSceneNeedFit);
//        //
//        //this.loadingsceneNode = loadingscene.node;
//        cc.log("s ok");
//    },
//    //dataLoaded: function (percent) {
//    //    cc.log("percent:" + percent);
//    //    var label = ccui.helper.seekWidgetByName(this.loadingsceneNode, "Text_Loading");
//    //    label.setString("current percent : " + (percent.toFixed(2) * 100));
//    //    if (percent >= 1) {
//    //        //this.setMenuItemEnabled(true);
//    //    }
//    //}
//
//})
//var LoadingScene = cc.Scene.extend({
//    onEnter:function(){
//        this._super;
//        var layer = new LoadingLayer();
//        this.addChild(layer);
//    }
//
//})

var LoadingLayer = (function(){

    var ArmatureCurrentCount = 0;

    return cc.Layer.extend({
        loadingsceneNode:null,
        allResCount:null,
        ctor: function () {
            //////////////////////////////
            // 1. super init first
            this._super();

            var loadingscene = ccs.load(LoadingScene_json);
            this.addChild(loadingscene.node);

            FitSolution.init(GlobalVariables.designWidth, GlobalVariables.designHeight);
            FitSolution.fitUI(loadingscene.node,GlobalVariables.loadingSceneNeedFit);
            this.loadingsceneNode = loadingscene.node;

            this.scheduleUpdate();
            allResCount = GlobalVariables.fishConfig.length * 4;
        },
        update:function(dt){
            cc.log("qwe");
            if(ArmatureCurrentCount < GlobalVariables.fishConfig.length){
                var fishObj = GlobalVariables.fishConfig[ArmatureCurrentCount];
                cc.loader.load(fishObj.ExportJsonPath);
                ArmatureCurrentCount++;
                var label = ccui.helper.seekWidgetByName(this.loadingsceneNode, "Text_Loading");
                label.setString("current percent : " + ((ArmatureCurrentCount )/allResCount.toFixed(2) * 100));

            }else if(ArmatureCurrentCount < GlobalVariables.fishConfig.length * 2){
                var fishObj = GlobalVariables.fishConfig[ArmatureCurrentCount - GlobalVariables.fishConfig.length * 1];
                cc.loader.load(fishObj.PlistPath);

                ArmatureCurrentCount++;
                var label = ccui.helper.seekWidgetByName(this.loadingsceneNode, "Text_Loading");
                label.setString("current percent : " + ((ArmatureCurrentCount )/allResCount.toFixed(2) * 100));

            } else if(ArmatureCurrentCount < GlobalVariables.fishConfig.length * 3){
                var fishObj = GlobalVariables.fishConfig[ArmatureCurrentCount - GlobalVariables.fishConfig.length*2];
                cc.loader.load(fishObj.PngPath);

                ArmatureCurrentCount++;
                var label = ccui.helper.seekWidgetByName(this.loadingsceneNode, "Text_Loading");
                label.setString("current percent : " + ((ArmatureCurrentCount )/allResCount.toFixed(2) * 100));

            }else  if(ArmatureCurrentCount < GlobalVariables.fishConfig.length * 4){
                var fishObj = GlobalVariables.fishConfig[ArmatureCurrentCount - GlobalVariables.fishConfig.length*3];
                var armatureDataManager = ccs.armatureDataManager;
                armatureDataManager.addArmatureFileInfo(fishObj.ExportJsonPath);
                var label = ccui.helper.seekWidgetByName(this.loadingsceneNode, "Text_Loading");
                ArmatureCurrentCount++;
                label.setString("current percent : " + ((ArmatureCurrentCount )/allResCount.toFixed(2) * 100));
            }
            else{
                this.unschedule();
                cc.loader.load(GameScene_json,function(){cc.log("ok")},function(){cc.director.runScene(new GameScene())});

            }
        }
    })


})();

var LoadingScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new LoadingLayer();
        this.addChild(layer);
    }
});