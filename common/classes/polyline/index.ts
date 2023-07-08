import { IPolylineOptions } from './options'
import { BaseResult } from './../base/index'
import { EColor, EPolylineStyle } from 'common/utils/common'

export interface IPolyline {
    // TODO 写一行是为了，没有和最新的api同步，避免报错问题
    [key: string]: unknown | any

    /**
     * 添加一个或多个Polyline对象
     * 
     * ```ts
     *     let p1 = {
        id: 'p1',//折线唯一标识id
        coordinates: [
            [493711.15625, 2488656.25, 7.0],
            [493698.09375, 2490060.25, 8.4],
            [494434.78125, 2490056, 5.4],
            [494663.90625, 2491221, 3.8]
        ],//构成折线的坐标点数组
        coordinateType: 0,//坐标系类型，取值范围：0为Projection类型，1为WGS84类型，2为火星坐标系(GCJ02)，3为百度坐标系(BD09)，默认值：0 
        range: [1, 10000],//可视范围：[近裁距离, 远裁距离]，取值范围: [任意负值, 任意正值]
        color: Color.Red,//折线颜色
        thickness: 100,//折线宽度
        intensity: 0.3,//亮度
        flowRate: 0.5,//流速
        shape: 0, //折线类型 0：直线， 1：曲线
        depthTest: false,//是否做深度检测 开启后会被地形高度遮挡
        style: PolylineStyle.Arrow,//折线样式 参考样式枚举：PolylineStyle
        tiling: 0//材质贴图平铺比例
    };

    //自定义材质的折线
    let p2 = {
        id: 'p2',//折线唯一标识id
        coordinates: [
            [493061.53125, 2490053.5, 0.00015624999650754035],
            [492508.28125, 2490032.25, 8.7195310592651367],
            [492532, 2490584.75, 5.5993747711181641],
            [492131.28125, 2490606.25, 9.4026565551757813]

        ],//构成折线的坐标点数组
        coordinateType: 0,//坐标系类型，取值范围：0为Projection类型，1为WGS84类型，2为火星坐标系(GCJ02)，3为百度坐标系(BD09)，默认值：0 
        range: [1, 10000],//可视范围：[近裁距离, 远裁距离]，取值范围: [任意负值, 任意正值]
        color: [0, 1, 0, 0.5],//折线颜色绿色 半透明
        thickness: 120,//折线宽度
        intensity: 0.1,//亮度
        flowRate: 0.5,//流速
        shape: 0, //折线类型 0：直线， 1：曲线  注意：设置为曲线非常影响添加效率
        depthTest: false,//是否做深度检测 开启后会被地形高度遮挡
        style: PolylineStyle.Normal,//折线样式 参考样式枚举：PolylineStyle
        tiling: 0,//材质贴图平铺比例
        material: "/JC_CustomAssets/PolylineLibrary/Exhibition/混合线_4", //自定义材质路径 设置后style相关参数会失效
        scalarParameters: [{ "name": "亮度1", "value": 0.5 }],  //材质数值类型参数
        vectorParameters: [{ "name": "颜色1", "value": [0, 1, 0] }], //材质数组类型参数
    };

    let pArr = [];
    pArr.push(p1);
    pArr.push(p2);
    await __g.polyline.add(pArr);
    ```
     * 
     * @param data 添加一个或多个polyline对象
     * @param fn 可选的回调函数
     * @returns
     */
    add: (data: IPolylineOptions | IPolylineOptions[], fn?: () => void | null) => Promise<BaseResult>

    /**
    * 删除场景中所有的polyline
    *
    * @param fn
    */
    clear: (fn?: () => void | null) => Promise<BaseResult>


    /**
     * 
     * 删除一个或多个Polyline对象
     * 
     * @param ids 要删除的Polyline对象的ID或者ID数组（可以删除一个或者多个）
     * @param fn
     */
    delete: (ids: string | string[], fn?: () => void | null) => Promise<BaseResult>


