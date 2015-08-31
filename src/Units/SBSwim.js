/**
 * Created by wanght on 15/8/31.
 * @Author wanght
 * @Email whtoo@qq.com
 */

function createRandomPath (){
    var array = new Array();
    array.push(this.createOutTrunPoint());
    array.push(this.createInTurnPoint());
    array.push(this.createInTurnPoint());
    array.push(this.createInTurnPoint());
    array.push(this.createOutTrunPoint());

    return array;
}
function createOutTrunPoint(){
    var x = 0;
    var y = 0;
    var offset = 200;
    var r =Math.floor( Math.random()* 4);
    switch(r){
        case 0:{
            x = -offset;
            y = Math.random()* (GlobalVariables.designHeight + offset * 2) - offset;

            break;
        }
        case 1:{
            x = GlobalVariables.designWidth + offset;
            y = Math.random()* (GlobalVariables.designHeight + offset * 2) - offset;
            break;
        }
        case 2:{
            y = -offset;
            x = Math.random()* (GlobalVariables.designWidth + offset * 2) - offset;
            break;
        }
        case 3:{
            y = GlobalVariables.designHeight + offset;
            x = Math.random()* (GlobalVariables.designWidth + offset * 2) - offset;
            break;
        }
        default :{
            x = 0;
            y = 0;
            break;
        }
    }

    return cc.p(x, y);
}
function createInTurnPoint(){
    var magin = 100;
    var x = Math.random() * (GlobalVariables.designWidth - 2 * magin) + magin;
    var y = Math.random() * (GlobalVariables.designHeight - 2 * magin) + magin;

    return cc.p(x, y);
}
function SBSwim(turnPoints, isSpeedBehaviors, elapsed){
    Swim.call(this);
    this.velocity = cc.p(0,0);
    this.turnPoints = turnPoints;
    this.turnIndex = 0;
    this.startPoint = this.turnPoints[this.turnIndex];
    this.turnIndex ++;
    this.isSpeedBehaviors = isSpeedBehaviors;
    this.allPastTime = elapsed;

    this.createPath = function(){
        var drawPosition = this.startPoint;

        do{
            this.steeringUpdate(GlobalVariables.swimTimeDt, drawPosition);
            if(this.pathPoint.isDone){
                break;
            }else{
                drawPosition = this.pathPoint.point;
                //cc.log("drawPosition.x = " + drawPosition.x + "-- drawPosition.y = "+ drawPosition.y);
                this.linePointArray.push(drawPosition);
            }
        }while(1)
        //cc.log(this.linePointArray);
        this.velocity = cc.p(0,0);
        this.turnIndex = 0;
        this.turnIndex++;
    };
    this.setTarget = function(target){
        this.target = target;
        this.createPath();
    };
    this.steeringUpdate = function(dt, position){
        var mass = 100.0;

        var length = cc.pDistance(position, this.turnPoints[this.turnIndex]);
        if(this.isSpeedBehaviors){
            if(length < 300){
                if(length < 50){
                    this.turnIndex ++;
                    if(this.turnPoints.length == this.turnIndex){
                        this.pathPoint.isDone = true;
                        return ;//this.pathPoint;
                    }

                }else{
                    var downSpeed = 300 - length;
                    var normalized = cc.pNormalize(this.velocity);
                    var speed =cc.pMult(normalized, downSpeed / 800.0)  ;
                    if(cc.pLength(this.velocity) > 3 &&  cc.pLength(this.velocity) > cc.pLength(speed)){
                        cc.pSubIn(this.velocity,  speed);
                    }
                }
            }
        }else{
            if(length < 100){
                this.turnIndex++;
                if(this.turnPoints.length == this.turnIndex){
                    this.pathPoint.isDone = true;
                    return ;
                }
            }
        }

        var desireVelocity =cc.pMult(cc.pNormalize(cc.pSub( this.turnPoints[this.turnIndex] , position)),this.target.speed * dt) ;
        var steering =cc.pSub(desireVelocity, this.velocity) ;
        cc.pMultIn(steering,  1.0 / mass) ;

        cc.pAddIn(this.velocity, steering ) ;
        this.pathPoint.point = cc.pAdd(position, this.velocity);
        this.pathPoint.isDone = false;
        return;
    }


}