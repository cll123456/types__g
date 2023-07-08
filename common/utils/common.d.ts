/**
 * common object type
 */
export type CommonObject = {
    [key: string]: unknown | any
}

/**
 * 颜色的类型
 * //常量颜色 
    var constColor = Color.Red;

    //RGB颜色
    var rgbColor = 'RGB(255,255,255)';

    //16进制颜色
    var hexColor =  '#FFFEEE';

    //数组颜色 支持透明度设置
    var colorArr = [0.5,0.5,0.5,1];
 */
export type EColor = string | [number, number, number, number]


/**
 * PolylineStyle :number
Polyline的样式

Type:
number
Properties:
Name	Type	Default	Description
Arrow	number	0	
箭头样式1

Arrow1	number	1	
箭头样式2

Flow	number	2	
流动线

Beam	number	3	
光流

Normal	number	4	
正常的固定线条

OnTerrain	number	5	
贴地模式
使用注意：
1、ACP工程开启贴地：请先在ACP工程打开设置面板-->后期-->对象贴合：勾选贴合所有；
2、如果ACP工程开启大地图模式并设置了WMTS服务，则当前Polyline的坐标范围必须要在WMTS地图范围内才可以看到贴地效果。

DottedNormal	number	6	
普通虚线

DottedCircle	number	7	
圆点虚线
 */
export type EPolylineStyle = number


/**
 *  Polygon3DStyle :number
3D Polygon的样式

Type:
number
Properties:
Name	Type	Default	Description
Wave	number	0	
Wave

LoopLine	number	1	
LoopLine

Gradual	number	2	
渐变

DynamicGradual	number	3	
动态渐变

WaveTransparent	number	4	
波纹

WideWave	number	5	
宽波纹

RotateArrow	number	6	
旋转箭头

RotateLine	number	7	
旋转线

RotateGradual	number	8	
旋转渐变

SingleColor	number	9	
单色无光照

SingleColorWithLight	number	10	
单色有光照
 */
export type EPolygon3DStyle = number