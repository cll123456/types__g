import { EColor } from 'common/utils/common'
import { BaseOptions } from '../base/index'

/**
 * id (string) 3D标注的唯一标识符

groupId (string) 可选，Group分组

userData (string) 可选，用户自定义数据

text (string) 3D标注显示文字，字符长度范围[0~100]

textSize (number) 3D标注显示文字字体大小，默认值：70

textColor (Color) 3D标注显示文字颜色，支持四种格式，取值示例

textOutlineSize (number) 3D标注显示文字轮廓大小

textOutlineColor (Color) 3D标注显示文字轮廓颜色，支持四种格式，取值示例

textFixed (boolean) 3D标注显示文字是否固定文本朝向，默认值：true

textVisible (boolean) 3D标注显示文字是否显示文本，默认值：true

textLocation (array) 文字位置：[X,Y,Z]，取值示例，数组元素类型：(number)，取值范围：[任意数值]

textRotation (array) 文字旋转：[Pitch,Yaw,Roll]，数组元素类型：(number)，取值范围：[任意数值]

textScale (array) 文字缩放：[X,Y,Z]，数组元素类型：(number)，取值范围：[任意正整数]

pointName (string) 3D标注展示的特效名称，取值详见Explorer资源面板->动态标记下的显示名称，取值示例：Point_B_特效编号

pointVisible (boolean) 3D标注是否显示，默认值：true

pointScale (number) 3D标注整体缩放比例，取值范围：[0.01,任意正数]

coordinate (array) 3D标注的位置坐标: [X,Y,Z]，取值示例

coordinateType (number) 3D标注的坐标系类型，取值范围：0为Projection类型，1为WGS84类型，2为火星坐标系(GCJ02)，3为百度坐标系(BD09)，默认值：0

range (array) 3D标注的可视距离范围：[min,max]，单位：米

autoHeight (boolean) 自动判断下方是否有物体，设置正确高度，默认值：false
 */
export interface IMarker3DOptions extends BaseOptions {
    /**
     * 3D标注的唯一标识符
     */
    text?: string
    /**
     * 3D标注显示文字字体大小，默认值：70
     */
    textSize?: number
    /**
     * 3D标注显示文字颜色，支持四种格式
     */
    textColor?: EColor
    /**
     * 3D标注显示文字轮廓大小
     */
    textOutlineSize?: number
    /**
     * 3D标注显示文字轮廓颜色，支持四种格式
     */
    textOutlineColor?: EColor
    /**
     * 3D标注显示文字是否固定文本朝向，默认值：true
     */
    textFixed?: boolean
    /**
     * 3D标注显示文字是否显示文本，默认值：true
     */
    textVisible?: boolean
    /**
     * 文字位置：[X,Y,Z]，数组元素类型：(number)，取值范围：[任意数值]
     */
    textLocation?: number[]
    /**
     * 文字旋转：[Pitch,Yaw,Roll]，数组元素类型：(number)，取值范围：[任意数值]
     */
    textRotation?: number[]
    /**
     * 文字缩放：[X,Y,Z]，数组元素类型：(number)，取值范围：[任意正整数]
     */
    textScale?: number[]
    /**
     * 3D标注展示的特效名称，取值详见Explorer资源面板->动态标记下的显示名称，取值示例：Point_B_特效编号
     */
    pointName?: string
    /**
     * 3D标注是否显示，默认值：true
     */
    pointVisible?: boolean
    /**
     * 3D标注整体缩放比例，取值范围：[0.01,任意正数]
     */
    pointScale?: number
    /**
     * 3D标注的位置坐标: [X,Y,Z]
     */
    coordinate?: number[]
    /**
     * 3D标注的坐标系类型，取值范围：0为Projection类型，1为WGS84类型，2为火星坐标系(GCJ02)，3为百度坐标系(BD09)，默认值：0
     */
    coordinateType?: number
    /**
     * 3D标注的可视距离范围：[min,max]，单位：米
     */
    range?: number[]
    /**
     * 自动判断下方是否有物体，设置正确高度，默认值：false
     */
    autoHeight?: boolean
}
