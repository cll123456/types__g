import { EColor } from 'common/utils/common'
import { BaseOptions } from '../base/index'

/**
 * id (string) 标注点的唯一标识符

groupId (string) 可选，Group分组

userData (string) 可选，用户自定义数据

coordinateType (number) 坐标系类型，取值范围：0为Projection类型，1为WGS84类型，2为火星坐标系(GCJ02)，3为百度坐标系(BD09)，默认值：0

coordinate (array) 标注点的位置坐标: [x, y, z]，取值示例

anchors (array) 锚点: [x, y]，设置Marker的整体偏移，取值规则和imageSize设置的宽高有关，图片的左上角会对准标注点的坐标位置。示例设置规则：x=-imageSize.width/2，y=imageSize.height

range (array) 可视范围: [近裁距离, 远裁距离]，默认值: [10, 10000]

textRange (array) 文本可视范围: [近裁距离, 远裁距离]，默认值: [100, 6000]

imageSize (array) 图片的尺寸: [width, height]， 默认值[32,32]

fixedSize (boolean) 图片是否固定尺寸，取值范围：false 自适应，近大远小，true 固定尺寸，默认值：false

imagePath (string) 图片路径，支持gif动图，支持本地路径和网络路径，资源引入说明

hoverImagePath (string) 鼠标悬停时显示的图片路径，支持gif动图，支持本地路径和网络路径，资源引入说明

hoverImageSize (array) 鼠标悬停时显示的图片尺寸: [width, height]， 默认值：[0,0] 使用图片自身的尺寸，注意：如果设置的值比imageSize尺寸小，则默认使用imageSize的尺寸。

text (string) 显示的文字

useTextAnimation (boolean) 是否打开文字展开动画效果，默认值：true

textOffset (array) 文本偏移: [x, y]，默认值：[0,0]

fontSize (number) 字体大小，默认值：12

fontOutlineSize (number) 字体轮廓线大小，默认值：1

textBackgroundColor (Color) 文本背景颜色，默认值白色[1, 1, 1, 0.85]，支持四种格式，取值示例

fontColor (Color) 字体颜色，默认值：黑色Color.Black，支持四种格式，取值示例

fontOutlineColor (Color) 字体轮廓线颜色，默认值：黑色Color.Black，支持四种格式，取值示例

popupBackgroundColor (Color) 弹窗背景颜色， [1.0,1.0,1.0,0.1] ，支持四种格式，取值示例

popupURL (string) 弹窗HTML链接或者视频文件路径，也支持rtsp协议实时视频流，资源引入说明

popupSize (array) 弹窗大小: [width, height]，默认值：[600,400]

popupOffset (array) 弹窗偏移: [x, y]，默认值：[0,0]

showLine (boolean) 标注点下方是否显示垂直牵引线，默认不显示：false

lineSize (array) 牵引线粗细[width, height]，默认值：[0,0]，如果要显示牵引线，需要将该属性设置成非0值

lineColor (Color) 牵引线颜色，默认值：白色，支持四种格式，取值示例

lineOffset (array) 牵引线偏移: [x, y]，默认值：[0,0]

autoHidePopupWindow (boolean) 是否自动关闭弹出窗口，默认值：true

autoHeight (boolean) 自动判断下方是否有物体，设置正确高度，默认值：false

displayMode (number) 显示模式，默认值：4，取值说明如下：

0：相机移动不显示，参与避让聚合

1：相机移动时显示，参与避让聚合

2：相机移动时显示，不参与避让聚合

3：相机移动时不显示，不参与避让聚合

4：智能模式，根据当前相机高度自动适配以上模式，类似金字塔lod加载效果，内置默认规则:range范围的1%内取值2，大于1%小于10%取值1，大于10%取值0

autoDisplayModeSwitchFirstRatio (number) 智能模式时的显示模式切换时range参数的首段比例，仅在displayMode=4时生效，取值范围：[0.01~1.0)，默认值0.01，示例：如果range=[1,1000]，则在[1,10]范围内dislayMode=2

autoDisplayModeSwitchSecondRatio (number) 智能模式时的显示模式切换时range参数的第二段比例，仅在displayMode=4时生效，取值范围：[0.01~1.0)，默认值0.1，示例：如果range=[1,1000]，则在[10,100]范围内dislayMode=1，大于100则dislayMode=1

clusterByImage (boolean) 聚合时是否根据图片路径(imagePath)分类聚合显示，即当多个marker的imagePath路径参数相同时按路径对marker分类聚合

priority (number) 避让优先级，默认值：0

occlusionCull (boolean) 是否参与遮挡剔除
 */
