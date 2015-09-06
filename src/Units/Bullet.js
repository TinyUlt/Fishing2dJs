/**
 * Created by tinyult on 15/9/2.
 */
var Bullet = ccs.Armature.extend({
    data:null,
    pastTime:0,
    startPoint:cc.p(0,0),
    data:null,
    //{
    // type:GlobalVariables.bulletKind.bullet1,
    // bulletID : 0,
    // charID : 0,
    // startPoint : cc.p(0,0),
    // endPoint : cc.p(0,0),
    // pastTime : 0,
    // multiple : 0,
    // speed : 300,
    // lockID : null,
    // deleteTime : 0,
    // lockFish : null
    // },

    dp:cc.p(0,0),
    ctor:function(bulletData){
        this._super();
        this.init("zidan1");
        this.getAnimation().playWithIndex(0);

        this.data = bulletData;
        this.dp = cc.pSub(this.data.endPoint , this.data.startPoint);
        var deg = Math.atan2(this.dp.x, this.dp.y);
        /*如果加上炮台长度
         var weanponLenth = 0;
         var x = Math.sin(deg) * weanponLenth;
         var y = Math.cos(deg) * weanponLenth;
         var startPoint = cc.pAdd(this.data.startPoint , cc.p(x,y));
         * */

        var pastX = Math.sin(deg) * (this.data.speed * this.data.pastTime);
        var pastY = Math.cos(deg) * (this.data.speed * this.data.pastTime);

        this.startPoint = cc.pAdd( this.data.startPoint, cc.p(pastX, pastY));
        this.setPosition(FitSolution.designedToScreen(this.startPoint));
        this.setScale(FitSolution.scaleRateShowAll());
        this.schedule(this.updateBullet);

    },
    updateBullet:function(dt){
        this.pastTime += dt;

        if(this.data.deleteTime > 0 && this.pastTime >= this.data.deleteTime){
            if(this.data.lockFish.isDead){
                this.data.deleteTime = -1
            }else{
                //needAdd

                return;
            }
        }


        var left = 0;
        var right = FitSolution.getResolutionSize().width;
        var bottom = 0;
        var up = FitSolution.getResolutionSize().height;
        var position = FitSolution.screenToDesigned(this.getPosition());
        var dp = FitSolution.designedToScreen(this.dp);
        var deg = cc.radiansToDegrees(Math.atan2(dp.x, dp.y));
        this.setRotation(deg);
        deg = Math.atan2(this.dp.x, this.dp.y);
        var x = Math.sin(deg) * this.data.speed * dt;
        var y = Math.cos(deg) * this.data.speed * dt;

        cc.pAddIn(position , cc.p(x,y));

        if(position.x > right){
            position.x = right * 2 - position.x;
            this.dp.x = -this.dp.x;
            this.touchEge();
        }else if(position.x < left){
            position.x = left * 2 - position.x;
            this.dp.x = -this.dp.x;
            this.touchEge();
        }else if(position.y >= up){
            position.y = up * 2 - position.y;
            this.dp.y = -this.dp.y;
            this.touchEge();
        }else if(position.y < bottom){
            position.y = bottom * 2 - position.y;
            this.dp.y = -this.dp.y;
            this.touchEge();
        }
        this.setPosition(FitSolution.designedToScreen(position));
        this.setScale(FitSolution.scaleRateShowAll());
    },
    touchEge:function(){

    }
})