/**
 * Created by tinyult on 15/9/6.
 */
var Coin = ccs.Armature.extend({
    value : 0,
    chairID : null,
    ctor:function(){
        this._super();
        this.init("jinbi1");
        this.getAnimation().playWithIndex(0);

    }
})