/**
 * Created by tinyult on 15/9/6.
 */
function CollisionManager(){
    this.update = function(){
        for(var j = 0; j < GlobalVariables.currentBulletManager.bulletArray.length; j ++){
            var bullet = GlobalVariables.currentBulletManager.bulletArray[j];
            var bulletPosition = FitSolution.screenToDesigned(bullet.getPosition());
            for(var i = 0; i < GlobalVariables.currentFishManager.fishArray.length; i ++){
                var fish = GlobalVariables.currentFishManager.fishArray[i];
                var boundArray = fish.getCollisionBound();
                for(var k = 0; k < boundArray.length; k ++){
                    var bound = boundArray[k];
                    var distance = cc.pDistance(bound.p, bulletPosition);
                    if(distance < bound.r){
                        cc.log("hit");
                        GlobalVariables.currentSwimManager.destroySwim(fish);
                        GlobalVariables.currentFishManager.destroyFish(fish, true);
                        GlobalVariables.currentBulletManager.destroyBullet(bullet);
                    }
                }
            }
        }
    }

}