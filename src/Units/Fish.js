/**
 * Created by wanght on 15/8/31.
 * @Author wanght
 * @Email whtoo@qq.com
 */
var Fish = cc.Sprite.extend({
    speed:0,
    oldPosition:cc.p(0,0),
    ctor:function(type){
        this._super();

        var armature = new ccs.Armature(GlobalVariables.fishConfig[type].ArmatureName);
        armature.getAnimation().playWithIndex(0);
        armature.anchorX = 0.5;
        armature.anchorY = 0.5;
        this.addChild(armature);
    },
    setProperty:function(position){

        var newPosition = FitSolution.designedToScreen(position);
        this.setPosition(newPosition);
        //this.setScale(FitSolution.scaleRateShowAll);


        var a = cc.pSub(this.oldPosition,newPosition);
        var b = cc.radiansToDegrees(Math.atan2(a.x, a.y));
        if(b != 0){
            this.setRotation(b + 90);
        }
        this.oldPosition = newPosition;
    }
})