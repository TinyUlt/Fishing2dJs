/**
 * Created by tinyult on 15/9/6.
 */
function Player(chairID, CannonTower){
    this.chairID = chairID;
    this.GunBarrel = ccui.helper.seekWidgetByName(CannonTower, "Panel_GunBarrel");

    this.setGaunBarrelAngle = function(point){
        var localPosition =FitSolution.designedToScreen(cc.p(GlobalVariables.kGunPos[this.chairID].x, GlobalVariables.kGunPos[this.chairID].y))  ;
        var angle = cc.radiansToDegrees(Math.atan2((point.x-localPosition.x), (point.y- localPosition.y)));
        this.GunBarrel.setRotation(angle);
    }
}