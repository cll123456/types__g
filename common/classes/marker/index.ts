import { IMarkerOptions } from './options'
import { BaseResult } from '../base/index'
import { EColor } from 'common/utils/common'
export interface IMarker {
    // TODO 写一行是为了，没有和最新的api同步，避免报错问题
    [key: string]: unknown | any
    /**
     * 添加一个或多个标注点 调用时注意：单次创建的Marker对象数量不要超过5000个，在一个工程内创建的Marker对象总数量不要超过20万个。
     *
     * @param data 标注点的数据，可以是Object类型或者Array类型
     * @param fn
     * @returns
     */
    add: (data: IMarkerOptions | IMarkerOptions[], fn?: () => void | null) => Promise<BaseResult>

    /**
     * 删除场景中所有的标注
     *
     * @param fn
     */
    clear(fn?: () => void | null): Promise<BaseResult>

    /**
     * 删除一个或多个标注对象
     *
     * @param ids 要删除的标注对象的ID或者ID数组（可以删除一个或者多个）
     * @param fn
     */
    delete(ids: string | string[], fn?: () => void | null): Promise<BaseResult>

    /**
     * 根据分组ID删除Marker
     *
     * @param groupId Marker创建时指定的分组ID
     * @param fn
     */
    deleteByGroupId(groupId: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 自动定位到合适的观察距离
     *
     * @param ids 标注对象的ID或者ID数组
     * @param distance 可选参数，观察点距离目标点（被拍摄物体）的距离，取值范围：[0.01~任意正数]，如果设置为0或者不设置，系统自动计算
     * @param flyTime 可选参数，相机飞行的时间，取值范围：[0~任意正数]，单位：秒，默认值2秒
     * @param rotation 可选参数，相机旋转的欧拉角：[Pitch,Yaw,Roll]，数组元素类型：(number)，取值范围：Pitch[-90~90] Yaw[-180~180] Roll[0]
     * @param fn
     */
    focus(ids: string | string[], distance?: number, flyTime?: number, rotation?: [number, number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 自动定位到能观察所有Marker对象的合适距离
     *
     * @param distance 可选参数，观察点距离目标点（被拍摄物体）的距离，取值范围：[0.01~任意正数]，如果设置为0或者不设置，系统自动计算
     * @param flyTime 可选参数，相机飞行的时间，取值范围：[0~任意正数]，单位：秒，默认值2秒
     * @param rotation 可选参数，相机旋转的欧拉角：[Pitch,Yaw,Roll]，数组元素类型：(number)，取值范围：Pitch[-90~90] Yaw[-180~180] Roll[0]
     * @param fn
     */
    focusAll(distance?: number, flyTime?: number, rotation?: [number, number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 根据ID获取标注的详细信息
     *
     * @param ids 要获取的标注对象ID或者ID数组（可以获取一个或者多个）
     * @param fn
     */
    get(ids: string | string[], fn?: () => void | null): Promise<BaseResult>

    /**
     * 隐藏标注
     *
     * @param ids 标注对象的ID或者ID数组
     * @param fn
     */
    hide(ids: string | string[], fn?: () => void | null): Promise<BaseResult>

    /**
     * 隐藏所有标注
     *
     * @param fn
     */
    hideAll(fn?: () => void | null): Promise<BaseResult>

    /**
     * 隐藏所有标注的弹出窗口
     *
     * @param fn
     */
    hideAllPopupWindow(fn?: () => void | null): Promise<BaseResult>

    /**
     * 根据分组ID隐藏Marker
     *
     * @param groupId Marker创建时指定的分组ID
     * @param fn
     */
    hideByGroupId(groupId: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 隐藏指定标注的弹出窗口
     *
     * @param ids 标注对象的ID或者ID数组
     * @param fn
     */
    hidePopupWindow(ids: string | string[], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注的整体偏移量（修改锚点）
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 锚点新值
     * @param fn
     */
    setAnchors(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
   * 设置标注Marker贴合模型对象CustomObject或车辆载具Vehicel，设置后Marker会跟随模型运动
   *
   * @param data 自定义对象和标注映射数据，可以是Object类型或者Array类型，对于每一个映射对象，支持以下属性：

markerId (string) 标注Marker对象id

objectId (string) 贴合的CustomObject自定义对象id或车辆载具Vehicel的id

offset (array) 坐标偏移量，[X,Y,Z]
   * @param fn
   */
    setAttachCustomObject(data: string | [number, number, number] | string[] | [number, number, number][], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置是否自动关闭标注的弹出窗口
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 是否显示垂直牵引线
     * @param fn
     */
    setAutoHidePopupWindow(id: string, newVal: boolean, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注的位置
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setCoordinate(id: string, newVal: [number, number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注文本颜色
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新颜色值，支持四种格式
     * @param fn
     */
    setFontColor(id: string, newVal: EColor, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置字体轮廓线颜色
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新颜色值，支持四种格式
     * @param fn
     */
    setFontOutlineColor(id: string, newVal: EColor, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置字体轮廓线大小
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setFontOutlineColor(id: string, newVal: number, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置字体大小
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setFontSize(id: string, newVal: number, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置分组
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setGroupId(id: string, newVal: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置鼠标悬停时显示的图片路径
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setHoverImagePath(id: string, newVal: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注的图片
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setImagePath(id: string, newVal: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注图片的大小
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新的尺寸
     * @param fn
     */
    setImageSize(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置LineColor
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新颜色值，支持四种格式
     * @param fn
     */
    setLineColor(id: string, newVal: EColor, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置LineOffset
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setLineOffset(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置LineSize
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setLineSize(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置是否参与遮挡剔除
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setOcclusionCull(id: string, newVal: boolean, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置弹窗偏移: [x, y]
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setPopupOffset(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置弹窗大小: [width, height]
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setPopupSize(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置弹窗HTML链接
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setPopupURL(id: string, newVal: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置避让优先级
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setPriority(id: string, newVal: number, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注的可见范围
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新的可见范围值
     * @param fn
     */
    setRange(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注的文本
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setText(id: string, newVal: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注文本的背景颜色
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新颜色值，支持四种格式
     * @param fn
     */
    setTextBackgroundColor(id: string, newVal: EColor, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置文本偏移
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setTextOffset(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置文本可视范围: [近裁距离, 远裁距离]
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setTextRange(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注的URL
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setURL(id: string, newVal: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置用户数据
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn
     */
    setUserData(id: string, newVal: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 显示标注
     *
     * @param ids 标注对象的ID或者ID数组
     * @param fn
     */
    show(ids: string | string[], fn?: () => void | null): Promise<BaseResult>

    /**
     * 显示所有标注
     *
     * @param fn
     */
    showAll(fn?: () => void | null): Promise<BaseResult>

    /**
     * 显示所有标注的弹出窗口
     *
     * @param fn
     */
    showAllPopupWindow(fn?: () => void | null): Promise<BaseResult>

    /**
     * 根据分组ID显示Marker
     *
     * @param groupId Marker创建时指定的分组ID
     * @param fn
     */
    showByGroupId(groupId: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 显示指定标注的弹出窗口
     *
     * @param ids 标注对象的ID或者ID数组
     * @param fn
     */
    showPopupWindow(ids: string | string[], fn?: () => void | null): Promise<BaseResult>

    /**
     * 修改一个或多个标注对象
     *
     * @param data 标注点的数据，参考add方法
     * @param fn
     */
    update(data: IMarkerOptions | IMarkerOptions[], fn?: () => void | null): Promise<BaseResult>
}
