import { IPolygon3dOptions } from './options'
import { BaseResult } from './../base/index'
import { EColor, EPolygon3DStyle } from 'common/utils/common'
export interface IPolygon3d {
    // TODO 写一行是为了，没有和最新的api同步，避免报错问题
    [key: string]: unknown | any

    /**
     * add(data, fn)
    添加一个或多个Polygon3D对象
    ```ts
        ////使用Polygon3DStyle样式的polygon3d
    let o1 = {
        id: 'p3d1',
        coordinates: [
            [489152.96875, 2492427, 0],
            [489155.34375, 2492386.75, 0],
            [489119.875, 2492387.75, 0],
            [489115.375, 2492417.25, 0],
        ],
        coordinateType: 0,//坐标系类型，取值范围：0为Projection类型，1为WGS84类型，2为火星坐标系(GCJ02)，3为百度坐标系(BD09)，默认值：0 
        color: [1, 0, 1, 1],        //颜色值
        height: 10,                //3D多边形的高度
        intensity: 1.0,             //亮度
        style: Polygon3DStyle.SingleColorWithLight, //3DPolygon的样式 请参照API开发文档选取枚举
        tillingX: 0, //可选，仅当3DPolygon的样式支持贴图显示，贴图横向平铺  
        tillingY: 0,  //可选，仅当3DPolygon的样式支持贴图显示，贴图纵向平铺
        material: "/JC_CustomAssets/MaterialLibrary/Exhibition/地面_自然/地面_自然_16", //自定义材质路径
        scalarParameters: [{ "name": "亮度", "value": 1.0 }],  //材质数值类型参数
        vectorParameters: [{ "name": "颜色", "value": [1, 1, 1] }], //材质数组类型参数
        generateTop: true, //是否生成顶面
        generateSide: true,//是否生成侧面
        generateBottom: true//是否生成底面
    };

    //自定义材质的polygon3d
    let o2 = {
        id: 'p3d2',
        coordinates: [
            [489267.53125, 2492406, 0],
            [489264.9375, 2492356.5, 0],
            [489235.84375, 2492355.75, 0],
            [489227.96875, 2492397.75, 0],
        ],
        coordinateType: 0,//坐标系类型，取值范围：0为Projection类型，1为WGS84类型，2为火星坐标系(GCJ02)，3为百度坐标系(BD09)，默认值：0 
        color: [1, 0, 0, 1],        //颜色值
        height: 20,                //3D多边形的高度
        intensity: 1.0,             //亮度
        style: Polygon3DStyle.SingleColorWithLight, //3DPolygon的样式 请参照API开发文档选取枚举
        tillingX: 0, //可选，仅当3DPolygon的样式支持贴图显示，贴图横向平铺  
        tillingY: 0,  //可选，仅当3DPolygon的样式支持贴图显示，贴图纵向平铺
        material: "/JC_CustomAssets/MaterialLibrary/Exhibition/地面_自然/地面_自然_8", //自定义材质路径 使用自定义材质后style相关参数会失效
        scalarParameters: [{ "name": "亮度", "value": 1.0 }],  //材质数值类型参数
        vectorParameters: [{ "name": "颜色", "value": [1, 1, 1] }], //材质数组类型参数
        generateTop: true, //是否生成顶面
        generateSide: true,//是否生成侧面
        generateBottom: true//是否生成底面
    };
    let p3dArr = [];
    p3dArr.push(o1);
    p3dArr.push(o2);
    await __g.polygon3d.add(p3dArr);
    ```
     */
    add(data: IPolygon3dOptions[], fn?: Function): Promise<BaseResult>


    /**
     * clear(fn)
    删除场景中所有的3DPolygon

    Parameters:
    Name	Type	Description

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    clear(fn?: Function): Promise<BaseResult>


    /**
     * delete(ids, fn)
    删除一个或多个3DPolygon对象

    Parameters:
    Name	Type	Description

    ids	string | array	
    要删除的3DPolygon对象的ID或者ID数组（可以删除一个或者多个）

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    delete(ids: string | string[], fn?: Function): Promise<BaseResult>


    /**
     * focus(ids, distance, flyTime, rotation, fn)
    自动定位到合适的观察距离

    Parameters:
    Name	Type	Description

    ids	string | array	
    3DPolygon对象的ID或者ID数组

    distance	number	
    可选参数，观察点距离目标点（被拍摄物体）的距离，取值范围：[0.01~任意正数]，如果设置为0或者不设置，系统自动计算

    flyTime	number	
    可选参数，相机飞行的时间，取值范围：[0~任意正数]，单位：秒，默认值2秒

    rotation	array	
    可选参数，相机旋转的欧拉角：[Pitch,Yaw,Roll]，数组元素类型：(number)，取值范围：Pitch[-90~90] Yaw[-180~180] Roll[0]

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    focus(ids: string | string[], distance?: number, flyTime?: number, rotation?: number[], fn?: Function): Promise<BaseResult>


    /**
     * get(ids, fn)
    根据ID获取3DPolygon的详细信息

    Parameters:
    Name	Type	Description

    ids	string | array	
    要获取的3DPolygon对象ID或者ID数组（可以获取一个或者多个）

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    get(ids: string | string[], fn?: Function): Promise<BaseResult>


    /**
     * glow(ids, duration, fn)
    闪烁，目前仅部分样式支持闪烁，和材质有关

    Parameters:
    Name	Type	Description

    ids	string | array	
    Polygon3D的ID或者ID数组

    duration	number	
    闪烁持续时间，取值范围：[0~1]，单位：秒

    fn	function	
可选的回调函数，请参考二次开发：异步接口调用方式
     */
    glow(ids: string | string[], duration?: number, fn?: Function): Promise<BaseResult>