export interface IMarkerOptions extends BaseOptions {
    /**
     * 坐标系类型，取值范围：0为Projection类型，1为WGS84类型，2为火星坐标系(GCJ02)，3为百度坐标系(BD09)，默认值：0
     */
    coordinateType?: number
    /**
     * 标注点的位置坐标: [x, y, z]
     */
    coordinate?: [number, number, number]
    /**
     *  锚点: [x, y]，设置Marker的整体偏移，取值规则和imageSize设置的宽高有关，图片的左上角会对准标注点的坐标位置。示例设置规则：x=-imageSize.width/2，y=imageSize.height
     */
    anchors?: [number, number]
    /**
     * 可视范围: [近裁距离, 远裁距离]，默认值: [10, 10000]
     */
    range?: [number, number]
    /**
     * 文本可视范围: [近裁距离, 远裁距离]，默认值: [100, 6000]
     */
    textRange?: [number, number]
    /**
     * 图片的尺寸: [width, height]， 默认值[32,32]
     */
    imageSize?: [number, number]
    /**
     * 图片是否固定尺寸，取值范围：false 自适应，近大远小，true 固定尺寸，默认值：false
     */
    fixedSize?: boolean
    /**
     * 图片路径，支持gif动图，支持本地路径和网络路径
     */
    imagePath?: string
    /**
     * 鼠标悬停时显示的图片路径，支持gif动图，支持本地路径和网络路径
     */
    hoverImagePath?: string
    /**
     * 鼠标悬停时显示的图片尺寸: [width, height]， 默认值：[0,0] 使用图片自身的尺寸，注意：如果设置的值比imageSize尺寸小，则默认使用imageSize的尺寸。
     */
    hoverImageSize?: [number, number]
    /**
     * 显示的文字
     */
    text?: string
    /**
     * 是否打开文字展开动画效果，默认值：true
     */
    useTextAnimation?: boolean
    /**
     * 文本偏移: [x, y]，默认值：[0,0]
     */
    textOffset?: [number, number]
    /**
     * 字体大小，默认值：12
     */
    fontSize?: number
    /**
     * 字体轮廓线大小，默认值：1
     */
    fontOutlineSize?: number
    /**
     * 文本背景颜色，默认值白色[1, 1, 1, 0.85]，支持四种格式
     */
    textBackgroundColor?: EColor
    /**
     * 字体颜色，默认值：黑色Color.Black，支持四种格式
     */
    fontColor?: EColor
    /**
     * 字体轮廓线颜色，默认值：黑色Color.Black，支持四种格式
     */
    fontOutlineColor?: EColor
    /**
     * 弹窗背景颜色， [1.0,1.0,1.0,0.1] ，支持四种格式
     */
    popupBackgroundColor?: EColor
    /**
     * 弹窗HTML链接或者视频文件路径，也支持rtsp协议实时视频流
     */
    popupURL?: string
    /**
     * 弹窗大小: [width, height]，默认值：[600,400]
     */
    popupSize?: [number, number]
    /**
     * 弹窗偏移: [x, y]，默认值：[0,0]
     */
    popupOffset?: [number, number]
    /**
     * 标注点下方是否显示垂直牵引线，默认不显示：false
     */
    showLine?: boolean
    /**
     * 牵引线粗细[width, height]，默认值：[0,0]，如果要显示牵引线，需要将该属性设置成非0值
     */
    lineSize?: [number, number]
    /**
     * 牵引线颜色，默认值：白色，支持四种格式
     */
    lineColor?: EColor
    /**
     * 牵引线偏移: [x, y]，默认值：[0,0]
     */
    lineOffset?: [number, number]
    /**
     * 是否自动关闭弹出窗口，默认值：true
     */
    autoHidePopupWindow?: boolean
    /**
     * 自动判断下方是否有物体，设置正确高度，默认值：false
     */
    autoHeight?: boolean
    /**
   * 显示模式，默认值：4，取值说明如下：

0：相机移动不显示，参与避让聚合

1：相机移动时显示，参与避让聚合

2：相机移动时显示，不参与避让聚合

3：相机移动时不显示，不参与避让聚合

4：智能模式，根据当前相机高度自动适配以上模式，类似金字塔lod加载效果，内置默认规则:range范围的1%内取值2，大于1%小于10%取值1，大于10%取值0
   */
    displayMode?: number
    /**
     * 智能模式时的显示模式切换时range参数的首段比例，仅在displayMode=4时生效，取值范围：[0.01~1.0)，默认值0.01，示例：如果range=[1,1000]，则在[1,10]范围内dislayMode=2
     */
    autoDisplayModeSwitchFirstRatio?: number
    /**
     * 智能模式时的显示模式切换时range参数的第二段比例，仅在displayMode=4时生效，取值范围：[0.01~1.0)，默认值0.1，示例：如果range=[1,1000]，则在[10,100]范围内dislayMode=1，大于100则dislayMode=1
     */
    autoDisplayModeSwitchSecondRatio?: number
    /**
     * 聚合时是否根据图片路径(imagePath)分类聚合显示，即当多个marker的imagePath路径参数相同时按路径对marker分类聚合
     */
    clusterByImage?: boolean
    /**
     * 避让优先级，默认值：0
     */
    priority?: number
    /**
     * 是否参与遮挡剔除
     */
    occlusionCull?: boolean
}
