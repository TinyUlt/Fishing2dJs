(function(_G){

    var gameSceneNeedFit = [
    {name:"Panel_Background", type:FitSolution.UIFitType.NoBoard},
    {name:"Panel_turret5", type:FitSolution.UIFitType.ShowAll},

    ];
    var loadingSceneNeedFit = [];
    var i = 0;
    var fishKind = {
        FISH_WONIUYU : i,			// 蜗牛鱼
        FISH_LVCAOYU :++i,				// 绿草鱼
        FISH_HUANGCAOYU :++i,			// 黄草鱼
        FISH_DAYANYU :++i,				// 大眼鱼
        FISH_HUANGBIANYU :++i,			// 黄边鱼
        FISH_XIAOCHOUYU :++i,			// 小丑鱼
        FISH_XIAOCIYU :++i,				// 小刺鱼
        FISH_LANYU :++i,					// 蓝鱼7
        FISH_DENGLONGYU :++i,			// 灯笼鱼
        FISH_LVDENGYU :++i,				// 绿灯鱼
        FISH_HAIGUI :++i,				// 海龟
        FISH_HUABANYU :++i,				// 花斑鱼
        FISH_HUDIEYU	 :++i,			// 蝴蝶鱼
        FISH_KONGQUEYU :++i,				// 孔雀鱼
        FISH_JIANYU :++i,				// 剑鱼
        FISH_BIANFUYU :++i,				// 蝙蝠鱼
        //通用大鱼10 :++i,16-25
        FISH_YINSHA :++i,				// 银鲨
        FISH_JINSHA :++i,				// 金鲨
        FISH_BAWANGJING :++i,			// 霸王鲸
        FISH_MEIRENYU :++i,				// 美人鱼
        FISH_XIAOQINGLONG :++i,			// 小青龙
        FISH_XIAOYINLONG :++i,			// 小银龙
        FISH_XIAOJINLONG :++i,			// 小金龙
        FISH_JINCHAN :++i,				// 金蟾
        FISH_SHUANGTOUBWJ :++i,			// 双头霸王鲸
        FISH_CAOBAO :++i,				// 草包
        //通用多条鱼4 :++i,26-29
        FISH_LANBAN :++i,				// 篮板
        FISH_JINBAN :++i,				// 金板
        FISH_SANTIAO :++i,				// 三条
        FISH_SITIAO :++i,				// 四条
        //通用特殊鱼4 :++i,30-33
        FISH_RED :++i,					// 红鱼，死一条就死全部
        FISH_DHSZ :++i,					// 定海神针
        FISH_QPZD :++i,					// 全屏炸弹
        FISH_YUZHEN :++i,				// 鱼阵，停留红鱼，死后产生一圈圈鱼
        //渔王争霸1 :++i,34
        FISH_FUDONGFEN :++i,				// 浮动分
        //李逵劈海2 :++i,35-36
        FISH_LIKUI :++i,					// 李逵
        FISH_ZHONGYITANG :++i,			// 忠义堂
        //金蟾捕鱼2 :++i,37-38
        FISH_QPZD_JCBY :++i,				// 全屏炸弹jcby
        FISH_LVJINCHAN :++i,				// 绿金蟾
        //哪吒闹海2 :++i,39-40
        FISH_NEZHA :++i,				// 哪吒
        FISH_DHSZ_NZNH :++i,				// 定海神针nznh
        //东海争霸10 :++i,41-50
        FISH_YULEIJIAN :++i,				// 鱼雷舰
        FISH_ZHENCHAJI :++i,				// 侦察机
        FISH_JIANJIJI :++i,				// 歼击机
        FISH_HONGZHAJI :++i,				// 轰炸机
        FISH_XUNLUOJIAN :++i,			// 巡逻舰
        FISH_QUZHUJIAN :++i,				// 驱逐舰
        FISH_QIANSHUITING :++i,			// 潜水艇
        FISH_ZHANDOUJI :++i,				// 战斗机
        FISH_HUWEIJIAN :++i,				// 护卫舰
        FISH_HANGKONGMUJIAN :++i,		// 航空母舰
        //黄金圣斗士27 :++i,51-77
        FISH_HJSDS_NORMAL1 :++i,			//黄金圣斗士小鱼1
        FISH_HJSDS_NORMAL2 :++i,			//黄金圣斗士小鱼2
        FISH_HJSDS_NORMAL3 :++i,			//黄金圣斗士小鱼3
        FISH_HJSDS_NORMAL4 :++i,			//黄金圣斗士小鱼4
        FISH_HJSDS_NORMAL5 :++i,			//黄金圣斗士小鱼5
        FISH_HJSDS_NORMAL6 :++i,			//黄金圣斗士小鱼6
        FISH_HJSDS_NORMAL7 :++i,			//黄金圣斗士小鱼7
        FISH_HJSDS_NORMAL8 :++i,			//黄金圣斗士小鱼8
        FISH_HJSDS_NORMAL9 :++i,			//黄金圣斗士小鱼9
        FISH_HJSDS_NORMAL10 :++i,		//黄金圣斗士小鱼10
        FISH_HJSDS_NORMAL11 :++i,		//黄金圣斗士小鱼11
        FISH_HJSDS_NORMAL12 :++i,		//黄金圣斗士小鱼12
        FISH_HJSDS_NORMAL13 :++i,		//黄金圣斗士小鱼13
        FISH_HJSDS_NORMAL14 :++i,		//黄金圣斗士小鱼14
        FISH_HJSDS_NORMAL15 :++i,		//黄金圣斗士小鱼15
        FISH_HJSDS_NORMAL16 :++i,		//黄金圣斗士小鱼16
        FISH_HJSDS_NORMAL17 :++i,		//黄金圣斗士小鱼17
        FISH_HJSDS_BOSS18 :++i,			//黄金圣斗士大鱼18
        FISH_HJSDS_BOSS19 :++i,			//黄金圣斗士大鱼19
        FISH_HJSDS_BOSS20 :++i,			//黄金圣斗士大鱼20
        FISH_HJSDS_BOSS21 :++i,			//黄金圣斗士大鱼21
        FISH_HJSDS_BOSS22 :++i,			//黄金圣斗士大鱼22
        FISH_HJSDS_BOSS23 :++i,			//黄金圣斗士大鱼23，定屏
        FISH_HJSDS_BOSS24 :++i,			//黄金圣斗士大鱼24 :++i,全屏炸弹
        FISH_HJSDS_TYPE25 :++i,			//黄金圣斗士同类鱼25
        FISH_HJSDS_TEAMSAN26 :++i,		//黄金圣斗士三条26
        FISH_HJSDS_TEAMSI27 :++i,		//黄金圣斗士四条27
        //大闹天宫2 :++i,11 :++i,78-88
        FISH_SHENXIANCHUAN :++i,			// 神仙船
        FISH_SWK :++i,					// 孙悟空
        FISH_YUWANGDADI :++i,			// 玉皇大帝
        FISH_FOSHOU :++i,				// 佛手
        FISH_BGLU :++i,					// 炼丹炉
        FISH_DNTG :++i,					// 大闹天宫 (FISH_WONIUYU-FISH_HAIGUI)
        FISH_YJSD :++i,					// 一箭双雕
        FISH_YSSN :++i,					// 一石三鸟
        FISH_QJF :++i,					// 全家福
        FISH_YUQUN :++i,					// 鱼群 (FISH_WONIUYU-FISH_HAIGUI)
        FISH_CHAIN :++i,					// 闪电鱼 (FISH_WONIUYU-FISH_LANYU) 连 (FISH_WONIUYU-FISH_DENGLONGYU)
    }


    var bulletKind = {
        bullet1:1,
        bullet2:2,
        bullet3:3,
    }
    i = 0;
    var bulletConfig = [
        {type: bulletKind.bullet1, ExportJsonPath:"Resources/bulletArmature/zidan1.ExportJson", PlistPath:"Resources/bulletArmature/zidan10.plist", PngPath:"Resources/bulletArmature/zidan10.png"},
        {type: bulletKind.bullet2, ExportJsonPath:"Resources/bulletArmature/zidan2.ExportJson", PlistPath:"Resources/bulletArmature/zidan20.plist", PngPath:"Resources/bulletArmature/zidan20.png"},
        {type: bulletKind.bullet3, ExportJsonPath:"Resources/bulletArmature/zidan3.ExportJson", PlistPath:"Resources/bulletArmature/zidan30.plist", PngPath:"Resources/bulletArmature/zidan30.png"},
    ]
    var fishConfig = [
        {type : fishKind.FISH_WONIUYU + i++,name : "蜗牛鱼",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, positionOffset:cc.p(0,0), ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "绿草鱼",  ArmatureName:"fish_lvcaoyu", bounding:[{p:cc.p(14,-3), r:10},{p:cc.p(-2,-3), r:10}], boundingAngle:0, positionOffset:cc.p(0,-5), ExportJsonPath:"Resources/fishAramture/fish_lvcaoyu/fish_lvcaoyu.ExportJson", PlistPath:"Resources/fishAramture/fish_lvcaoyu/fish_lvcaoyu0.plist", PngPath:"Resources/fishAramture/fish_lvcaoyu/fish_lvcaoyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "黄草鱼",  ArmatureName:"fish_huangcaoyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "大眼鱼",  ArmatureName:"fish_dayanyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "黄边鱼",  ArmatureName:"fish_huangbianyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "小丑鱼",  ArmatureName:"fish_xiaochouyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "小刺鱼",  ArmatureName:"fish_xiaociyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "蓝鱼",  ArmatureName:"fish_lanyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "灯笼鱼",  ArmatureName:"fish_denglongyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "绿灯鱼",  ArmatureName:"fish_lvdengyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "海龟",  ArmatureName:"fish_haigui", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "花斑鱼",  ArmatureName:"fish_huabanyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "蝴蝶鱼",  ArmatureName:"fish_hudieyu", bounding:[{p:cc.p(10,-7), r:60}], boundingAngle:0, positionOffset:cc.p(0,0), ExportJsonPath:"Resources/fishAramture/fish_hudieyu/fish_hudieyu.ExportJson", PlistPath:"Resources/fishAramture/fish_hudieyu/fish_hudieyu0.plist", PngPath:"Resources/fishAramture/fish_hudieyu/fish_hudieyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "孔雀鱼",  ArmatureName:"fish_kongqueyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "剑鱼",  ArmatureName:"fish_jianyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "银鲨",  ArmatureName:"fish_yinsha", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        {type : fishKind.FISH_WONIUYU + i++,name : "金鲨",  ArmatureName:"fish_jinsha", bounding:[{p:cc.p(107,-1), r:43},{p:cc.p(46,-4), r:45},{p:cc.p(-24,-5), r:31}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_jinsha/fish_jinsha.ExportJson", PlistPath:"Resources/fishAramture/fish_jinsha/fish_jinsha0.plist", PngPath:"Resources/fishAramture/fish_jinsha/fish_jinsha0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "霸王鲸",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "美人鱼",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "小青龙",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "小银龙",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "小金龙",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "金蟾",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "双头霸王鲸",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "草包",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "蓝板",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "金板",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "三条",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "四条",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "红鱼",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "定海神针",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "全屏炸弹",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "鱼阵",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "浮动分",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "李逵",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "忠义堂",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "全屏炸弹_jcby",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "绿金蟾_jcby",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "哪吒_nznh",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "定海神针_nznh",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "鱼雷舰",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "侦察机",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "歼击机",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "轰炸机",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "巡逻舰",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "驱逐舰",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "潜水艇",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "战斗机",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "护卫舰",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "航空母舰",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼1",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼2",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼3",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼4",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼5",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼6",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼7",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼8",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼9",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼10",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼11",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼12",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼13",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼14",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼15",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼16",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士小鱼17",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士大鱼18",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士大鱼19",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士大鱼20",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士大鱼21",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士大鱼22",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士大鱼23",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士大鱼24",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士同类鱼25",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士三条26",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "圣斗士四条27",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "神仙船",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "孙悟空",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "玉皇大帝",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "佛手",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "炼丹炉",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "大闹天宫",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "一箭双雕",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "一石三鸟",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "全家福",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "鱼群",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        //{type : fishKind.FISH_WONIUYU + i++,name : "闪电鱼",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},

    ]
    var SwimType =  {
        UnKnow : 0,
        SBSwim : 1,

    };

    var AllPreLoadFile = new Array();
    //cc.log( fishConfig.length);
    for(var i = 0; i < fishConfig.length; i++){
        AllPreLoadFile.push(fishConfig[i].ExportJsonPath);
        AllPreLoadFile.push(fishConfig[i].PlistPath);
        AllPreLoadFile.push(fishConfig[i].PngPath);
    }
    for(var i = 0; i < bulletConfig.length; i++){
        AllPreLoadFile.push(bulletConfig[i].ExportJsonPath);
        AllPreLoadFile.push(bulletConfig[i].PlistPath);
        AllPreLoadFile.push(bulletConfig[i].PngPath);
    }
    var AllExportJson = new Array();
    for(var i = 0; i < fishConfig.length; i++){
        AllExportJson.push(fishConfig[i].ExportJsonPath);
    }
    for(var i = 0; i < bulletConfig.length; i++){
        AllExportJson.push(bulletConfig[i].ExportJsonPath);
    }


    var swimTimeDt = (1/60.0);
    _G.GlobalVariables = {
        designWidth : 1366,    // 屏宽
        designHeight : 768,    // 屏高
        gameSceneNeedFit:gameSceneNeedFit,
        loadingSceneNeedFit:loadingSceneNeedFit,
        fishKind : fishKind,
        fishConfig: fishConfig,
        bulletKind: bulletKind,
        bulletConfig: bulletConfig,
        SwimType : SwimType,
        swimTimeDt : swimTimeDt,
        currentFishManager:null,
        currentBulletManager:null,
        currentGameLayer:null,
        AllPreLoadFile:AllPreLoadFile,
        AllExportJson:AllExportJson
    }

})(this)