/**
 * Created by tinyult on 15/9/2.
 */
function BulletManager(){
    this.bulletArray = new Array();
    this.createBullet = function(bulletData){
        var bullet = new Bullet(bulletData);
        this.bulletArray.push(bullet);
        return bullet;
    }
    this.destroyBullet = function(bullet){
        for(var i = 0; i < this.bulletArray.length; i++){
            if(bullet == this.bulletArray[i]){
                this.bulletArray.splice(i,1);
                bullet.removeFromParent(true);
                break;
            }
        }
    }
}