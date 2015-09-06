/**
 * Created by wanght on 15/8/31.
 * @Author wanght
 * @Email whtoo@qq.com
 */
function SwimManager(){
    this.swimArray = new Array();
    this.setFishSwim = function(fish, swim){
        swim.setTarget(fish);
        this.swimArray.push(swim);
    };
    this.update = function(dt){
        for(var i = 0 ; i < this.swimArray.length; i ++){
            var swim = this.swimArray[i];
            if(swim.update(dt)){//继续

            }else{//结束
                //swim.target.removeFromParent(true);
                GlobalVariables.managers.currentFishManager.destroyFish(swim.target, false);
                this.swimArray.splice(i,1);
            }
        }

    };
    this.destroySwim = function(fish){
        for(var i = 0; i < this.swimArray.length; i++){
            var swimAction = this.swimArray[i];
            if(swimAction.target == fish){
                this.swimArray.splice(i,1);
            }
        }
    };
}