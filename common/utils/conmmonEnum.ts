/**
 * mouse and keyboard events enums
 */
export enum MouseKeyEventEnum {
    /**
     * mouseenter
     */
    MOUSE_ENTER = 'mouseenter',
    /**
     * mouseleave
     */
    MOUSE_LEAVE = 'mouseleave',
    /**
     * mousemove
     */
    MOUSE_MOVE = 'mousemove',
    /**
     * mousedown
     */
    MOUSE_DOWN = 'mousedown',
    /**
     * mouseup
     */
    MOUSE_UP = 'mouseup',
    /**
     * keydown
     */
    KEY_DOWN = 'keydown',
    /**
     * keyup
     */
    KEY_UP = 'keyup',
    /**
     * keypress
     */
    KEY_PRESS = 'Keypress'
}

/**
 *  WebSocket接口调用的错误代码
 * OK	number	0	
正常

InvalidParameters	number	1	
参数错误

InternalError	number	2	
内部错误（环境尚未准备好、空指针等）

ResourceNotFound	number	3	
数据不存在

AcpProjWKTNotSet	number	4	
工程未设置坐标系

CoordinateConversionFailed	number	5	
坐标转换失败

IDExists	number	6	
指定ID的对象已经存在了

InvalidRequestType	number	7	
无效的请求类型

InvalidRequestString	number	8	
无效的请求（包含了InvalidRequestType）

NoCommand	number	9	
CommandFactory没有创建对应的Command

DataTypeNotSupport	number	10	
不支持这种类型的数据（比如压平操作只能是OSGB和Terrain）

InvalidOperation	number	11	
无效的操作

ProjectNotOpened	number	12	
工程尚未打开，此时不能进行API调用！

CodeMax	number	65535	
 */
export enum APIErrorCode {
    /**
     * 正常
     */
    SUCCESS = 0,
    /**
     * 参数错误
     */
    INVALID_PARAMETERS = 1,
    /**内部错误（环境尚未准备好、空指针等）
     *
     */
    INTERNAL_ERROR = 2,
    /**
     * 数据不存在
     */
    RESOURCE_NOT_FOUND = 3,
    /**
     * 工程未设置坐标系
     */
    ACP_PROJ_WKT_NOT_SET = 4,
    /**
     * 坐标转换失败
     */
    COORDINATE_CONVERSION_FAILED = 5,
    /**
     * 指定ID的对象已经存在了
     */
    ID_EXISTS = 6,
    /**
     * 无效的请求类型
     */
    INVALID_REQUEST_TYPE = 7,
    /**
     * 无效的请求（包含了InvalidRequestType）
     */
    INVALID_REQUEST_STRING = 8,
    /**
     * CommandFactory没有创建对应的Command
     */
    NO_COMMAND = 9,
    /**
     * 不支持这种类型的数据（比如压平操作只能是OSGB和Terrain）
     */
    DATA_TYPE_NOT_SUPPORT = 10,
    /**
     * 无效的操作
     */
    INVALID_OPERATION = 11,
    /**
     * 工程尚未打开，此时不能进行API调用！
     */
    PROJECT_NOT_OPENED = 12,
    CODE_MAX = 65535
}

/**
 * Cloud的运行状态
 * 
可以从视频窗口左上角闪烁的小圆点的颜色判断当前的运行状态
Name	Type	Default	Description
WS_Disconnected	number	0	
WebSocket连接断开（ 颜色：红 ）

WS_Connecting	number	1	
WebSocket正在尝试连接（颜色：灰 ）

WS_Connected	number	2	
WebSocket已连接，正在建立WebRTC连接（颜色：黄 ）

RTC_Opened	number	3	
WebRTC通道已打开（颜色：蓝 ）

Video_LoadedMetaData	number	4	
视频流元数据已加载（内部使用）

OnReady	number	5	
Acp工程已打开（颜色：绿 ）
 */
