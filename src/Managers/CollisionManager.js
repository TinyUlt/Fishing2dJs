/**
 * Created by tinyult on 15/9/6.
 */
function CollisionManager(){
    this.update = function(){
        for(var j = 0; j < GlobalVariables.managers.currentBulletManager.bulletArray.length; j ++){
            var bullet = GlobalVariables.managers.currentBulletManager.bulletArray[j];
            var bulletPosition = FitSolution.screenToDesigned(bullet.getPosition());
            for(var i = 0; i < GlobalVariables.managers.currentFishManager.fishArray.length; i ++){
                var fish = GlobalVariables.managers.currentFishManager.fishArray[i];
                var boundArray = fish.getCollisionBound();
                for(var k = 0; k < boundArray.length; k ++){
                    var bound = boundArray[k];
                    var distance = cc.pDistance(bound.p, bulletPosition);
                    if(distance < bound.r){
                        GlobalVariables.managers.currentSwimManager.destroySwim(fish);
                        GlobalVariables.managers.currentFishManager.destroyFish(fish, true);
                        GlobalVariables.managers.currentBulletManager.destroyBullet(bullet);

                        var coins = GlobalVariables.managers.currentCoinManager.getCoins( fish ,10, GlobalVariables.TestChairID  );
                        for(var i = 0 ; i < coins.length; i ++){
                            var coin = coins[i];
                            GlobalVariables.currentGameLayer.UILayers.coin.addChild(coin);
                        }
                    }
                }
            }
        }
    }

}