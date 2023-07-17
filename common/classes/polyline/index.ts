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
    add: (data: IPolylineOptions | IPolylineOptions[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 删除场景中所有的polyline
     *
     * @param fn
     */
    clear: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     *
     * 删除一个或多个Polyline对象
     *
     * @param ids 要删除的Polyline对象的ID或者ID数组（可以删除一个或者多个）
     * @param fn
     */
    delete: (ids: string | string[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 自动定位到合适的观察距离
     *
     * @param ids
     * @param distance
     * @param flyTime
     * @param rotation
     * @param fn
     * @returns
     */
    focus: (ids: string | string[], distance?: number, flyTime?: number, rotation?: number[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 根据ID获取Polyline的详细信息
     *
     * @param ids
     * @param fn
     * @returns
     */
    get: (ids: string | string[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 隐藏Polyline
     *
     * @param ids
     * @param fn
     * @returns
     */
    hide: (ids: string | string[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 隐藏所有Polyline
     *
     * @param fn
     * @returns
     */
    hideAll: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置新的亮度
     *
     * @param id
     * @param newVal
     * @param fn
     * @returns
     */
    setBrightness: (id: string, newVal: number, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置新的颜色值
     *
     * @param id
     * @param newVal
     * @param fn
     * @returns
     */
    setColor: (id: string, newVal: EColor, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置坐标值
     *
     * @param id
     * @param newVal
     * @param fn
     * @returns
     */
    setCoordinates: (id: string, newVal: number[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置是否做深度检测
     *
     * @param id
     * @param newVal
     * @param fn
     * @returns
     */
    setDepth: (id: string, newVal: boolean, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置新的流速
     *
     * @param id
     * @param newVal
     * @param fn
     * @returns
     */
    setFlowRate: (id: string, newVal: number, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置shape新的样式
     *
     * @param id
     * @param newVal
     * @param fn
     * @returns
     */
    setShape: (id: string, newVal: number, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置新的样式
     *
     * @param id
     * @param newVal
     * @param fn
     * @returns
     */
    setStyle: (id: string, newVal: EPolylineStyle, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置新的厚度
     *
     * @param id
     * @param newVal
     * @param fn
     * @returns
     */
    setThickness: (id: string, newVal: number, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 显示所有Polyline
     *
     * @param ids
     * @param fn
     * @returns
     */
    show: (ids: string | string[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 显示Polyline
     *
     * @param fn
     * @returns
     */
    showAll: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 更新一个或多个polyline对象
     *
     * @param data
     * @param fn
     * @returns
     */
    update: (data: IPolylineOptions | IPolylineOptions[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     *  用于批量多次修改对象的属性
 
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
     * 用于批量多次修改对象的属性，与updateBegin配套使用
     *
     * @param fn
     */
    updateEnd: (fn?: (() => void) | null) => Promise<BaseResult>
}
