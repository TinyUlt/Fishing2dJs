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


    return cc.Layer.extend({
        loadingsceneNode:null,

        preLoadingFileCurrentCount:0,
        preLoadingAramtureCurrentCount:0,
        ctor: function () {
            //////////////////////////////
            // 1. super init first
            this._super();

            var loadingscene = ccs.load(LoadingScene_json);
            this.addChild(loadingscene.node);

            FitSolution.init(GlobalVariables.designWidth, GlobalVariables.designHeight);
            FitSolution.fitUI(loadingscene.node,GlobalVariables.loadingSceneNeedFit);
            this.loadingsceneNode = loadingscene.node;

            this.schedule(this.preFileUpdate);
            //this.schedule(this.loadingAramtureUpdate);
            //this.scheduleUpdate();

            //cc.log(GlobalVariables.AllPreLoadFile.length);
        },
        preFileUpdate:function(dt){
            if(this.preLoadingFileCurrentCount >= GlobalVariables.AllPreLoadFile.length){
                this.unschedule(this.preFileUpdate);
                this.schedule(this.loadingAramtureUpdate);
                return;
            }

            cc.loader.load(GlobalVariables.AllPreLoadFile[this.preLoadingFileCurrentCount]);

            this.preLoadingFileCurrentCount++;
            var label = ccui.helper.seekWidgetByName(this.loadingsceneNode, "Text_File");
            label.setString("Loading file percent : " + (((this.preLoadingFileCurrentCount )/GlobalVariables.AllPreLoadFile.length).toFixed(2) * 100)+"%");
        },
        loadingAramtureUpdate:function(dt){

            if(this.preLoadingAramtureCurrentCount >= GlobalVariables.AllExportJson.length){
                this.unschedule(this.loadingAramtureUpdate);
                this.loadingDoen();
                return;
            }
            ccs.armatureDataManager.addArmatureFileInfo(GlobalVariables.AllExportJson[this.preLoadingAramtureCurrentCount]);
            this.preLoadingAramtureCurrentCount++;
            var label = ccui.helper.seekWidgetByName(this.loadingsceneNode, "Text_ArmatureLoading");
            label.setString("Loading fish percent : " + (((this.preLoadingAramtureCurrentCount )/GlobalVariables.AllExportJson.length).toFixed(2) * 100)+ "%");
        },
        loadingDoen:function(){
            //if(this.preLoadingArmatureDone == true && this.preLoadingArmatureDone == true){
                cc.loader.load(GameScene_json,function(){cc.log("ok")},function(){cc.director.runScene(new GameScene())});
            //}
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