export enum CloudStatus {
    /**
     * WebSocket连接断开（ 颜色：红 ）
     */
    WS_Disconnected = 0,
    /**
     * WebSocket正在尝试连接（颜色：灰 ）
     */
    WS_Connecting = 1,
    /**
     * WebSocket已连接，正在建立WebRTC连接（颜色：黄 ）
     */
    WS_Connected = 2,
    /**
     * WebRTC通道已打开（颜色：蓝 ）
     */
    RTC_Opened = 3,
    /**
     * 视频流元数据已加载（内部使用）
     */
    Video_LoadedMetaData = 4,
    /**
     * Acp工程已打开（颜色：绿 ）
     */
    OnReady = 5
}

/**
 * 预定义的颜色值 接口中颜色参数可以使用这些预定义的颜色值
 *
 *LightPink	string	RGB(255,182,193)	
浅粉红

Pink	string	RGB(255,192,203)	
粉红

Crimson	string	RGB(220,20,60)	
猩红

LavenderBlush	string	RGB(255,240,245)	
脸红的淡紫色

PaleVioletRed	string	RGB(219,112,147)	
苍白的紫罗兰红色

HotPink	string	RGB(255,105,180)	
热情的粉红

DeepPink	string	RGB(255,20,147)	
深粉色

MediumVioletRed	string	RGB(199,21,133)	
适中的紫罗兰红色

Orchid	string	RGB(218,112,214)	
兰花的紫色

Thistle	string	RGB(216,191,216)	
蓟

plum	string	RGB(221,160,221)	
李子

Violet	string	RGB(238,130,238)	
紫罗兰

Magenta	string	RGB(255,0,255)	
洋红

Fuchsia	string	RGB(255,0,255)	
灯笼海棠(紫红色)

DarkMagenta	string	RGB(139,0,139)	
深洋红色

Purple	string	RGB(128,0,128)	
紫色

MediumOrchid	string	RGB(186,85,211)	
适中的兰花紫

DarkVoilet	string	RGB(148,0,211)	
深紫罗兰色

DarkOrchid	string	RGB(153,50,204)	
深兰花紫

Indigo	string	RGB(75,0,130)	
靛青

BlueViolet	string	RGB(138,43,226)	
深紫罗兰的蓝色

MediumPurple	string	RGB(147,112,219)	
适中的紫色

MediumSlateBlue	string	RGB(123,104,238)	
适中的板岩暗蓝灰色

SlateBlue	string	RGB(106,90,205)	
板岩暗蓝灰色

DarkSlateBlue	string	RGB(72,61,139)	
深岩暗蓝灰色

Lavender	string	RGB(230,230,250)	
熏衣草花的淡紫色

GhostWhite	string	RGB(248,248,255)	
幽灵的白色

Blue	string	RGB(0,0,255)	
纯蓝

MediumBlue	string	RGB(0,0,205)	
适中的蓝色

MidnightBlue	string	RGB(25,25,112)	
午夜的蓝色

DarkBlue	string	RGB(0,0,139)	
深蓝色

Navy	string	RGB(0,0,128)	
海军蓝

RoyalBlue	string	RGB(65,105,225)	
皇家蓝

CornflowerBlue	string	RGB(100,149,237)	
矢车菊的蓝色

LightSteelBlue	string	RGB(176,196,222)	
淡钢蓝

LightSlateGray	string	RGB(119,136,153)	
浅石板灰

SlateGray	string	RGB(112,128,144)	
石板灰

DoderBlue	string	RGB(30,144,255)	
道奇蓝

AliceBlue	string	RGB(240,248,255)	
爱丽丝蓝

SteelBlue	string	RGB(70,130,180)	
钢蓝

LightSkyBlue	string	RGB(135,206,250)	
淡蓝色

SkyBlue	string	RGB(135,206,235)	
天蓝色

DeepSkyBlue	string	RGB(0,191,255)	
深天蓝

LightBLue	string	RGB(173,216,230)	
淡蓝

PowDerBlue	string	RGB(176,224,230)	
火药蓝

CadetBlue	string	RGB(95,158,160)	
军校蓝

Azure	string	RGB(240,255,255)	
蔚蓝色

LightCyan	string	RGB(225,255,255)	
淡青色

PaleTurquoise	string	RGB(175,238,238)	
苍白的绿宝石

Cyan	string	RGB(0,255,255)	
青色

Aqua	string	RGB(212,242,231)	
水绿色

DarkTurquoise	string	RGB(0,206,209)	
深绿宝石

DarkSlateGray	string	RGB(47,79,79)	
深石板灰

DarkCyan	string	RGB(0,139,139)	
深青色

Teal	string	RGB(0,128,128)	
水鸭色

MediumTurquoise	string	RGB(72,209,204)	
适中的绿宝石

LightSeaGreen	string	RGB(32,178,170)	
浅海洋绿

Turquoise	string	RGB(64,224,208)	
绿宝石

Auqamarin	string	RGB(127,255,170)	
绿玉\碧绿色

MediumAquamarine	string	RGB(0,250,154)	
适中的碧绿色

MediumSpringGreen	string	RGB(0,255,127)	
适中的春天的绿色

MintCream	string	RGB(245,255,250)	
薄荷奶油

SpringGreen	string	RGB(60,179,113)	
春天的绿色

SeaGreen	string	RGB(46,139,87)	
海洋绿

Honeydew	string	RGB(240,255,240)	
蜂蜜

LightGreen	string	RGB(144,238,144)	
淡绿色

PaleGreen	string	RGB(152,251,152)	
苍白的绿色

DarkSeaGreen	string	RGB(143,188,143)	
深海洋绿

LimeGreen	string	RGB(50,205,50)	
酸橙绿

Lime	string	RGB(0,255,0)	
酸橙色

ForestGreen	string	RGB(34,139,34)	
森林绿

Green	string	RGB(0,128,0)	
纯绿

DarkGreen	string	RGB(0,100,0)	
深绿色

Chartreuse	string	RGB(127,255,0)	
查特酒绿

LawnGreen	string	RGB(124,252,0)	
草坪绿

GreenYellow	string	RGB(173,255,47)	
绿黄色

OliveDrab	string	RGB(85,107,47)	
橄榄土褐色

Beige	string	RGB(245,245,220)	
米色(浅褐色)

LightGoldenrodYellow	string	RGB(250,250,210)	
浅秋麒麟黄

Ivory	string	RGB(255,255,240)	
象牙

LightYellow	string	RGB(255,255,224)	
浅黄色

Yellow	string	RGB(255,255,0)	
纯黄

Olive	string	RGB(128,128,0)	
橄榄

DarkKhaki	string	RGB(189,183,107)	
深卡其布

LemonChiffon	string	RGB(255,250,205)	
柠檬薄纱

PaleGodenrod	string	RGB(238,232,170)	
灰秋麒麟

Khaki	string	RGB(240,230,140)	
卡其布

Gold	string	RGB(255,215,0)	
金

Cornislk	string	RGB(255,248,220)	
玉米色

GoldEnrod	string	RGB(218,165,32)	
秋麒麟

FloralWhite	string	RGB(255,250,240)	
花的白色

OldLace	string	RGB(253,245,230)	
老饰带

Wheat	string	RGB(245,222,179)	
小麦色

Moccasin	string	RGB(255,228,181)	
鹿皮鞋

Orange	string	RGB(255,165,0)	
橙色

PapayaWhip	string	RGB(255,239,213)	
番木瓜

BlanchedAlmond	string	RGB(255,235,205)	
漂白的杏仁

NavajoWhite	string	RGB(255,222,173)	
纳瓦霍白

AntiqueWhite	string	RGB(250,235,215)	
古代的白色

Tan	string	RGB(210,180,140)	
晒黑

BrulyWood	string	RGB(222,184,135)	
结实的树

Bisque	string	RGB(255,228,196)	
(浓汤)乳脂,番茄等

DarkOrange	string	RGB(255,140,0)	
深橙色

Linen	string	RGB(250,240,230)	
亚麻布

Peru	string	RGB(205,133,63)	
秘鲁

PeachPuff	string	RGB(255,218,185)	
桃色

SandyBrown	string	RGB(244,164,96)	
沙棕色

Chocolate	string	RGB(210,105,30)	
巧克力

SaddleBrown	string	RGB(139,69,19)	
马鞍棕色

SeaShell	string	RGB(255,245,238)	
海贝壳

Sienna	string	RGB(160,82,45)	
黄土赭色

LightSalmon	string	RGB(255,160,122)	
浅鲜肉(鲑鱼)色

Coral	string	RGB(255,127,80)	
珊瑚

OrangeRed	string	RGB(255,69,0)	
橙红色

DarkSalmon	string	RGB(233,150,122)	
深鲜肉(鲑鱼)色

Tomato	string	RGB(255,99,71)	
番茄

MistyRose	string	RGB(255,228,225)	
薄雾玫瑰

Salmon	string	RGB(250,128,114)	
鲜肉(鲑鱼)色

Snow	string	RGB(255,250,250)	
雪

LightCoral	string	RGB(240,128,128)	
淡珊瑚色

RosyBrown	string	RGB(188,143,143)	
玫瑰棕色

IndianRed	string	RGB(205,92,92)	
印度红

Red	string	RGB(255,0,0)	
纯红

Brown	string	RGB(165,42,42)	
棕色

FireBrick	string	RGB(178,34,34)	
耐火砖

DarkRed	string	RGB(139,0,0)	
深红色

Maroon	string	RGB(128,0,0)	
栗色

White	string	RGB(255,255,255)	
纯白

WhiteSmoke	string	RGB(245,245,245)	
白烟

Gainsboro	string	RGB(220,220,220)	
亮灰色

LightGrey	string	RGB(211,211,211)	
浅灰色

Silver	string	RGB(192,192,192)	
银白色

DarkGray	string	RGB(169,169,169)	
深灰色

Gray	string	RGB(128,128,128)	
灰色

DimGray	string	RGB(105,105,105)	
暗淡的灰色

Black	string	RGB(0,0,0)	
纯黑
 */
