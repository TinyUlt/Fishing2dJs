/**
 * Created by wanght on 15/8/31.
 * @Author wanght
 * @Email whtoo@qq.com
 */
var Fish = cc.Sprite.extend({
    speed:0,
    ctor:function(type){
        this._super();

        var armature = new ccs.Armature(GlobalVariables.fishConfig[type].ArmatureName);
        armature.getAnimation().playWithIndex(0);
        armature.anchorX = 0.5;
        armature.anchorY = 0.5;
        this.addChild(armature);
    }
})