    /**
     *focus(ids, distance, flyTime, rotation, fn)
    自动定位到合适的观察距离

    Parameters:
    Name	Type	Description
    
    ids	string | array	
    Polyline对象的ID或者ID数组

    distance	number	
    可选参数，观察点距离目标点（被拍摄物体）的距离，取值范围：[0.01~任意正数]，如果设置为0或者不设置，系统自动计算

    flyTime	number	
    可选参数，相机飞行的时间，取值范围：[0~任意正数]，单位：秒，默认值2秒

    rotation	array	
    可选参数，相机旋转的欧拉角：[Pitch,Yaw,Roll]，数组元素类型：(number)，取值范围：Pitch[-90~90] Yaw[-180~180] Roll[0]

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    focus: (ids: string | string[], distance?: number, flyTime?: number, rotation?: number[], fn?: () => void | null) => Promise<BaseResult>


    /**
     * get(ids, fn)
    根据ID获取Polyline的详细信息

    Parameters:
    Name	Type	Description

    ids	string | array	
    要获取的Polyline对象ID或者ID数组（可以获取一个或者多个）

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    get: (ids: string | string[], fn?: () => void | null) => Promise<BaseResult>


    /**
     * hide(ids, fn)
    隐藏Polyline

    Parameters:
    Name	Type	Description

    ids	string | array	
    Polyline对象的ID或者ID数组

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    hide: (ids: string | string[], fn?: () => void | null) => Promise<BaseResult>


    /**
     * hideAll(fn)
    隐藏所有Polyline

    Parameters:
    Name	Type	Description

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    hideAll: (fn?: () => void | null) => Promise<BaseResult>


    /**
     * setBrightness(id, newVal, fn)
    设置新的亮度

    Parameters:
    Name	Type	Description

    id	string	
    字符串类型的ID
    newVal	number	
    新值
    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    setBrightness: (id: string, newVal: number, fn?: () => void | null) => Promise<BaseResult>


    /**
     * setColor(id, newVal, fn)
    设置新的颜色值

    Parameters:
    Name	Type	Description

    id	string	
    字符串类型的ID

    newVal	Color	
    新颜色值，支持四种格式，取值示例

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    setColor: (id: string, newVal: EColor, fn?: () => void | null) => Promise<BaseResult>


    /**
     * setCoordinates(id, newVal, fn)
    设置坐标值

    Parameters:
    Name	Type	Description

    id	string	
    字符串类型的ID

    newVal	array	
    新坐标值，取值示例

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    setCoordinates: (id: string, newVal: number[], fn?: () => void | null) => Promise<BaseResult>


    /**
     * setDepth(id, newVal, fn)
    设置是否做深度检测

    Parameters:
    Name	Type	Description

    id	string	
    字符串类型的ID

    newVal	boolean	
    是否做深度检测

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    setDepth: (id: string, newVal: boolean, fn?: () => void | null) => Promise<BaseResult>


    /**
     * setFlowRate(id, newVal, fn)
    设置新的流速

    Parameters:
    Name	Type	Description

    id	string	
    字符串类型的ID

    newVal	number	
    新值

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    setFlowRate: (id: string, newVal: number, fn?: () => void | null) => Promise<BaseResult>


    /**
     * setShape(id, newVal, fn)
     设置shape新的样式
 
     Parameters:
     Name	Type	Description

     id	string	
     字符串类型的ID
 
     newVal	number	
     新值， 0： 直线， 1： 曲线
 
     fn	function	
     可选的回调函数，请参考二次开发：异步接口调用方式
     */
    setShape: (id: string, newVal: number, fn?: () => void | null) => Promise<BaseResult>


    /**
     * setStyle(id, newVal, fn)
    设置新的样式

    Parameters:
    Name	Type	Description

    id	string	
    字符串类型的ID

    newVal	number	
    PolylineStyle新样式，取值范围：[0~5]，参考 PolylineStyle

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
    */
    setStyle: (id: string, newVal: EPolylineStyle, fn?: () => void | null) => Promise<BaseResult>


    /**
     * setThickness(id, newVal, fn)
    设置新的厚度

    Parameters:
    Name	Type	Description

    id	string	
    字符串类型的ID

    newVal	number	
    新值

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    setThickness: (id: string, newVal: number, fn?: () => void | null) => Promise<BaseResult>


    /**
     * showAll(fn)
    显示所有Polyline

    Parameters:
    Name	Type	Description

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    show: (ids: string | string[], fn?: () => void | null) => Promise<BaseResult>


    /**
     * show(ids, fn)
    显示Polyline

    Parameters:
    Name	Type	Description

    ids	string | array	
    Polyline对象的ID或者ID数组

    fn	function	
    可选的回调函数，请参考二次开发：异步接口调用方式
     */
    showAll: (fn?: () => void | null) => Promise<BaseResult>


    /**
    * 更新一个或多个polyline对象
    *
    * ```ts
     __g.polyline.updateBegin();
   __g.polyline.setStyle('p1', PolylineStyle.Arrow);//折线样式
   __g.polyline.setColor('p1', Color.Yellow);
   __g.polyline.setThickness('p1', 10);
   __g.polyline.setBrightness('p1', 0.5);
   __g.polyline.setFlowRate('p1', 0.8);
   __g.polyline.setDepth('p1', true);//深度检测 会被地面高度遮挡
   __g.polyline.updateEnd();
   ```
    *
    */
    update: (data: IPolylineOptions | IPolylineOptions[], fn?: () => void | null) => Promise<BaseResult>


    /**
     * updateBegin()
     用于批量多次修改对象的属性
 
     在开始修改之前调用updateBegin，然后可以多次调用setXXX方法，最后调用updateEnd提交修改更新数据
     注意：
     updateBegin不是异步调用，不需要await，也没有回调函数参数
     *
     *```ts
     __g.xxx.updateBegin();
     for (let i = 0; i < 1000; i++) {
         __g.xxx.setColor(i, Color.Yellow);
     } 
     __g.xxx.updateEnd(function () {
         log('update finished!');
     });
     ```
     */
    updateBegin: () => void


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
    updateEnd: (fn?: () => void | null) => Promise<BaseResult>
}
