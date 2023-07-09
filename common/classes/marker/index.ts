import { IMarkerOptions } from './options'
import { BaseResult } from '../base/index'
import { EColor } from 'common/utils/common'
export interface IMarker {
    // TODO 写一行是为了，没有和最新的api同步，避免报错问题
    [key: string]: unknown | any
    /**
     * 添加一个或多个标注点 调用时注意：单次创建的Marker对象数量不要超过5000个，在一个工程内创建的Marker对象总数量不要超过20万个。
     * 
     *```ts
    let o1:IMarkerOptions = {
        id: 'm1',
        groupId: 'markerAdd',
        coordinate: [492693.75, 2491803.25, 20],//坐标位置
        coordinateType: 0,//默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
        anchors: [-25, 50],//锚点，设置Marker的整体偏移，取值规则和imageSize设置的宽高有关，图片的左上角会对准标注点的坐标位置。示例设置规则：x=-imageSize.width/2，y=imageSize.height
        imageSize: [50, 50],//图片的尺寸
        hoverImageSize: [50, 50],//鼠标悬停时显示的图片尺寸
        range: [1, 10000],//可视范围
        imagePath: HostConfig.Path + '/samples/images/tag.png',//显示图片路径
        hoverImagePath: HostConfig.Path + '/samples/images/hilightarea.png',// 鼠标悬停时显示的图片路径
        fixedSize: true,//图片固定尺寸，取值范围：false 自适应，近大远小，true 固定尺寸，默认值：false 

        text: '北京银行',//显示的文字 
        useTextAnimation: false,//关闭文字展开动画效果 打开会影响效率
        textRange: [1, 1000],//文本可视范围[近裁距离, 远裁距离]
        textOffset: [0, 0],// 文本偏移
        textBackgroundColor: Color.SpringGreen,//文本背景颜色
        fontSize: 24,//字体大小
        fontOutlineSize: 1,//字体轮廓线大小
        fontColor: Color.White,//字体颜色
        fontOutlineColor: Color.Black,//字体轮廓线颜色

        popupURL: HostConfig.Path + '/samples/popup/interact.html',//弹窗HTML链接
        popupBackgroundColor: [1.0, 1.0, 1.0, 0.5],//弹窗背景颜色
        popupSize: [300, 300],//弹窗大小
        popupOffset: [0, 0],//弹窗偏移

        showLine: true,//标注点下方是否显示垂直牵引线
        lineSize: [2, 100],//垂直牵引线宽度和高度[width, height]
        lineColor: Color.SpringGreen,//垂直牵引线颜色
        lineOffset: [0, 0],//垂直牵引线偏移

        autoHidePopupWindow: true,//失去焦点后是否自动关闭弹出窗口
        autoHeight: false,// 自动判断下方是否有物体
        displayMode: 4,//智能显示模式  开发过程中请根据业务需求判断使用四种显示模式 
        clusterByImage: true,// 聚合时是否根据图片路径分类，即当多个marker的imagePath路径参数相同时按路径对marker分类聚合
        priority: 0,//避让优先级
        occlusionCull: false//是否参与遮挡剔除
    };
    await __g.marker.add(o1);
    ```
     *
     * @param data 标注点的数据，可以是Object类型或者Array类型
     * @param fn 可选的回调函数
     */
    add: (data: IMarkerOptions | IMarkerOptions[], fn?: () => void | null) => Promise<BaseResult>

    /**
     * 删除场景中所有的标注
     *
     * @param fn 可选的回调函数
     */
    clear(fn?: () => void | null): Promise<BaseResult>

    /**
     * 删除一个或多个标注对象
     *
     * @param ids 要删除的标注对象的ID或者ID数组（可以删除一个或者多个）
     * @param fn 可选的回调函数
     */
    delete(ids: string | string[], fn?: () => void | null): Promise<BaseResult>

