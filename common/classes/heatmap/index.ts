import { BaseResult } from '../base/index'
export interface IHeatmap {
    // TODO 写一行是为了，没有和最新的api同步，避免报错问题
    [key: string]: unknown | any
    /**
     * 添加HeatMap
     * 
     *```ts
    let bbox = [488670.75, 2488165, 5.7, 491659.59375, 2490987.5, 344.58];
    let range = [0, 100];
    let data = [];
    for (let i = 0; i < 100; i++) {
        let x = getRandNumBetween(bbox[0], bbox[3]);    //minX ~ maxX
        let y = getRandNumBetween(bbox[1], bbox[4]);    //minY ~ maxY
        data.push({
            id: i.toString(),
            coordinate: [x, y, 0],                 //热力点的坐标
            radius: Math.random() * 200,           //热力点影像半径范围
            heatValue: Math.random() * 100        //热力值
        });
    }
    await __g.heatmap.add('heatmap1', bbox, range, data);
    ```
     *
     * @param id 字符串类型的ID
     * @param groupId 可选，Group分组Id
     * @param userData 可选，用户自定义数据
     * @param bbox 热力点坐标的范围：[minX,minY,minZ,maxX,maxY,maxZ]，数组元素类型：[任意浮点数]
     * @param range 热力值的范围：[min,max]，数组元素类型：[任意浮点数]
     * @param data 点数据，（注意：点的heatValue取值要在range所设定的范围内），对于每个点，支持以下属性：

id (string) 字符串类型的ID

coordinate (array) 热力点坐标，取值示例

radius (number) 热力点影像半径范围，取值范围：[任意数值]

heatValue (number) 热力值，取值范围：[range参数设定范围内的任意数值]
     * @param style 可选参数，热力图样式枚举，详情参考 HeatMapStyle

Normal	number	-1	
普通热力图

CustomColor	number	0	
自定义颜色热力图

CustomWave	number	1	
波峰波谷热力图
     * @param textureSize style=0或1时参数生效，纹理大小，默认值：1024，取值范围：[128~4096]，注意：值越大纹理越清晰但创建越耗时
     * @param opacityMode style=0或1时参数生效，不透明度模式，默认值：1，取值范围：0：使用自定义色卡颜色的不透明度 1：使用热力点的不透明度
     * @param opacityRange style=0或1时参数生效，不透明度范围，默认值：[0~1.0]，注意：仅opacityMode为1时有效
     * @param blur style=0或1时参数生效，热力点模糊因子，默认值：0.85，注意：模糊系数越高，渐变越平滑，取值范围：[0~1.0]
     * @param colors style=0或1时参数生效，自定义颜色卡区间数组，包含渐变控制参数、无效点颜色和颜色数组

gradient (boolean) 是否渐变

invalidColor (array) 无效像素点的默认颜色，默认白色

colorStops (array) 色卡数组 [{"value":0, "color":[0,0,1,1]}]
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    add: (id: string, bbox: [number, number, number, number, number, number], range: number[], data: { id: string; coordinate: number[]; radius: number; heatValue: number }[], groupId?: string, userData?: string, style?: number, textureSize?: number, opacityMode?: number, opacityRange?: number[], blur?: number, colors?: { gradient: boolean; invalidColor: [number, number, number, number]; colorStops: { value: number; color: [number, number, number, number] }[] }, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 为HeatMap添加热力点
     *
     * @param id HeatMap的ID
     * @param data 热力点(可以是单个或数组,数据结构请参考add方法)
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    addPoints: (id: string, data: { id: string; coordinate: number[]; radius: number; heatValue: number }[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 删除场景中所有的HeatMap
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    clear: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 删除一个或多个HeatMap对象
     *
     * @param ids 要删除的HeatMap对象的ID或者ID数组（可以删除一个或者多个）
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    delete: (ids: string | string[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 自动定位到合适的观察距离
     *
     * @param ids HeatMap对象的ID或者ID数组
     * @param distance 可选参数，观察点距离目标点（被拍摄物体）的距离，取值范围：[0.01~任意正数]，如果设置为0或者不设置，系统自动计算
     * @param flyTime 可选参数，相机飞行的时间，取值范围：[0~任意正数]，单位：秒，默认值2秒
     * @param rotation 可选参数，相机旋转的欧拉角：[Pitch,Yaw,Roll]，数组元素类型：(number)，取值范围：Pitch[-90~90] Yaw[-180~180] Roll[0]
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    focus: (ids: string | string[], distance?: number, flyTime?: number, rotation?: number[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 根据ID获取HeatMap的详细信息
     *
     * @param ids 要获取的HeatMap对象ID或者ID数组（可以获取一个或者多个）
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    get: (ids: string | string[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 隐藏HeatMap
     *
     * @param ids HeatMap对象的ID或者ID数组
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    hide: (ids: string | string[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 为HeatMap移除热力点
     *
     * @param id HeatMap的ID
     * @param pointIds 热力点ID（单个或数组）
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    removePoints: (id: string, pointIds: string | string[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置BoundingBox 热力点坐标的范围
     *
     * @param id HeatMap的ID
     * @param newVal 热力点坐标的范围：[minX,minY,minZ,maxX,maxY,maxZ]，数组元素类型：[任意浮点数]
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    setBBox: (id: string, newVal: [number, number, number, number, number, number], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置热力值的范围
     *
     * @param id HeatMap的ID
     * @param newVal 热力值的范围：[min,max]，数组元素类型：[任意浮点数]
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    setRange: (id: string, newVal: number[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 显示HeatMap
     *
     * @param ids HeatMap对象的ID或者ID数组
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    show: (ids: string | string[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 修改HeatMap
     *
     * @param id 字符串类型的ID
     * @param bbox 热力点坐标的范围，数据结构参考add方法，如果不想更新bbox，可将此参数设置为undefined或者null
     * @param range 热力值的范围，数据结构参考add方法，如果不想更新range，可将此参数设置为undefined或者null
     * @param data 点数据，数据结构请参考add方法，如果不想更新data，可将此参数设置为undefined或者null。
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    update: (id: string, bbox: [number, number, number, number, number, number], range: number[], data: { id: string; coordinate: number[]; radius: number; heatValue: number }[], fn?: (() => void) | null) => Promise<BaseResult>
}
