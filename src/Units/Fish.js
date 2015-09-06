/**
 * Created by wanght on 15/8/31.
 * @Author wanght
 * @Email whtoo@qq.com
 */
var Fish = cc.Sprite.extend({
    armature:null,
    type:null,
    speed:0,
    oldPosition:cc.p(0,0),
    draw:null,
    bound:null,
    isDead:false,
    ctor:function(type){
        this._super();
        this.type = type;

        this.armature = new ccs.Armature(GlobalVariables.fishConfig[type].ArmatureName);
        this.armature.getAnimation().playWithIndex(0);
        this.armature.anchorX = 0.5;
        this.armature.anchorY = 0.5;
        this.armature.setPosition(GlobalVariables.fishConfig[type].positionOffset);
        this.addChild(this.armature);

        this.bound = GlobalVariables.fishConfig[this.type].bounding;
        //this.drawCircle();
        //this.drawCollision();


        this.scheduleUpdate();
    },
    destroy:function(playDeathAnimation){
        if(playDeathAnimation){
            this.armature.getAnimation().playWithIndex(1);
            var self = this;
            this.armature.getAnimation().setMovementEventCallFunc(function(armature, movementType, movementID) {
                if (movementType == ccs.MovementEventType.complete){
                    self.removeFromParent();
                }

            });
        }else{
            this.removeFromParent();
        }
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
        var position = FitSolution.screenToDesigned(this.getPosition());
        for(var i = 0; i < this.bound.length; i++){
            var b = this.bound[i];
            var p = cc.pRotateByAngle(cc.pAdd(b.p,position ) , position,cc.degreesToRadians(-this.rotation)  );
            array.push({p:p,r:b.r});
        }
        return array;
    },
    update:function(dt){
        //this.drawCollision();
    }
})