    /**
     * 根据分组ID删除Marker
     *
     * @param groupId Marker创建时指定的分组ID
     * @param fn 可选的回调函数
     */
    deleteByGroupId(groupId: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 自动定位到合适的观察距离
     *
     * @param ids 标注对象的ID或者ID数组
     * @param distance 可选参数，观察点距离目标点（被拍摄物体）的距离，取值范围：[0.01~任意正数]，如果设置为0或者不设置，系统自动计算
     * @param flyTime 可选参数，相机飞行的时间，取值范围：[0~任意正数]，单位：秒，默认值2秒
     * @param rotation 可选参数，相机旋转的欧拉角：[Pitch,Yaw,Roll]，数组元素类型：(number)，取值范围：Pitch[-90~90] Yaw[-180~180] Roll[0]
     * @param fn 可选的回调函数
     */
    focus(ids: string | string[], distance?: number, flyTime?: number, rotation?: [number, number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 自动定位到能观察所有Marker对象的合适距离
     *
     * @param distance 可选参数，观察点距离目标点（被拍摄物体）的距离，取值范围：[0.01~任意正数]，如果设置为0或者不设置，系统自动计算
     * @param flyTime 可选参数，相机飞行的时间，取值范围：[0~任意正数]，单位：秒，默认值2秒
     * @param rotation 可选参数，相机旋转的欧拉角：[Pitch,Yaw,Roll]，数组元素类型：(number)，取值范围：Pitch[-90~90] Yaw[-180~180] Roll[0]
     * @param fn 可选的回调函数
     */
    focusAll(distance?: number, flyTime?: number, rotation?: [number, number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 根据ID获取标注的详细信息
     *
     * @param ids 要获取的标注对象ID或者ID数组（可以获取一个或者多个）
     * @param fn 可选的回调函数
     */
    get(ids: string | string[], fn?: () => void | null): Promise<BaseResult>

    /**
     * 隐藏标注
     *
     * @param ids 标注对象的ID或者ID数组
     * @param fn 可选的回调函数
     */
    hide(ids: string | string[], fn?: () => void | null): Promise<BaseResult>

    /**
     * 隐藏所有标注
     *
     * @param fn 可选的回调函数
     */
    hideAll(fn?: () => void | null): Promise<BaseResult>

    /**
     * 隐藏所有标注的弹出窗口
     *
     * @param fn 可选的回调函数
     */
    hideAllPopupWindow(fn?: () => void | null): Promise<BaseResult>

    /**
     * 根据分组ID隐藏Marker
     *
     * @param groupId Marker创建时指定的分组ID
     * @param fn 可选的回调函数
     */
    hideByGroupId(groupId: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 隐藏指定标注的弹出窗口
     *
     * @param ids 标注对象的ID或者ID数组
     * @param fn 可选的回调函数
     */
    hidePopupWindow(ids: string | string[], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注的整体偏移量（修改锚点）
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 锚点新值
     * @param fn 可选的回调函数
     */
    setAnchors(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
   * 设置标注Marker贴合模型对象CustomObject或车辆载具Vehicel，设置后Marker会跟随模型运动
   *
   * @param data 自定义对象和标注映射数据，可以是Object类型或者Array类型，对于每一个映射对象，支持以下属性：

markerId (string) 标注Marker对象id

objectId (string) 贴合的CustomObject自定义对象id或车辆载具Vehicel的id

offset (array) 坐标偏移量，[X,Y,Z]
   * @param fn 可选的回调函数
   */
    setAttachCustomObject(data: string | [number, number, number] | string[] | [number, number, number][], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置是否自动关闭标注的弹出窗口
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 是否显示垂直牵引线
     * @param fn 可选的回调函数
     */
    setAutoHidePopupWindow(id: string, newVal: boolean, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注的位置
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setCoordinate(id: string, newVal: [number, number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注文本颜色
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新颜色值，支持四种格式
     * @param fn 可选的回调函数
     */
    setFontColor(id: string, newVal: EColor, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置字体轮廓线颜色
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新颜色值，支持四种格式
     * @param fn 可选的回调函数
     */
    setFontOutlineColor(id: string, newVal: EColor, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置字体轮廓线大小
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setFontOutlineColor(id: string, newVal: number, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置字体大小
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setFontSize(id: string, newVal: number, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置分组
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setGroupId(id: string, newVal: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置鼠标悬停时显示的图片路径
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setHoverImagePath(id: string, newVal: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注的图片
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setImagePath(id: string, newVal: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注图片的大小
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新的尺寸
     * @param fn 可选的回调函数
     */
    setImageSize(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置LineColor
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新颜色值，支持四种格式
     * @param fn 可选的回调函数
     */
    setLineColor(id: string, newVal: EColor, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置LineOffset
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setLineOffset(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置LineSize
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setLineSize(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置是否参与遮挡剔除
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setOcclusionCull(id: string, newVal: boolean, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置弹窗偏移: [x, y]
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setPopupOffset(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置弹窗大小: [width, height]
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setPopupSize(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置弹窗HTML链接
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setPopupURL(id: string, newVal: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置避让优先级
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setPriority(id: string, newVal: number, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注的可见范围
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新的可见范围值
     * @param fn 可选的回调函数
     */
    setRange(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注的文本
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setText(id: string, newVal: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注文本的背景颜色
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新颜色值，支持四种格式
     * @param fn 可选的回调函数
     */
    setTextBackgroundColor(id: string, newVal: EColor, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置文本偏移
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setTextOffset(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置文本可视范围: [近裁距离, 远裁距离]
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setTextRange(id: string, newVal: [number, number], fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置标注的URL
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setURL(id: string, newVal: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 设置用户数据
     *
     * @param id 标注的唯一标识符ID
     * @param newVal 新值
     * @param fn 可选的回调函数
     */
    setUserData(id: string, newVal: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 显示标注
     *
     * @param ids 标注对象的ID或者ID数组
     * @param fn 可选的回调函数
     */
    show(ids: string | string[], fn?: () => void | null): Promise<BaseResult>

    /**
     * 显示所有标注
     *
     * @param fn 可选的回调函数
     */
    showAll(fn?: () => void | null): Promise<BaseResult>

    /**
     * 显示所有标注的弹出窗口
     *
     * @param fn 可选的回调函数
     */
    showAllPopupWindow(fn?: () => void | null): Promise<BaseResult>

    /**
     * 根据分组ID显示Marker
     *
     * @param groupId Marker创建时指定的分组ID
     * @param fn 可选的回调函数
     */
    showByGroupId(groupId: string, fn?: () => void | null): Promise<BaseResult>

    /**
     * 显示指定标注的弹出窗口
     *
     * @param ids 标注对象的ID或者ID数组
     * @param fn 可选的回调函数
     */
    showPopupWindow(ids: string | string[], fn?: () => void | null): Promise<BaseResult>

    /**
     * 修改一个或多个标注对象
     *
     * @param data 标注点的数据，参考add方法
     * @param fn 可选的回调函数
     */
    update(data: IMarkerOptions | IMarkerOptions[], fn?: () => void | null): Promise<BaseResult>
}
