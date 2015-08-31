/**
 * Created by wanght on 15/8/31.
 * @Author wanght
 * @Email whtoo@qq.com
 */
function FishManager(){
    this.fishArray = new Array();
    this.createFish = function(type){
        var fish = new Fish(type);
        this.fishArray.push(fish);

        fish.speed = 200;
        return fish;
    }
}