import { IMarker3DOptions } from './options'
import { BaseResult } from '../base/index'
export interface IMarker3d {
    // TODO 写一行是为了，没有和最新的api同步，避免报错问题
    [key: string]: unknown | any
    /**
     * 添加一个或多个动态标记
     * 
     *```ts
    let o = {
        'id': 'm1',
        'groupId': 'marker3dTest',
        'text': 'Building No.1',//3D标注显示文字
        'textSize': 32,//3D标注显示文字大小
        'textColor': '#6BF4F7',//3D标注显示文字颜色
        'textOutlineSize': 1,//3D标注显示文字轮廓大小
        'textOutlineColor': Color.Black,// 3D标注显示文字轮廓颜色
        'textFixed': true,// 3D标注显示文字是否固定文本朝向
        'textVisible': true,//3D标注显示文字是否显示文本
        'textLocation': [0, 0, 0],// 文字位置
        'textRotation': [0, 90, 0],// 文字旋转
        'textScale': [10, 10, 10],// 文字缩放
        'pointName': 'Point_B_5',//3D标注展示的特效名称
        'pointVisible': true,//3D标注是否显示
        'pointScale': 5,//3D标注整体缩放比例
        'coordinate': [492847.15625, 2491823, 108], //3D标注的坐标位置 注意：若坐标Z设置高度为0时 autoHeight=true则会显示在物体上方
        'coordinateType': 0, //坐标系类型 
        'range': [1, 10000], //3D标注的可视距离范围：[min,max]，单位：米
        'autoHeight': false//自动判断下方是否有物体，设置正确高度，默认值：false
    }
    await __g.marker3d.add(o);
    ```
     *
     * @param data 动态标记的数据，可以是Object类型或者Array类型
     * @param fn 可选的回调函数
     */
    add: (data: IMarker3DOptions | IMarker3DOptions[], fn?: () => void | null) => Promise<BaseResult>

    /**
     * 清空场景中所有的3D标注
     *
     * @param fn 可选的回调函数
     */
    clear: (fn?: () => void | null) => Promise<BaseResult>

    /**
     * 删除一个或多个3D标注对象
     *
     * @param ids 要删除的3D标注对象的ID或者ID数组（可以删除一个或者多个）
     * @param fn 可选的回调函数
     */
    delete: (ids: string | string[], fn?: () => void | null) => Promise<BaseResult>

    /**
     * 根据分组ID删除动态标注
     *
     * @param ids 要删除的3D标注对象的ID或者ID数组（可以删除一个或者多个）
     * @param fn 可选的回调函数
     */
    deleteByGroupId: (groupId: string, fn?: () => void | null) => Promise<BaseResult>

    /**
     * 自动定位到合适的观察距离
     *
     * @param ids 3D标注对象的ID或者ID数组
     * @param distance 可选参数，观察点距离目标点（被拍摄物体）的距离，取值范围：[0.01~任意正数]，如果设置为0或者不设置，系统自动计算
     * @param flyTime 可选参数，相机飞行的时间，取值范围：[0~任意正数]，单位：秒，默认值2秒
     * @param rotation 可选参数，相机旋转的欧拉角：[Pitch,Yaw,Roll]，数组元素类型：(number)，取值范围：Pitch[-90~90] Yaw[-180~180] Roll[0]
     * @param fn 可选的回调函数
     */
    focus(ids: string | string[], distance?: number, flyTime?: number, rotation?: [number, number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 根据ID获取3D标注的详细信息
     *
     * @param ids 要获取的3D标注对象ID或者ID数组（可以获取一个或者多个）
     * @param fn 可选的回调函数
     */
    get(ids: string | string[], fn?: () => void | null): Promise<BaseResult>

    /**
     * 隐藏3D标注
     *
     * @param ids 3D标注对象的ID或者ID数组
     * @param fn 可选的回调函数
     */
    hide(ids: string | string[], fn?: () => void | null): Promise<BaseResult>

    /**
     * 隐藏所有3D标注
     *
     * @param fn 可选的回调函数
     */
    hideAll(fn?: () => void | null): Promise<BaseResult>

    /**
     * 根据分组ID隐藏动态标注
     *
     * @param groupId 动态标注创建时指定的分组ID
     * @param fn 可选的回调函数
     */
    hideByGroupId(groupId: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 显示3D标注
     *
     * @param ids 3D标注对象的ID或者ID数组
     * @param fn 可选的回调函数
     */
    show(ids: string | string[], fn?: () => void | null): Promise<BaseResult>

    /**
     * 显示所有3D标注
     *
     * @param fn 可选的回调函数
     */
    showAll(fn?: () => void | null): Promise<BaseResult>

    /**
     * 根据分组ID显示动态标注
     *
     * @param groupId 动态标注创建时指定的分组ID
     * @param fn 可选的回调函数
     */
    showByGroupId(groupId: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 修改一个或多个3D标注对象
     *
     * @param data 3D标注点的数据，参考add方法
     * @param fn 可选的回调函数
     */
    update(data: IMarker3DOptions | IMarker3DOptions[], fn?: () => void | null): Promise<BaseResult>
}