    /**
     * hide(ids, fn)
    隐藏3DPolygon

    Parameters:
    Name	Type	Description

    ids	string | array	
    3DPolygon对象的ID或者ID数组

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    hide(ids: string | string[], fn?: Function): Promise<BaseResult>


    /**
     * hideAll(fn)
    隐藏所有3DPolygon

    Parameters:
    Name	Type	Description

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    hideAll(fn?: Function): Promise<BaseResult>


    /**
     * highlight(ids, fn)
    高亮，目前仅部分样式支持高亮，和材质有关

    Parameters:
    Name	Type	Description

    ids	string | array	
    Polygon3D的ID或者ID数组

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    highlight(ids: string | string[], fn?: Function): Promise<BaseResult>


    /**
    * setColor(id, newColor, fn)
    设置颜色

    Parameters:
    Name	Type	Description

    id	string	
    Polygon3D的ID

    newColor	Color	
    新颜色值，支持四种格式，取值示例

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    setColor(id: string, newColor: EColor, fn?: Function): Promise<BaseResult>


    /**
     * setCoordinates(id, newVal, fn)
     设置坐标
 
     Parameters:
     Name	Type	Description

     id	string	
     Polygon3D的ID
 
     newVal	array	
     新坐标值，取值示例
 
     fn	function	
     可选的回调函数，请参考二次开发：异步接口调用方式
     */
    setCoordinates(id: string, newVal: number[], fn?: Function): Promise<BaseResult>


    /**
     * setHeight(id, newVal, fn)
    设置高度

    Parameters:
    Name	Type	Description

    id	string	
    Polygon3D的ID

    newVal	number	
    新值

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    setHeight(id: string, newVal: number, fn?: Function): Promise<BaseResult>


    /**
     * setIntensity(id, newVal, fn)
     设置亮度
 
     Parameters:
     Name	Type	Description

     id	string	
     Polygon3D的ID
 
     newVal	number	
     新值
 
     fn	function	
     可选的回调函数，请参考二次开发：异步接口调用方式
     */
    setIntensity(id: string, newVal: number, fn?: Function): Promise<BaseResult>


    /**
     * setStyle(id, newVal, fn)
    设置样式

    Parameters:
    Name	Type	Description

    id	string	
    Polygon3D的ID

    newVal	number	
    新3DPolygon的样式，参考 Polygon3DStyle

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    setStyle(id: string, newVal: EPolygon3DStyle, fn?: Function): Promise<BaseResult>


    /**
     * setTillingX(id, newVal, fn)
    设置TillingX

    Parameters:
    Name	Type	Description

    id	string	
    Polygon3D的ID

    newVal	number	
    新值

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    setTillingX(id: string, newVal: number, fn?: Function): Promise<BaseResult>


    /**
     * setTillingY(id, newVal, fn)
    设置TillingY

    Parameters:
    Name	Type	Description

    id	string	
    Polygon3D的ID

    newVal	number	
    新值

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    setTillingY(id: string, newVal: number, fn?: Function): Promise<BaseResult>


    /**
     * show(ids, fn)
    显示3DPolygon

    Parameters:
    Name	Type	Description

    ids	string | array	
    3DPolygon对象的ID或者ID数组

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    show(ids: string | string[], fn?: Function): Promise<BaseResult>


    /**
     * showAll(fn)
    显示所有3DPolygon

    Parameters:
    Name	Type	Description
    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    showAll(fn?: Function): Promise<BaseResult>


    /**
     * stopGlow(ids, fn)
    停止闪烁

    Parameters:
    Name	Type	Description

    ids	string | array	
    Polygon3D的ID或者ID数组

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    stopGlow(ids: string | string[], fn?: Function): Promise<BaseResult>


    /**
     * stopHighlight(ids, fn)
    停止高亮

    Parameters:
    Name	Type	Description

    ids	string | array	
    Polygon3D的ID或者ID数组

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    stopHighlight(ids: string | string[], fn?: Function): Promise<BaseResult>


    /**
     * update(data, fn)
    修改一个或多个3DPolygon对象

    Parameters:
    Name	Type	Description

    data	object | array	
    数据结构，请参考add方法

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    update(data: IPolygon3dOptions | IPolygon3dOptions[], fn?: Function): Promise<BaseResult>


    /**
     * updateBegin()
    用于批量多次修改对象的属性

    在开始修改之前调用updateBegin，然后可以多次调用setXXX方法，最后调用updateEnd提交修改更新数据
    注意：
    updateBegin不是异步调用，不需要await，也没有回调函数参数

    ```ts
    __g.xxx.updateBegin();
    for (let i = 0; i < 1000; i++) {
        __g.xxx.setColor(i, Color.Yellow);
    } 
    __g.xxx.updateEnd(function () {
        log('update finished!');
    });
    ```
     */
    updateBegin(): void


    /**
     * updateEnd(fn)
    用于批量多次修改对象的属性，与updateBegin配套使用
    注意：
    updateEnd是异步调用，可以用回调函数也可以await

    Parameters:
    Name	Type	Description
    
    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    updateEnd(fn?: Function): Promise<BaseResult>
}
