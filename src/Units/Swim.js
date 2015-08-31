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
    this.linePointArray = new Array();
    this.target = null;
    this.setTarget = function(target){
        this.target = target;
    }
    this.createPath = function(){

    }
    this.update = function(){

    }

}