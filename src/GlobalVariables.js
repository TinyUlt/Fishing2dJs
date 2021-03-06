(function(_G){


    //需要适配的层
    var loadingSceneNeedFit = [];
    var gameSceneNeedFit = [
    {name:"Panel_Background", type:FitSolution.UIFitType.NoBoard},
    {name:"Panel_turret0", type:FitSolution.UIFitType.ShowAll},
    {name:"Panel_turret1", type:FitSolution.UIFitType.ShowAll},
    {name:"Panel_turret2", type:FitSolution.UIFitType.ShowAll},
    {name:"Panel_turret3", type:FitSolution.UIFitType.ShowAll},
    {name:"Panel_turret4", type:FitSolution.UIFitType.ShowAll},
    {name:"Panel_turret5", type:FitSolution.UIFitType.ShowAll},
        {name:"Panel_TowerConttrol", type:FitSolution.UIFitType.ShowAll},

    ];

    //鱼类型
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

    //子弹类型
    var bulletKind = {
        bullet1:1,
        bullet2:2,
        bullet3:3,
    }

    //子弹文件
    var bulletConfig = [
        {type: bulletKind.bullet1, ExportJsonPath:"Resources/bulletArmature/zidan1.ExportJson", PlistPath:"Resources/bulletArmature/zidan10.plist", PngPath:"Resources/bulletArmature/zidan10.png"},
        {type: bulletKind.bullet2, ExportJsonPath:"Resources/bulletArmature/zidan2.ExportJson", PlistPath:"Resources/bulletArmature/zidan20.plist", PngPath:"Resources/bulletArmature/zidan20.png"},
        {type: bulletKind.bullet3, ExportJsonPath:"Resources/bulletArmature/zidan3.ExportJson", PlistPath:"Resources/bulletArmature/zidan30.plist", PngPath:"Resources/bulletArmature/zidan30.png"},
    ];
    //金币文件
    var coinConfig = [
        {ExportJsonPath:"Resources/coinArmature/jinbi1.ExportJson", PlistPath:"Resources/coinArmature/jinbi10.plist", PngPath:"Resources/coinArmature/jinbi10.png"},
    ]
    //鱼配置
    i = 0;
    var fishConfig = [
        {type : fishKind.FISH_WONIUYU + i++,name : "蜗牛鱼",  ArmatureName:"fish_woniuyu", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, positionOffset:cc.p(0,0), ExportJsonPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu.ExportJson", PlistPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.plist", PngPath:"Resources/fishAramture/fish_woniuyu/fish_woniuyu0.png"},
        { type: fishKind.FISH_WONIUYU + i++, name: "绿草鱼", ArmatureName: "fish_lvcaoyu", bounding: [{ p: cc.p(14, -3), r: 10 }, { p: cc.p(-2, -3), r: 10 }], boundingAngle: 0, positionOffset: cc.p(0, -5), ExportJsonPath: "Resources/fishAramture/fish_lvcaoyu/fish_lvcaoyu.ExportJson", PlistPath: "Resources/fishAramture/fish_lvcaoyu/fish_lvcaoyu0.plist", PngPath: "Resources/fishAramture/fish_lvcaoyu/fish_lvcaoyu0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "黄草鱼", ArmatureName: "fish_huangcaoyu", bounding: [{ p: cc.p(11, 0), r: 18 }, { p: cc.p(-4, -5), r: 18 }], boundingAngle: 0, positionOffset: cc.p(0, -3), ExportJsonPath: "Resources/fishAramture/fish_huangcaoyu/fish_huangcaoyu.ExportJson", PlistPath: "Resources/fishAramture/fish_huangcaoyu/fish_huangcaoyu0.plist", PngPath: "Resources/fishAramture/fish_huangcaoyu/fish_huangcaoyu0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "大眼鱼", ArmatureName: "fish_dayanyu", bounding: [{ p: cc.p(27, 2), r: 20 }, { p: cc.p(4, 2), r: 15 }], boundingAngle: 0, positionOffset: cc.p(0, 0), ExportJsonPath: "Resources/fishAramture/fish_dayanyu/fish_dayanyu.ExportJson", PlistPath: "Resources/fishAramture/fish_dayanyu/fish_dayanyu0.plist", PngPath: "Resources/fishAramture/fish_dayanyu/fish_dayanyu0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "黄边鱼", ArmatureName: "fish_huangbianyu", bounding: [{ p: cc.p(26, 1), r: 22 }, { p: cc.p(-4, -1), r: 24 }], boundingAngle: 0, positionOffset: cc.p(0, 0), ExportJsonPath: "Resources/fishAramture/fish_huangbianyu/fish_huangbianyu.ExportJson", PlistPath: "Resources/fishAramture/fish_huangbianyu/fish_huangbianyu0.plist", PngPath: "Resources/fishAramture/fish_huangbianyu/fish_huangbianyu0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "小丑鱼", ArmatureName: "fish_xiaochouyu", bounding: [{ p: cc.p(25, 1), r: 24 }, { p: cc.p(0, -1), r: 35 }], boundingAngle: 0, positionOffset: cc.p(0, 0), ExportJsonPath: "Resources/fishAramture/fish_xiaochouyu/fish_xiaochouyu.ExportJson", PlistPath: "Resources/fishAramture/fish_xiaochouyu/fish_xiaochouyu0.plist", PngPath: "Resources/fishAramture/fish_xiaochouyu/fish_xiaochouyu0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "小刺鱼", ArmatureName: "fish_xiaociyu", bounding: [{ p: cc.p(29, 0), r: 28 }, { p: cc.p(2, 1), r: 17 }], boundingAngle: 0, positionOffset: cc.p(0, 0), ExportJsonPath: "Resources/fishAramture/fish_xiaociyu/fish_xiaociyu.ExportJson", PlistPath: "Resources/fishAramture/fish_xiaociyu/fish_xiaociyu0.plist", PngPath: "Resources/fishAramture/fish_xiaociyu/fish_xiaociyu0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "蓝鱼", ArmatureName: "fish_lanyu", bounding: [{ p: cc.p(36, -6), r: 28 }, { p: cc.p(4, -9), r: 24 }], boundingAngle: 0, positionOffset: cc.p(0, -10), ExportJsonPath: "Resources/fishAramture/fish_lanyu/fish_lanyu.ExportJson", PlistPath: "Resources/fishAramture/fish_lanyu/fish_lanyu0.plist", PngPath: "Resources/fishAramture/fish_lanyu/fish_lanyu0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "灯笼鱼", ArmatureName: "fish_denglongyu", bounding: [{ p: cc.p(-11, 8), r: 34 }, { p: cc.p(-47, 8), r: 20 }], boundingAngle: 0, positionOffset: cc.p(0, 10), ExportJsonPath: "Resources/fishAramture/fish_denglongyu/fish_denglongyu.ExportJson", PlistPath: "Resources/fishAramture/fish_denglongyu/fish_denglongyu0.plist", PngPath: "Resources/fishAramture/fish_denglongyu/fish_denglongyu0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "绿灯鱼", ArmatureName: "fish_lvdengyu", bounding: [{ p: cc.p(0, 0), r: 43 }], boundingAngle: 0, positionOffset: cc.p(0, 0), ExportJsonPath: "Resources/fishAramture/fish_lvdengyu/fish_lvdengyu.ExportJson", PlistPath: "Resources/fishAramture/fish_lvdengyu/fish_lvdengyu0.plist", PngPath: "Resources/fishAramture/fish_lvdengyu/fish_lvdengyufish_lvdengyu0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "海龟", ArmatureName: "fish_haigui", bounding: [{ p: cc.p(31, 0), r: 35 }, { p: cc.p(-18, 0), r: 42 }], boundingAngle: 0, positionOffset: cc.p(0, 0), ExportJsonPath: "Resources/fishAramture/fish_haigui/fish_haigui.ExportJson", PlistPath: "Resources/fishAramture/fish_haigui/fish_haigui0.plist", PngPath: "Resources/fishAramture/fish_haigui/fish_haigui0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "花斑鱼", ArmatureName: "fish_huabanyu", bounding: [{ p: cc.p(29, 10), r: 28 }, { p: cc.p(1, 5), r: 33 }], boundingAngle: 0, positionOffset: cc.p(0, 5), ExportJsonPath: "Resources/fishAramture/fish_huabanyu/fish_huabanyu.ExportJson", PlistPath: "Resources/fishAramture/fish_huabanyu/fish_huabanyu0.plist", PngPath: "Resources/fishAramture/fish_huabanyu/fish_huabanyu0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "蝴蝶鱼", ArmatureName: "fish_hudieyu", bounding: [{ p: cc.p(10, -7), r: 60 }], boundingAngle: 0, positionOffset: cc.p(0, 0), positionOffset: cc.p(0, -5), ExportJsonPath: "Resources/fishAramture/fish_hudieyu/fish_hudieyu.ExportJson", PlistPath: "Resources/fishAramture/fish_hudieyu/fish_hudieyu0.plist", PngPath: "Resources/fishAramture/fish_hudieyu/fish_hudieyu0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "孔雀鱼", ArmatureName: "fish_kongqueyu", bounding: [{ p: cc.p(73, 0), r: 32 }, { p: cc.p(11, 0), r: 32 }, { p: cc.p(-45, 0), r: 32 }], boundingAngle: 0, positionOffset: cc.p(0, 0), ExportJsonPath: "Resources/fishAramture/fish_kongqueyu/fish_kongqueyu.ExportJson", PlistPath: "Resources/fishAramture/fish_kongqueyu/fish_kongqueyu0.plist", PngPath: "Resources/fishAramture/fish_kongqueyu/fish_kongqueyu0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "剑鱼", ArmatureName: "fish_jianyu", bounding: [{ p: cc.p(60, -9), r: 28 }, { p: cc.p(12, -7), r: 32 }, { p: cc.p(-40, -4), r: 26 }], boundingAngle: 0, positionOffset: cc.p(0, -10), ExportJsonPath: "Resources/fishAramture/fish_jianyu/fish_jianyu.ExportJson", PlistPath: "Resources/fishAramture/fish_jianyu/fish_jianyu0.plist", PngPath: "Resources/fishAramture/fish_jianyu/fish_jianyu0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "蝙蝠鱼", ArmatureName: "fish_bianfuyu", bounding: [{ p: cc.p(28, 0), r: 65 }], boundingAngle: 0, positionOffset: cc.p(0, 0), ExportJsonPath: "Resources/fishAramture/fish_bianfuyu/fish_bianfuyu.ExportJson", PlistPath: "Resources/fishAramture/fish_bianfuyu/fish_bianfuyu0.plist", PngPath: "Resources/fishAramture/fish_bianfuyu/fish_bianfuyu0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "银鲨", ArmatureName: "fish_yinsha", bounding: [{ p: cc.p(107, -1), r: 43 }, { p: cc.p(46, -4), r: 45 }, { p: cc.p(-24, -5), r: 31 }], boundingAngle: 0, positionOffset: cc.p(0, -10), ExportJsonPath: "Resources/fishAramture/fish_yinsha/fish_yinsha.ExportJson", PlistPath: "Resources/fishAramture/fish_yinsha/fish_yinsha0.plist", PngPath: "Resources/fishAramture/fish_yinsha/fish_yinsha0.png" },
        { type: fishKind.FISH_WONIUYU + i++, name: "金鲨", ArmatureName: "fish_jinsha", bounding: [{ p: cc.p(107, -1), r: 43 }, { p: cc.p(46, -4), r: 45 }, { p: cc.p(-24, -5), r: 31 }], boundingAngle: 0, positionOffset: cc.p(0, -10), ExportJsonPath: "Resources/fishAramture/fish_jinsha/fish_jinsha.ExportJson", PlistPath: "Resources/fishAramture/fish_jinsha/fish_jinsha0.plist", PngPath: "Resources/fishAramture/fish_jinsha/fish_jinsha0.png" },
        //{type : fishKind._______ + i++,name : "霸王鲸",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "美人鱼",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "小青龙",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "小银龙",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "小金龙",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "金蟾",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "双头霸王鲸",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "草包",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "蓝板",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "金板",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "三条",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "四条",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "红鱼",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "定海神针",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "全屏炸弹",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "鱼阵",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "浮动分",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "李逵",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "忠义堂",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "全屏炸弹_jcby",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "绿金蟾_jcby",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "哪吒_nznh",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "定海神针_nznh",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "鱼雷舰",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "侦察机",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "歼击机",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "轰炸机",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "巡逻舰",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "驱逐舰",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "潜水艇",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "战斗机",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "护卫舰",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "航空母舰",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼1",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼2",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼3",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼4",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼5",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼6",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼7",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼8",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼9",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼10",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼11",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼12",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼13",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼14",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼15",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼16",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士小鱼17",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士大鱼18",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士大鱼19",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士大鱼20",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士大鱼21",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士大鱼22",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士大鱼23",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士大鱼24",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士同类鱼25",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士三条26",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "圣斗士四条27",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "神仙船",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "孙悟空",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "玉皇大帝",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "佛手",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "炼丹炉",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "大闹天宫",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "一箭双雕",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "一石三鸟",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "全家福",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "鱼群",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},
        //{type : fishKind._______ + i++,name : "闪电鱼",  ArmatureName:"_______", bounding:[{p:cc.p(16,0), r:10},{p:cc.p(0,0), r:10}], boundingAngle:0, ExportJsonPath:"Resources/fishAramture/_______/_______.ExportJson", PlistPath:"Resources/fishAramture/_______/_______0.plist", PngPath:"Resources/fishAramture/_______/_______0.png"},

    ]
    //鱼游动类型
    var SwimType =  {
        UnKnow : 0,
        SBSwim : 1,

    };
    //需要预先加载文件
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
    for(var i = 0; i < coinConfig.length; i ++){
        AllPreLoadFile.push(coinConfig[i].ExportJsonPath)
        AllPreLoadFile.push(coinConfig[i].PlistPath);
        AllPreLoadFile.push(coinConfig[i].PngPath);
    }
    //////////////动画文件
    var AllExportJson = new Array();
    for(var i = 0; i < fishConfig.length; i++){
        AllExportJson.push(fishConfig[i].ExportJsonPath);
    }
    for(var i = 0; i < bulletConfig.length; i++){
        AllExportJson.push(bulletConfig[i].ExportJsonPath);
    }
    for(var i = 0; i < coinConfig.length; i ++){
        AllExportJson.push(coinConfig[i].ExportJsonPath)
    }

    //计算鱼游动路线的时间间隔
    var swimTimeDt = (1/60.0);

    //炮塔位置
    var kGunPos = [
        { x:326.5, y:768 - 70.0 },
        { x:757.5, y:768 - 70.0 },
        { x:1188.5, y:768 - 70.0 },
        { x:1039.50, y:768 - 685.0 },
        { x:608.5, y:768 - 685.0 },
        { x:177.5, y:768 - 685 }
    ];
    var GunPos = [
        cc.p(kGunPos[0].x,kGunPos[0].y),
        cc.p(kGunPos[1].x,kGunPos[1].y),
        cc.p(kGunPos[2].x,kGunPos[2].y),
        cc.p(kGunPos[3].x,kGunPos[3].y),
        cc.p(kGunPos[4].x,kGunPos[4].y),
        cc.p(kGunPos[5].x,kGunPos[5].y),
    ];

    var TestChairID = 4;


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
        managers:{
            currentFishManager:null,
            currentBulletManager:null,
            currentSwimManager:null,
            currentPlayerManager:null,
            currentCollisionManager:null,
            currentCoinManager:null,
            currentUIControlManager:null,
        },
        currentGameLayer:null,
        AllPreLoadFile:AllPreLoadFile,
        AllExportJson:AllExportJson,
        kGunPos:kGunPos,
        GunPos:GunPos,
        TestChairID:TestChairID
    }

})(this)