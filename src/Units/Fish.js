/**
 * Created by wanght on 15/8/31.
 * @Author wanght
 * @Email whtoo@qq.com
 */
var Fish = cc.Sprite.extend({
    type:null,
    speed:0,
    oldPosition:cc.p(0,0),
    draw:null,
    bound:null,
    isDead:false,
    ctor:function(type){
        this._super();
        this.type = type;

        var armature = new ccs.Armature(GlobalVariables.fishConfig[type].ArmatureName);
        armature.getAnimation().playWithIndex(0);
        armature.anchorX = 0.5;
        armature.anchorY = 0.5;
        this.addChild(armature);

        this.bound = GlobalVariables.fishConfig[this.type].bounding;
        //this.drawCircle();
        //this.drawCollision();


        this.scheduleUpdate();
    },
    setProperty:function(position){

        var newPosition = FitSolution.designedToScreen(position);
        this.setPosition(newPosition);
        //cc.log(FitSolution.scaleRateShowAll);
        this.setScale(FitSolution.scaleRateShowAll());

        var a = cc.pSub(this.oldPosition,newPosition);
        var b = cc.radiansToDegrees(Math.atan2(a.x, a.y));
        if(b != 0){
            this.setRotation(b + 90);
        }
        this.oldPosition = newPosition;
    },
    drawCircle:function(){
        for(var i = 0; i < bound.length; i++){
            var b = this.bound[i];
            var draw = new cc.DrawNode();
            this.addChild(draw, 10);
            draw.drawCircle(b.p, b.r, 0, 10, false, 1, cc.color(0, 255, 0, 255));
        }

    },
    drawCollision:function(){
        for(var i = 0; i < this.bound.length; i++){
            var b = this.bound[i];
            this.draw = new cc.DrawNode();

            GlobalVariables.currentGameLayer.addChild(this.draw, 10);
            var p = cc.pRotateByAngle(cc.pAdd(b.p,this.getPosition() ) , this.getPosition(),cc.degreesToRadians(-this.rotation)  );
            this.draw.drawCircle(p, b.r, 0, 10, false, 1, cc.color(0, 255, 0, 255));
            this.draw.runAction(cc.sequence(cc.delayTime(0),cc.removeSelf()));
        }

    },
    getCollisionBound:function(){
        var array = new Array();
        for(var i = 0; i < this.bound.length; i++){
            var b = this.bound[i];
            GlobalVariables.currentGameLayer.addChild(this.draw, 10);
            var p = cc.pRotateByAngle(cc.pAdd(b.p,this.getPosition() ) , this.getPosition(),cc.degreesToRadians(-this.rotation)  );
            array.push({p:p,r:b.r});
        }
        return array;
    },
    update:function(dt){
        //this.drawCollision();
    }
})