export enum Color {
    /**
     * 	浅粉红
     */
    LightPink = 'RGB(255,182,193)',
    /**
     * 	粉红
     */
    Pink = 'RGB(255,192,203)',
    /**
     * 猩红
     */
    Crimson = 'RGB(220,20,60)',
    /**
     * 深粉色
     */
    DeepPink = 'RGB(255,20,147)',
    /**
     * 适中的紫罗兰红色
     */
    MediumVioletRed = 'RGB(199,21,133)',
    /**
     * 兰花的紫色
     */
    Orchid = 'RGB(218,112,214)',
    /**
     *蓟
     */
    Thistle = 'RGB(216,191,216)',
    /**
     * 李子
     */
    Plum = 'RGB(221,160,221)',
    /**
     * 紫罗兰
     */
    Violet = 'RGB(238,130,238)',
    /**
     * 洋红
     */
    Magenta = 'RGB(255,0,255)',
    /**
     * 灯笼海棠(紫红色)
     */
    Fuchsia = 'RGB(255,0,255)',
    /**
     * 脸红的淡紫色
     */
    LavenderBlush = 'RGB(255,240,245)',
    /**
     * 苍白的紫罗兰红色
     */
    PaleVioletRed = 'RGB(219,112,147)',
    /**
     * 热情的粉红
     */
    HotPink = 'RGB(255,105,180)',
    /**
     * 浅鲜肉(鲑鱼)色
     */
    LightSalmon = 'RGB(255,160,122)',
    /**
     * 鲜肉(鲑鱼)色
     */
    Salmon = 'RGB(250,128,114)',
    /**
     * 深鲜肉(鲑鱼)色
     */
    DarkSalmon = 'RGB(233,150,122)',
    /**
     * 淡珊瑚色
     */
    LightCoral = 'RGB(240,128,128)',
    /**
     * 珊瑚
     */
    Coral = 'RGB(255,127,80)',
    /**
     * 番茄
     */
    Tomato = 'RGB(255,99,71)',
    /**
     * 红色
     */
    Red = 'RGB(255,0,0)',
    /**
     * 白色
     */
    White = 'RGB(255,255,255)',

    /**
     * 黑色
     */
    Black = 'RGB(0,0,0)'
}

/**
 * 地图样式
 *
 * Campass	number	0	
指南针

SmallMap	number	1	
鹰眼图


BigMap	number	2	
大地图

 */
export enum MapMode {
    /**
     * 指南针
     */
    Campass = 0,
    /**
     * 鹰眼图
     */
    SmallMap = 1,
    /**
     * 鹰眼图
     */
    BigMap = 2
}
