/*
1.把鱼绘制出来

 */
 /** 适配说明
  * 1.cocostudio中让层进行缩放适配, 当窗口缩放时, 层也的尺寸会进行缩放
  * 2.当第一种情况发生时, 如果层中的容器不进行位置适配, 则位置不变.
  * 3.当第一种情况发生时, 如果层中的容器进行位置适配, 则位置会根据比例适配.
  * 3.当第一种情况发生时, 如果层中的容器不进行缩放适配, 则尺寸不变.
  * 4.当第一种情况发生时, 如果层中的容器进行缩放适配, 则尺寸会根据比例适配.
  * 5.当第一种情况发生时, 如果层中的容器进行位置和缩放适配, 则位置和尺寸都会根据比例适配.
  * 6.当第一种情况发生时, 层中附加的图片尺寸不变.
  * 7.如果对容器进行缩放, 子容器也会缩放.
  * 
  * cocostudio做位置的适配, FitSolution做尺寸的适配.
  */
/**
 * 1.类 or 函数
 * function ClassA(sColor){
 * }
 * 类的继承
 * function ClassB(sColor){
 *      ClassA.call(this, sColor);
 * }
 *
 * 2.cocos2d 类
 * cc.Layer.extend({})
 *
 * 3.json格式 的一个对象
 * var FitSolution = {}
 *
 * 4.数组
 * var myArray=new Array()
 */
/*
    function ClassA(){
        cc.log("classA");//立马执行
        var value1 = 1;//犹如私有变量，每个对象维持着自己的变量, 但是不能被继承
        this.value2 = 2;//只有new出的ClassA才有this， 公有变量， 能被继承

        (function func0(par){//一个必包， 立马执行
            cc.log("func0"+ par);
        })(value1);
        function func1(){//一个必包，不会立马执行
            cc.log("func1");
        }
        func1();//执行必包
        this.func2 = func1;//如果想让外部调用，必须用this
        this.func3 = function(){//匿名函数
            cc.log("func3");
        }
        this.func4 = function func4(){
            cc.log("func4");
        };
        (function func5(){
            value1 +=10;//可以访问局部变量
            cc.log(value1);
        })()
        this.func6 = function(){
            value1 +=10;//可以访问局部变量
            cc.log(value1);
        }
    }
*/
var GameLayer = (function(){

     return cc.Layer.extend({
         sprite: null,
         UILayers:{
             fish:null,
             bullet:null,
             coin:null
         },
         ctor: function () {
             //////////////////////////////
             // 1. super init first
             this._super();

             //var B = ClassA();
             /////////////////////////////
             // 2. add a menu item with "X" image, which is clicked to quit the program
             //    you may modify it.
             // ask the window size


             var size = cc.winSize;
             cc.log(size.width);
             cc.log(size.height);


             //////////////////////////////////////

             var mainscene = ccs.load(GameScene_json);
             this.addChild(mainscene.node);

             FitSolution.init(GlobalVariables.designWidth, GlobalVariables.designHeight);
             FitSolution.fitUI(mainscene.node,GlobalVariables.gameSceneNeedFit);


             cc.view.setResizeCallback(function () {
                 FitSolution.init(GlobalVariables.designWidth, GlobalVariables.designHeight);
                 FitSolution.fitUI(mainscene.node,GlobalVariables.gameSceneNeedFit);
             });

             this.scheduleUpdate();


             GlobalVariables.currentGameLayer = this;
             GlobalVariables.managers.currentFishManager = new FishManager();
             GlobalVariables.managers.currentBulletManager =new BulletManager();
             GlobalVariables.managers.currentSwimManager =  new SwimManager();
             GlobalVariables.managers.currentPlayerManager = new PlayerManager();
             GlobalVariables.managers.currentCollisionManager = new CollisionManager();
             GlobalVariables.managers.currentCoinManager = new CoinManager();
             GlobalVariables.managers.currentUIControlManager = new UIContrrolManager(mainscene.node);
             this.schedule(this.createFish, 1);

             cc.eventManager.addListener({
                 event: cc.EventListener.TOUCH_ONE_BY_ONE,
                 swallowTouches: true,
                 onTouchBegan: this.onTouchBegan,
                 onTouchMoved: this.onTouchMoved,
                 onTouchEnded: this.onTouchEnded
             }, this);


             //var fish = this.fishManager.createFish(GlobalVariables.fishKind.FISH_JIANYU);
             //this.addChild(fish);
             //fish.x = 300;
             //fish.y = 400;
             this.UILayers.fish = ccui.helper.seekWidgetByName(mainscene.node, "Panel_Fish");
             this.UILayers.bullet = ccui.helper.seekWidgetByName(mainscene.node, "Panel_Bullet");
             this.UILayers.coin = ccui.helper.seekWidgetByName(mainscene.node, "Panel_Coin");
             //this.UILayers.bullet =

             var Panel_turret = ccui.helper.seekWidgetByName(mainscene.node, "Panel_turret"+GlobalVariables.TestChairID);
             var Panel_TowerConttrol = ccui.helper.seekWidgetByName(mainscene.node, "Panel_TowerConttrol");
             GlobalVariables.managers.currentPlayerManager.initPlayer(GlobalVariables.TestChairID, Panel_turret, Panel_TowerConttrol);

             //var coin = new Coin();
             //this.UILayers.coin.addChild(coin);
             //coin.x = 300;
             //coin.y = 400;


         },
         update:function(dt){

             GlobalVariables.managers.currentSwimManager.update(dt);
             GlobalVariables.managers.currentCollisionManager.update(dt);
         },
         createFish:function(dt){
             var fish = GlobalVariables.managers.currentFishManager.createFish(GlobalVariables.fishKind.FISH_HUANGCAOYU);
             this.UILayers.fish.addChild(fish);

             var swim = new SBSwim(createRandomPath(),true, 0);
             GlobalVariables.managers.currentSwimManager.setFishSwim(fish, swim);
         },
         onTouchBegan:function (touch, event) {
             var target = event.getCurrentTarget();
             var touchPoint = touch.getLocation();
             var endPoint = FitSolution.screenToDesigned(touchPoint);
             var startPoint =GlobalVariables.GunPos[GlobalVariables.TestChairID];
             var bullet = GlobalVariables.managers.currentBulletManager.createBullet({
                 type:GlobalVariables.bulletKind.bullet1,
                 bulletID:0,
                 chairID:0,
                 startPoint:startPoint,
                 endPoint:endPoint,
                 pastTime:0,
                 multiple:0,
                 speed:500,
                 lockID:0,
                 deleteTime:-1,
                 lockFish:null
             });

             target.UILayers.bullet.addChild(bullet);

             GlobalVariables.managers.currentPlayerManager.setGaunBarrelAngle(GlobalVariables.TestChairID,touchPoint);
             return true;
         },
         onTouchMoved:function (touch, event) {
             var target = event.getCurrentTarget();
             var touchPoint = touch.getLocation();
         },
         onTouchEnded:function (touch, event) {
             var target = event.getCurrentTarget();
         },
     })

 })();

var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

