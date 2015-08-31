/**
 * Created by wanght on 15/8/31.
 * @Author wanght
 * @Email whtoo@qq.com
 */

function Swim(){
    this.pathPoint = {
        isDone:false,
        point:cc.p(0,0),
    }
    this.type = GlobalVariables.SwimType.UnKnow;
    this.allPastTime = 0;
    this.linePointIndex = 0;
    this.oldLinePointIndex = 0;
    this.linePointArray = new Array();
    this.target = null;
    this.setTarget = function(target){
        this.target = target;
    }
    this.createPath = function(){

    }
    this.update = function(dt){
        this.allPastTime +=dt;
        var index_f = this.allPastTime / GlobalVariables.swimTimeDt;
        var index = index_f;
        var indexOffset = index_f - index;

        this.linePointIndex =Math.floor(index + this.oldLinePointIndex) ;
        var nextPoint = this.linePointIndex + 1;
        if(nextPoint >= this.linePointArray.length-1){
            nextPoint = this.linePointArray.length - 1;
        }
        if(this.linePointIndex >= this.linePointArray.length){
            return false;
        }
        //cc.log(this.linePointIndex);
        var m1 =cc.pMult(this.linePointArray[this.linePointIndex] , (1 - indexOffset));
        var m2 = cc.pMult( this.linePointArray[nextPoint] , indexOffset);
        var point =cc.pAdd(m1,m2 );

        this.target.setProperty(point);


        return true;
    }


}