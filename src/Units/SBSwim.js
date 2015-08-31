/**
 * Created by wanght on 15/8/31.
 * @Author wanght
 * @Email whtoo@qq.com
 */
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
                cc.log("drawPosition.x = " + drawPosition.x + "-- drawPosition.y = "+ drawPosition.y);
                this.linePointArray.push(drawPosition);
            }
        }while(1)
        cc.log(this.linePointArray);
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
                        this.velocity = cc.pSub(this.velocity,  speed);
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
        steering = cc.pMult(steering,  1.0 / mass) ;

        this.velocity =cc.pAdd(steering , this.velocity) ;
        this.pathPoint.point = cc.pAdd(position, this.velocity);
        this.pathPoint.isDone = false;
        return;
    }

}