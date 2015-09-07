/**
 * Created by tinyult on 15/9/7.
 */
function UIContrrolManager(ccsNode){
    this.Button_AddFishCoin = ccui.helper.seekWidgetByName(ccsNode, "Button_AddFishCoin");
    this.Button_SubFishCoin = ccui.helper.seekWidgetByName(ccsNode, "Button_SubFishCoin");

    this.Button_AddFishCoin.addTouchEventListener(function(sender, type){
        if(type == ccui.Widget.TOUCH_ENDED){
            cc.log("click")
        }
    }, this);
    this.Button_SubFishCoin.addTouchEventListener(function(sender, type){
        if(type == ccui.Widget.TOUCH_ENDED){
            cc.log("click")
        }
    }, this);
}