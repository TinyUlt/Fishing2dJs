/**
 * Created by tinyult on 15/9/6.
 */
function PlayerManager(){
    this.playerArray = [];
    this.initPlayer = function(chairID, CannonTower){
        this.playerArray[chairID] = new Player(chairID, CannonTower);
    };
    this.setGaunBarrelAngle = function(chairID, point){
        this.playerArray[chairID].setGaunBarrelAngle(point);
    };
    this.addFishCoin = function(chairID, value){
        this.playerArray[chairID].addFishCoin(value);
    }
}