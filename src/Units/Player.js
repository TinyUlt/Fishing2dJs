/**
 * Created by tinyult on 15/9/6.
 */
function Player(chairID, CannonTower){
    this.chairID = chairID;
    this.fishCoin = 0;
    this.Panel_GunBarrel = ccui.helper.seekWidgetByName(CannonTower, "Panel_GunBarrel");
    this.Text_CoinShow = ccui.helper.seekWidgetByName(CannonTower, "Text_CoinShow");
    this.setGaunBarrelAngle = function(point){
        var localPosition =FitSolution.designedToScreen(cc.p(GlobalVariables.kGunPos[this.chairID].x, GlobalVariables.kGunPos[this.chairID].y))  ;
        var angle = cc.radiansToDegrees(Math.atan2((point.x-localPosition.x), (point.y- localPosition.y)));
        this.Panel_GunBarrel.setRotation(angle);
    };
    this.addFishCoin = function(value){
        this.fishCoin+=value;
        this.Text_CoinShow.setString(this.fishCoin);
    }
}