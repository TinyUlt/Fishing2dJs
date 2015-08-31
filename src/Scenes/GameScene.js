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
         Panel_help: null,
         swimManager:null,
         fishManager:null,
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

             this.swimManager = new SwimManager();

             this.fishManager = new FishManager();


             this.schedule(this.createFish, 1);

         },
         update:function(dt){
             //cc.log("qwe");
             this.swimManager.update(dt);
         },
         createFish:function(dt){
             var fish = this.fishManager.createFish(GlobalVariables.fishKind.FISH_WONIUYU);
             this.addChild(fish);

             var swim = new SBSwim(createRandomPath(),true, 0);
             this.swimManager.setFishSwim(fish, swim);
         }
     })


 })();

var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

