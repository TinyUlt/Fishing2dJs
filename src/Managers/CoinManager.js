/**
 * Created by tinyult on 15/9/6.
 */
function CoinManager(){
    this.getCoins = function(fish, value, chairID){
        var coinArray = new Array();
        var fishType = fish.type;

        var endPoint = FitSolution.designedToScreen(cc.p(GlobalVariables.kGunPos[chairID].x, GlobalVariables.kGunPos[chairID].y))
        if(fishType <= GlobalVariables.fishKind.FISH_HUANGCAOYU){
            for(var i = 0; i < 5; i ++){

                var coin = this.getScatteredCoin(endPoint);
                var randomH = (Math.random() * 200 - 100 ) * FitSolution.scaleRateShowAll();
                var randomV = (Math.random() * 100 - 50 ) * FitSolution.scaleRateShowAll();
                coin.setPosition(cc.pAdd(fish.getPosition(),cc.p(randomH, randomV) )  );
                coinArray.push(coin) ;

                coin.chairID = chairID;
                if(i == 0) coin.value = value;
            }
        }else if(fishType < GlobalVariables.fishKind.FISH_XIAOCHOUYU){
            for(var i = 0; i < 1; i++){
                //coinArray.push(this.getScatteredCoin()) ;
            }
        }else{
            for(var i = 0; i < 1; i++){
                //coinArray.push(this.getScatteredCoin()) ;
            }
        }

        return coinArray;
    };
    this.getScatteredCoin = function(endPoint){
        var coin = new Coin();
        var random = Math.random() * 0.2 + 0.7;
        coin.setScale(0);
        coin.runAction(
                cc.sequence(cc.moveBy(0.5, cc.p(0,170 * FitSolution.scaleRateShowAll())).easing(cc.easeSineOut()),
                cc.moveBy(1.3, cc.p(0,-120* FitSolution.scaleRateShowAll())).easing(cc.easeBounceOut()),
                cc.jumpTo(random, endPoint, 150* FitSolution.scaleRateShowAll(), 1),
                    cc.callFunc(this.coinActionDone, this)
            ));
        coin.runAction(cc.scaleTo(0.3,FitSolution.scaleRateShowAll()));

        return coin;
    };
    this.coinActionDone = function(pSender){
        cc.log(pSender.value);
        GlobalVariables.managers.currentPlayerManager.addFishCoin(pSender.chairID,pSender.value);
        pSender.removeFromParent();
    }
}